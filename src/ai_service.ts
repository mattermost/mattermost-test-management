import { TestCaseData } from "./generate_test_cases.ts";

/**
 * Service for AI-powered operations like generating test scenarios
 */
export class AIService {
  private apiKey: string | null = null;
  private apiEndpoint = "https://api.anthropic.com/v1/messages";
  
  constructor() {
    // Try to load API key from environment
    this.apiKey = Deno.env.get("ANTHROPIC_API_KEY") || null;
  }

  /**
   * Check if the AI service is configured and available
   */
  public isAvailable(): boolean {
    return this.apiKey !== null;
  }

  /**
   * Generate test scenarios from PDF content
   * @param pdfContent The extracted text content from the PDF
   * @param extensive Whether to generate extensive test scenarios
   * @param maxTests Maximum number of tests to generate
   * @returns Array of test case data
   */
  public async generateTestScenarios(pdfContent: string, extensive = false, maxTests = 10): Promise<TestCaseData[]> {
    if (!this.isAvailable()) {
      console.warn("AI service not available: No API key found. Set ANTHROPIC_API_KEY environment variable.");
      return [];
    }

    try {
      console.log(`Generating ${extensive ? "extensive" : "standard"} test scenarios...`);
      const prompt = this.createTestScenarioPrompt(pdfContent, extensive, maxTests);
      const response = await this.callAI(prompt);
      const scenarios = this.parseAIResponse(response);
      
      // Limit the number of scenarios to maxTests
      return scenarios.slice(0, maxTests);
    } catch (error) {
      console.error("Error generating test scenarios:", error);
      return [];
    }
  }

  /**
   * Create a prompt for the AI to generate test scenarios
   * @param pdfContent The content of the PDF
   * @param extensive Whether to generate extensive test scenarios
   * @param maxTests Maximum number of tests to generate
   * @returns The prompt for the AI
   */
  private createTestScenarioPrompt(pdfContent: string, extensive = false, maxTests = 10): string {
    const basePrompt = `
You are a QA expert who creates detailed test cases from specifications.

Here is a product specification document:
---
${pdfContent}
---

Based on this specification, generate comprehensive test scenarios with the following structure for each scenario:
1. A descriptive title for the test case
2. The objective of the test
3. Any preconditions needed
4. A list of test steps with expected results for each step

Format your response as a JSON array where each object has these properties:
- name: The test case title
- objective: The test objective
- precondition: Any preconditions (or null if none)
- steps: An array of objects with "description" and "expected" properties
- test_type: Either "manual" or "automated" to indicate if this test can be automated
`;

    const standardExample = `
Example format:
[
  {
    "name": "Test Scenario Title",
    "objective": "Verify that...",
    "precondition": "User is logged in and...",
    "test_type": "manual",
    "steps": [
      {
        "description": "Navigate to...",
        "expected": "The page loads with..."
      },
      {
        "description": "Click on...",
        "expected": "The system shows..."
      }
    ]
  }
]

Focus on creating detailed, actionable test cases that cover the key functionality described in the specification.
`;

    const extensivePrompt = `
I need you to generate an extensive set of test scenarios that thoroughly cover all aspects of the specification. For each feature or functionality mentioned:

1. Create positive test cases that verify the feature works as expected
2. Create negative test cases that verify proper error handling
3. Create edge case test cases that test boundary conditions
4. Create accessibility test cases where applicable
5. Create performance test cases where applicable

For each test case, clearly indicate whether it should be:
- "automated": Can be automated with end-to-end testing tools
- "manual": Requires manual testing due to complexity, subjective evaluation, or other factors

Example format:
[
  {
    "name": "Verify Channel Header Icon Button Appears When Runs Exist",
    "objective": "Verify that the channel header icon button appears when there are in-progress runs linked to a channel",
    "precondition": "User is logged in and there is at least one in-progress run linked to the channel",
    "test_type": "automated",
    "steps": [
      {
        "description": "Navigate to a channel with an in-progress run",
        "expected": "The channel loads successfully"
      },
      {
        "description": "Observe the channel header",
        "expected": "The Playbook runs icon button is visible in the channel header with a count indicating the number of in-progress runs"
      }
    ]
  },
  {
    "name": "Verify UI Responsiveness on Various Mobile Screen Sizes",
    "objective": "Verify that the UI elements adapt properly to different mobile screen sizes",
    "precondition": "The app is installed on devices with different screen sizes",
    "test_type": "manual",
    "steps": [
      {
        "description": "Open the app on a small phone (e.g., iPhone SE)",
        "expected": "All UI elements are properly visible and accessible"
      },
      {
        "description": "Open the app on a large phone (e.g., iPhone Pro Max)",
        "expected": "The UI takes advantage of the larger screen while maintaining usability"
      },
      {
        "description": "Open the app on a tablet",
        "expected": "The UI optimizes the layout for the tablet screen size"
      }
    ]
  }
]

IMPORTANT: Generate exactly ${maxTests} test scenarios to cover the specification. Do not generate more than ${maxTests} test scenarios.
`;

    return basePrompt + (extensive ? extensivePrompt : standardExample);
  }

  /**
   * Call the AI API with the given prompt
   */
  private async callAI(prompt: string): Promise<string> {
    if (!this.apiKey) {
      throw new Error("API key not configured");
    }

    const response = await fetch(this.apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-opus-20240229",
        max_tokens: 4000,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data.content[0].text;
  }

  /**
   * Parse the AI response into test case data
   */
  private parseAIResponse(response: string): TestCaseData[] {
    try {
      // Extract JSON from the response (in case there's additional text)
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        throw new Error("No JSON array found in response");
      }
      
      let jsonStr = jsonMatch[0];
      
      // Try to clean up the JSON string before parsing
      try {
        // First attempt to parse as is
        const scenarios = JSON.parse(jsonStr);
        return this.mapScenarios(scenarios);
      } catch (parseError) {
        console.log("Initial JSON parse failed, attempting to clean up the JSON");
        
        // Try to fix common JSON issues
        // Replace any trailing commas in arrays or objects
        jsonStr = jsonStr.replace(/,\s*([}\]])/g, '$1');
        
        // Fix unescaped quotes within strings
        jsonStr = this.fixUnescapedQuotes(jsonStr);
        
        // Try parsing again
        const scenarios = JSON.parse(jsonStr);
        return this.mapScenarios(scenarios);
      }
    } catch (error) {
      console.error("Error parsing AI response:", error);
      console.log("Raw response:", response);
      
      // Fallback: try to extract individual test cases
      try {
        return this.extractTestCasesManually(response);
      } catch (fallbackError) {
        console.error("Fallback extraction also failed:", fallbackError);
        return [];
      }
    }
  }
  
  /**
   * Map scenario objects to TestCaseData objects
   */
  private mapScenarios(scenarios: any[]): TestCaseData[] {
    return scenarios.map((scenario: any) => ({
      name: scenario.name || "Untitled Test Case",
      objective: scenario.objective || null,
      precondition: scenario.precondition || null,
      steps: Array.isArray(scenario.steps) ? scenario.steps : [],
      test_type: scenario.test_type || "manual" // Default to manual if not specified
    }));
  }
  
  /**
   * Fix unescaped quotes within JSON strings
   */
  private fixUnescapedQuotes(jsonStr: string): string {
    // This is a simplified approach - a more robust solution would use a proper JSON parser
    let inString = false;
    let result = '';
    let i = 0;
    
    while (i < jsonStr.length) {
      const char = jsonStr[i];
      
      if (char === '"' && (i === 0 || jsonStr[i-1] !== '\\')) {
        inString = !inString;
        result += char;
      } else if (inString && char === '"' && jsonStr[i-1] !== '\\') {
        // Escape unescaped quotes within strings
        result += '\\' + char;
      } else {
        result += char;
      }
      
      i++;
    }
    
    return result;
  }
  
  /**
   * Extract test cases manually as a fallback method
   */
  private extractTestCasesManually(response: string): TestCaseData[] {
    const testCases: TestCaseData[] = [];
    
    // Look for patterns that might indicate test cases
    const nameMatches = response.match(/["']name["']\s*:\s*["']([^"']+)["']/g);
    
    if (nameMatches && nameMatches.length > 0) {
      // Extract at least the names to create basic test cases
      nameMatches.forEach(match => {
        const name = match.replace(/["']name["']\s*:\s*["']([^"']+)["']/, '$1');
        testCases.push({
          name: name,
          objective: "Extracted from AI response",
          steps: [
            {
              description: "Perform the test steps according to the specification",
              expected: "The feature works as expected"
            }
          ],
          test_type: "manual"
        });
      });
    }
    
    return testCases;
  }
}
