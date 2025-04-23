#!/usr/bin/env -S deno run --allow-read --allow-write

import { extractTestCasesFromPDF } from "../pdf_parser.ts";
import { generateTestCase } from "../generate_test_cases.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

/**
 * CLI tool to generate test cases from PDF specifications
 */
async function main() {
  const args = parse(Deno.args, {
    string: ["pdf", "output", "summary"],
    boolean: ["help", "ai", "no-ai", "extensive"],
    alias: {
      p: "pdf",
      o: "output",
      s: "summary",
      h: "help",
      a: "ai",
      e: "extensive"
    },
    default: {
      output: "data/test-cases",
      ai: true,
      extensive: false
    }
  });
  
  // Handle --no-ai flag
  if (args["no-ai"]) {
    args.ai = false;
  }

  // Show help
  if (args.help || (!args.pdf && !args.summary)) {
    console.log(`
Test Case Generator - Create test cases from PDF specifications or summaries

USAGE:
  deno run --allow-read --allow-write src/cli/generate_tests.ts [OPTIONS]

OPTIONS:
  -p, --pdf=<file>       Path to the PDF specification file
  -o, --output=<dir>     Output directory for test cases (default: data/test-cases)
  -s, --summary=<text>   Generate a test case from a text summary
  -a, --ai               Use AI to generate test scenarios (default: true)
      --no-ai            Disable AI-powered test generation
  -e, --extensive        Generate extensive test scenarios with automated/manual differentiation
  -h, --help             Show this help message

EXAMPLES:
  # Generate test cases from a PDF file using AI
  deno run --allow-read --allow-write --allow-env --allow-net src/cli/generate_tests.ts -p spec-file.pdf

  # Generate extensive test cases with automated/manual differentiation
  deno run --allow-read --allow-write --allow-env --allow-net src/cli/generate_tests.ts -p spec-file.pdf --extensive

  # Generate test cases without using AI
  deno run --allow-read --allow-write src/cli/generate_tests.ts -p spec-file.pdf --no-ai

  # Generate a test case from a summary
  deno run --allow-read --allow-write src/cli/generate_tests.ts -s "Test mobile navigation"

  # Specify output directory
  deno run --allow-read --allow-write src/cli/generate_tests.ts -p spec-file.pdf -o custom/output/dir
`);
    Deno.exit(0);
  }

  try {
    let testCases = [];

    // Generate from PDF
    if (args.pdf) {
      console.log(`Generating test cases from PDF: ${args.pdf}`);
      testCases = await extractTestCasesFromPDF(args.pdf, args.ai, args.extensive);
    } 
    // Generate from summary
    else if (args.summary) {
      console.log(`Generating test case from summary: ${args.summary}`);
      testCases = [{
        name: args.summary,
        objective: `Test the functionality: ${args.summary}`,
        steps: [
          {
            description: "Perform the necessary actions to test this functionality",
            expected: "The feature works as expected"
          }
        ]
      }];
    }

    // Generate test case files
    console.log(`Found ${testCases.length} test cases to generate`);
    
    for (const testCase of testCases) {
      const filePath = generateTestCase(testCase, args.output);
      console.log(`Generated test case: ${filePath}`);
    }
    
    console.log("Test case generation complete!");
  } catch (error) {
    console.error("Error generating test cases:", error);
    Deno.exit(1);
  }
}

// Run the main function
if (import.meta.main) {
  main();
}
