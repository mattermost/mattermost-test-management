# Test Case Generator

This tool automatically generates test cases from PDF specifications or summaries.

## Features

- Extract test scenarios from PDF specifications
- AI-powered test case generation
- Create test cases from simple summaries
- Output formatted Markdown test case files

## Usage

### Generate test cases from a PDF specification using AI

```bash
deno run --allow-read --allow-write --allow-env --allow-net src/cli/generate_tests.ts -p spec-file.pdf
```

### Generate test cases without using AI

```bash
deno run --allow-read --allow-write src/cli/generate_tests.ts -p spec-file.pdf --no-ai
```

### Generate a test case from a summary

```bash
deno run --allow-read --allow-write src/cli/generate_tests.ts -s "Test mobile navigation"
```

### Specify output directory

```bash
deno run --allow-read --allow-write src/cli/generate_tests.ts -p spec-file.pdf -o custom/output/dir
```

## AI-Powered Test Generation

To use the AI-powered test generation:

1. Set your Anthropic API key as an environment variable:
   ```bash
   export ANTHROPIC_API_KEY=your-api-key
   ```

2. Run the tool with the `--ai` flag (enabled by default):
   ```bash
   deno run --allow-read --allow-write --allow-env --allow-net src/cli/generate_tests.ts -p spec-file.pdf
   ```

The AI will analyze the PDF content and generate comprehensive test scenarios with detailed steps and expected results.

### Extensive Test Generation

For more thorough test coverage, use the `--extensive` flag to generate a comprehensive set of test cases that include:

- Positive test cases
- Negative test cases
- Edge cases
- Accessibility tests
- Performance tests

Each test case will be marked as either "automated" (can be automated with end-to-end testing tools) or "manual" (requires manual testing).

```bash
deno run --allow-read --allow-write --allow-env --allow-net src/cli/generate_tests.ts -p spec-file.pdf --extensive
```

This will generate more test cases with clear differentiation between those that can be automated and those that require manual testing.
