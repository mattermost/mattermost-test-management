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
   * @returns Array of test case data
   */
  public async generateTestScenarios(pdfContent: string): Promise<TestCaseData[]> {
    if (!this.isAvailable()) {
      console.warn("AI service not available: No API key found. Set ANTHROPIC_API_KEY environment variable.");
      return [];
    }

    try {
      const prompt = this.createTestScenarioPrompt(pdfContent);
      const response = await this.callAI(prompt);
      return this.parseAIResponse(response);
    } catch (error) {
      console.error("Error generating test scenarios:", error);
      return [];
    }
  }

  /**
   * Create a prompt for the AI to generate test scenarios
   */
  private createTestScenarioPrompt(pdfContent: string): string {
    return `
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

Example format:
[
  {
    "name": "Test Scenario Title",
    "objective": "Verify that...",
    "precondition": "User is logged in and...",
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
      
      const jsonStr = jsonMatch[0];
      const scenarios = JSON.parse(jsonStr);
      
      return scenarios.map((scenario: any) => ({
        name: scenario.name,
        objective: scenario.objective,
        precondition: scenario.precondition,
        steps: scenario.steps
      }));
    } catch (error) {
      console.error("Error parsing AI response:", error);
      console.log("Raw response:", response);
      return [];
    }
  }
}
