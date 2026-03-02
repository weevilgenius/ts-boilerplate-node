# Node.js Project Boilerplate

This is boilerplate used for starting a new project targeting node.js. It will be cloned
into the new project and represents best practices for a Typescript project. It uses pnpm,
Typescript, vitest, and ESlint with opinionated rules.

## Architecture

[PLACEHOLDER: Architecture details to be added upon cloning]

## Development Commands

Ensure the project compiles, lint checks and unit tests pass when making changes:
- Check compilation: `pnpm run typecheck`
- Check lint rules: `pnpm run lint`
- Run tests: `pnpm run test`
- Check all (typecheck + lint + test): `pnpm run check`
- Build project: `pnpm run build`

## Coding Conventions

### Naming Conventions

- **Types & Interfaces**: PascalCase
- **Variables & Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### TypeScript Patterns

- **Use `interface`** for object shapes, especially extensible ones
- **Use `type`** for type aliases, unions, and tuples
- **Avoid enums** - prefer string literal unions with constants for type safety without runtime overhead
- **Use discriminated unions** with a `type` property for variant types
- **Import types separately** using `import type { ... }` for type-only imports
- **Use function keyword** for exported functions
- **Apply explicit return types** on exported functions
- **Readonly where appropriate** - use `readonly` modifier for immutable arrays/tuples

### Documentation

- **JSDoc required** on all exported interfaces, types, and functions
- **JSDoc encouraged** on complex internal functions and non-obvious logic
- **Property documentation** - use JSDoc `/** description */` above each interface property
- **Section headers** - use visual comment blocks to separate major sections in long files
  ```ts
  /* ========================================================= *\
   *  Half-edge data model                                     *
  \* ========================================================= */
  ```

## General Style

- **Avoid emoji** in code (comments, strings, etc.) unless explicitly required by the domain
- **Callback naming** - use `on<Event>` pattern for callbacks (`onChange`, `onPuzzleChanged`)
