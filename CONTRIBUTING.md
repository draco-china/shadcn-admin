# 🤝 Contributing to Shadcn Admin

Thank you for your interest in contributing to Shadcn Admin! We welcome contributions from everyone and are grateful for any help you can provide.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Making Changes](#-making-changes)
- [Commit Guidelines](#-commit-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Code Style](#-code-style)
- [Testing](#-testing)
- [Documentation](#-documentation)
- [Issues](#-issues)
- [Questions](#-questions)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version recommended)
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/shadcn-admin.git
   cd shadcn-admin
   ```

## 💻 Development Setup

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start the development server:**
   ```bash
   bun run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🔄 Making Changes

### Branch Naming Convention

Create a new branch for your changes using one of these prefixes:

- `feat/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation changes
- `style/` - for formatting, missing semi colons, etc.
- `refactor/` - for code refactoring
- `test/` - for adding tests
- `chore/` - for maintenance tasks

Example:
```bash
git checkout -b feat/add-user-profile
git checkout -b fix/login-validation
```

### Development Workflow

1. **Create a new branch:**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes:**
   - Write clean, readable code
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation as needed

3. **Test your changes:**
   ```bash
   # Run linting
   bun run lint

   # Format code
   bun run format

   # Build the project
   bun run build
   ```

4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "✨ feat: add user profile component"
   ```

## 📝 Commit Guidelines

We use [Gitmoji](https://gitmoji.dev/) for commit messages. Each commit should be structured as follows:

```
<gitmoji> <type>: <description>

[optional body]

[optional footer]
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (white-space, formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools

### Examples

```bash
✨ feat: add dark mode toggle
🐛 fix: resolve navigation menu overflow
📚 docs: update installation instructions
🎨 style: format code with Biome
♻️ refactor: simplify user authentication logic
🧪 test: add unit tests for utils
🔧 chore: update dependencies
```

## 🔀 Pull Request Process

### Before Submitting

1. **Ensure your code passes all checks:**
   ```bash
   bun run lint
   bun run format
   bun run build
   ```

2. **Update documentation:**
   - Update README.md if needed
   - Add JSDoc comments for new functions
   - Update relevant documentation files

3. **Test thoroughly:**
   - Test your changes in different browsers
   - Verify responsive design works
   - Check both light and dark modes

### Submitting Your PR

1. **Push your branch:**
   ```bash
   git push origin feat/your-feature-name
   ```

2. **Create a Pull Request:**
   - Use a clear and descriptive title
   - Fill out the PR template completely
   - Link any related issues
   - Add screenshots for UI changes

3. **PR Title Format:**
   ```
   ✨ feat: add user profile component
   🐛 fix: resolve mobile navigation issue
   📚 docs: update contributing guidelines
   ```

### PR Requirements

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code has been performed
- [ ] Code is commented, particularly in hard-to-understand areas
- [ ] Corresponding changes to documentation have been made
- [ ] Changes generate no new warnings
- [ ] Any dependent changes have been merged and published

## 🎨 Code Style

We use [Biome](https://biomejs.dev/) for code formatting and linting.

### Key Guidelines

- **TypeScript**: Use TypeScript for all new code
- **Components**: Use functional components with hooks
- **Styling**: Use Tailwind CSS classes
- **File naming**: Use kebab-case for files and PascalCase for components
- **Imports**: Use absolute imports from `src/`

### Formatting

Run these commands to maintain code quality:

```bash
# Check and fix linting issues
bun run lint

# Format code
bun run format

# Find unused dependencies
bun run knip
```

## 🧪 Testing

### Manual Testing

- Test your changes in multiple browsers (Chrome, Firefox, Safari)
- Verify responsive design on different screen sizes
- Test both light and dark modes
- Ensure all interactive elements work correctly

### Automated Testing

While we don't have automated tests yet, we encourage:

- Writing clean, testable code
- Adding JSDoc comments
- Following SOLID principles

## 📖 Documentation

### Code Documentation

- Add JSDoc comments for functions and components
- Use descriptive variable and function names
- Include examples in complex functions

### README Updates

- Update feature lists when adding new functionality
- Add new script descriptions
- Update installation instructions if needed

## 🐛 Issues

### Reporting Bugs

When reporting bugs, please include:

1. **Bug description**: Clear description of the issue
2. **Steps to reproduce**: Step-by-step instructions
3. **Expected behavior**: What you expected to happen
4. **Actual behavior**: What actually happened
5. **Environment**: Browser, OS, screen size
6. **Screenshots**: If applicable

### Feature Requests

When requesting features, please include:

1. **Feature description**: Clear description of the proposed feature
2. **Use case**: Why this feature would be useful
3. **Proposed solution**: How you envision the feature working
4. **Alternatives**: Any alternative solutions you've considered

## ❓ Questions

If you have questions about contributing:

1. Check existing [Issues](https://github.com/draco-china/shadcn-admin/issues)
2. Create a new [Discussion](https://github.com/draco-china/shadcn-admin/discussions)
3. Reach out to maintainers

## 🎉 Recognition

We appreciate all contributions! Contributors will be:

- Listed in our README.md
- Mentioned in release notes
- Given credit in the project

## 📄 License

By contributing to Shadcn Admin, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

Thank you for contributing to Shadcn Admin! 🚀