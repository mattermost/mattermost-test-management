import { ensureFileSync } from "https://deno.land/std/fs/mod.ts";
import { sanitizeForSlug, sanitizeName } from "./util/helper.ts";
import { extractTestCasesFromPDF } from "./pdf_parser.ts";

export interface TestCaseData {
  name: string;
  status?: string;
  priority?: string;
  folder?: string;
  authors?: string;
  team_ownership?: string[];
  priority_p1_to_p4?: string;
  objective?: string;
  precondition?: string;
  steps?: { description: string; expected: string }[];
}

/**
 * Generates a test case file from the provided data
 * @param data The test case data
 * @param outputDir The directory to save the test case file
 * @returns The path to the created file
 */
export function generateTestCase(data: TestCaseData, outputDir: string = "data/test-cases"): string {
  // Extract product/feature name from test case name if possible
  const featureMatch = data.name.match(/^(Test |Verify |Check )?(.*?)( -|:)/i);
  const featureName = featureMatch ? featureMatch[2].trim() : "Mobile App";
  
  // Determine folder based on test name
  let folderName = "Mobile";
  if (data.name.toLowerCase().includes("playbook")) {
    folderName = "Playbooks";
  } else if (data.name.toLowerCase().includes("channel")) {
    folderName = "Channels";
  } else if (data.name.toLowerCase().includes("run")) {
    folderName = "Playbook Runs";
  }
  
  // Set default values
  const testCase = {
    name: data.name,
    status: data.status || "Active",
    priority: data.priority || "Normal",
    folder: data.folder || folderName,
    authors: data.authors || "@qa-team",
    team_ownership: data.team_ownership || ["Mobile", "Playbooks"],
    priority_p1_to_p4: data.priority_p1_to_p4 || "P2 - Core Functions (Do core functions work?)",
    location: "null",
    component: "null",
    tags: "[]",
    labels: "[]",
    tested_by_contributor: "''",
    cypress: "N/A",
    detox: "N/A",
    mmctl: "N/A",
    playwright: "N/A",
    rainforest: "[]",
    manual_test_environments: "[]",
    id: "null",
    key: "null",
    created_on: "null",
    last_updated: "null",
    case_hashed: "null",
    steps_hashed: "null",
  };

  // Create front matter
  let content = `---
# (Required) Ensure all values are filled up
name: "${testCase.name}"
status: ${testCase.status}
priority: ${testCase.priority}
folder: ${testCase.folder}
authors: ${testCase.authors}
team_ownership:
${testCase.team_ownership.map(team => `- ${team}`).join("\n")}
priority_p1_to_p4: ${testCase.priority_p1_to_p4}

# (Optional)
location: ${testCase.location}
component: ${testCase.component}
tags: ${testCase.tags}
labels: ${testCase.labels}
tested_by_contributor: ${testCase.tested_by_contributor}

# (Optional) Test type and tools
cypress: ${testCase.cypress}
detox: ${testCase.detox}
mmctl: ${testCase.mmctl}
playwright: ${testCase.playwright}
rainforest: ${testCase.rainforest}
manual_test_environments: ${testCase.manual_test_environments}

# Do not change
id: ${testCase.id}
key: ${testCase.key}
created_on: ${testCase.created_on}
last_updated: ${testCase.last_updated}
case_hashed: ${testCase.case_hashed}
steps_hashed: ${testCase.steps_hashed}
---

`;

  // Add objective if provided
  if (data.objective) {
    content += `${data.objective}\n\n`;
  }

  // Add precondition if provided
  if (data.precondition) {
    content += `**Precondition**\n\n${data.precondition}\n\n`;
  }

  // Add steps
  if (data.steps && data.steps.length > 0) {
    data.steps.forEach((step, index) => {
      content += `**Step ${index + 1}**\n\n${step.description}\n\n**Expected**\n\n${step.expected}\n\n`;
    });
  } else {
    // Add default step if no steps provided
    content += `**Step 1**\n\nChange required.\n\n**Expected**\n\nChange required.\n`;
  }

  // Create slug from name
  const slug = sanitizeForSlug(data.name);
  const filePath = `${outputDir}/${slug}.md`;

  // Ensure directory exists and write file
  ensureFileSync(filePath);
  Deno.writeTextFileSync(filePath, content);

  return filePath;
}

/**
 * Extracts test cases from a PDF file
 * @param pdfPath Path to the PDF file
 * @returns Array of test case data
 */
export async function extractTestCasesFromPDF(pdfPath: string): Promise<TestCaseData[]> {
  console.log(`Extracting test cases from ${pdfPath}...`);
  
  // This is a placeholder for actual PDF parsing logic
  // In a real implementation, you would use a PDF parsing library
  // For now, we'll just return a sample test case based on the PDF filename
  
  const filename = pdfPath.split("/").pop() || "";
  const name = filename.replace(".pdf", "");
  
  return [{
    name: `Test case for ${name}`,
    objective: "This is an automatically generated test case from the PDF specification.",
    steps: [
      {
        description: "Review the specification in the PDF document",
        expected: "All requirements are understood"
      },
      {
        description: "Implement the feature according to specifications",
        expected: "Feature works as described in the PDF"
      }
    ]
  }];
}

/**
 * Main function to generate test cases from a PDF
 */
async function main() {
  const args = Deno.args;
  
  if (args.length < 1) {
    console.error("Please provide a path to a PDF file");
    Deno.exit(1);
  }

  const pdfPath = args[0];
  const outputDir = args[1] || "data/test-cases";
  
  try {
    const testCases = await extractTestCasesFromPDF(pdfPath);
    
    console.log(`Found ${testCases.length} test cases in the PDF`);
    
    for (const testCase of testCases) {
      const filePath = generateTestCase(testCase, outputDir);
      console.log(`Generated test case: ${filePath}`);
    }
    
    console.log("Test case generation complete!");
  } catch (error) {
    console.error("Error generating test cases:", error);
    Deno.exit(1);
  }
}

// Run the main function if this module is executed directly
if (import.meta.main) {
  main();
}
