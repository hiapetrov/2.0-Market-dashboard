# Contributing to MarketPro Dashboard

Thank you for your interest in contributing to MarketPro Dashboard! This document provides guidelines and instructions for contributing.

## Contributor License Agreement

Before we can accept your contributions, you must agree to our Contributor License Agreement (CLA):

- **Individual contributors**: Please read and agree to our [Individual CLA](./INDIVIDUAL_CLA.md)
- **Corporate contributors**: Please have your company sign our [Corporate CLA](./CORPORATE_CLA.md)

### How to signify CLA agreement:

For individual contributors, include the following statement in your first pull request comment:

```
I have read the CLA Document and I hereby sign the CLA
```

For corporate contributors, please email a signed copy of the Corporate CLA to [your contact information] before submitting contributions.

## Code of Conduct

Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md) to foster an inclusive and respectful community.

## How to Contribute

### Reporting Bugs

- Check if the bug has already been reported in the Issues section
- Use the bug report template when creating a new issue
- Include detailed steps to reproduce the bug
- Include screenshots if applicable
- Describe expected behavior vs. actual behavior

### Suggesting Features

- Check if the feature has already been suggested in the Issues section
- Use the feature request template when creating a new issue
- Explain why this feature would be useful to most users
- Outline how the feature might work

### Code Contributions

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Follow the code style guidelines
5. Write tests for your changes if applicable
6. Run the existing tests
7. Commit your changes (`git commit -m 'Add some amazing feature'`)
8. Push to your branch (`git push origin feature/amazing-feature`)
9. Open a Pull Request

### Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update any relevant documentation
3. Include tests for new functionality
4. Ensure all tests pass
5. Link any relevant issues in the PR description
6. Include your CLA agreement statement in the PR comment

## Development Setup

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/marketpro-dashboard.git
   cd marketpro-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

## Code Style Guidelines

- Use TypeScript for all new components
- Follow the existing code style
- Use functional components with hooks
- Use consistent naming conventions
- Comment your code where necessary
- Follow our component structure pattern

## Testing

- Write tests for new components and features
- Run existing tests before submitting a PR
- Ensure your code doesn't break existing functionality

## Documentation

- Update documentation for any component changes
- Document any new props or interfaces
- Include JSDoc comments for functions

## Questions?

If you have any questions about contributing, please reach out to [your contact information].

Thank you for contributing to MarketPro Dashboard!
