# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands
- Format and lint: `deno task check`
- Validate test cases: `deno task validate`
- Run all validation: `deno task validate-all`
- Test website locally: `cd www && deno task start` (visit http://localhost:8000)
- Search functionality: `cd www && docker compose up` (requires Elasticsearch at http://localhost:9200)
- SilverBullet: `deno task silverbullet` (visit http://localhost:3333)

## Code Style Guidelines
- Follow TypeScript strict mode (enabled in deno.jsonc)
- Use 2 spaces for indentation, 100 character line width
- Prefer single quotes for strings
- Avoid checking in sensitive and confidential data like API keys, token, credential and password except use for testing.
- Avoid checking in objects, files or images from an S3 bucket.
- Follow [Conventional Commits](https://www.conventionalcommits.org/v1.0.0/) for commit messages
- Run codespell to check for spelling errors (configured in pre-commit hook)
- Test case markdown files use frontmatter for metadata and specific content sections
- When updating test cases, append your GitHub handle to the authors field