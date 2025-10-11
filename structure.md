# Node.js TypeScript Reference Project

A comprehensive Node.js TypeScript project setup with modern build tools and development workflow.

## Features

- **TypeScript**: Strongly typed JavaScript with modern ES2022 features
- **Build Tools**: Automated compilation and development workflow
- **Development**: Hot reload with nodemon and ts-node
- **Testing**: Jest testing framework with TypeScript support
- **Linting**: ESLint with TypeScript rules
- **Formatting**: Prettier for consistent code style
- **Type Safety**: Strict TypeScript configuration

## Project Structure

```
ref_nodejs_typescript/
├── src/                    # Source TypeScript files
│   ├── index.ts           # Main entry point
│   └── utils/             # Utility modules
├── dist/                  # Compiled JavaScript output
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
npm install
```

### Development

```bash
# Run in development mode with hot reload
npm run dev

# Watch mode for development
npm run dev:watch
```

### Building

```bash
# Build the project
npm run build

# Build in watch mode
npm run build:watch

# Clean build directory
npm run clean
```

### Running

```bash
# Run the compiled JavaScript
npm start
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Scripts Overview

- `build`: Compile TypeScript to JavaScript
- `build:watch`: Compile in watch mode
- `start`: Run the compiled application
- `dev`: Run TypeScript directly with ts-node
- `dev:watch`: Run with nodemon for hot reload
- `clean`: Remove compiled files
- `test`: Run Jest tests
- `test:watch`: Run tests in watch mode
- `lint`: Check code with ESLint
- `lint:fix`: Fix ESLint issues automatically
- `format`: Format code with Prettier

## Configuration Files

- `tsconfig.json`: TypeScript compiler configuration
- `package.json`: Project metadata and dependencies
- `.eslintrc.json`: ESLint rules and settings
- `.prettierrc`: Prettier formatting rules
- `jest.config.js`: Jest testing configuration

## License

MIT
