# React Component Refactoring and Creation with Firebase Deployment

## Overview

In this tutorial, you'll practice component creation in React and deploy your application to Firebase Hosting. You'll create a new component to display personal information and streamline the application by removing boilerplate code.

## Learning Objectives

- Work with TypeScript interfaces for props
- Implement a prop-based component
- Deploy a React application using Firebase Hosting
- Apply modern React development practices
- understand the basics of testing React components; using a 'test first' approach
- learn a few basics of doing clean personal development by using tools like linting and prettier.

## Prerequisites

- Node.js (v16 or newer)
- npm or yarn installed
- Basic knowledge of JavaScript/TypeScript
- Familiarity with React concepts
- Git installed
- Google account (for Firebase)

## Setup Instructions

### Step 1: Clone the Template Repository

Use npx to run degit without installing it globally:

```bash
npx degit https://github.com/toddwseattle/pretty-vitest-react-ts-template react-bio-app
```

### Step 2: Initialize Git Repository

After cloning the template, immediately initialize a Git repository to track your changes:

```bash
cd react-bio-app
git init
git add .
git commit -m "Initial commit: Template setup"
```

This will create your first commit with the original template. As you complete each step of the assignment, commit your changes to create checkpoints you can return to if needed.

### Step 3: Install Dependencies and make sure the template works

```bash
npm install
npm run dev
```

you will get a link in console to open the app in your browser. You should see a simple page with a header and a footer and a "not yet implemented" message in the middle.

````bash
### Step 4: Explore the Project Structure

Take a moment to familiarize yourself with the project structure:

- `/src` - Contains React components and application code
- `/src/App.tsx` - Main application component
- `/tests` - Contains Vitest test file that must pass to complete the assignment
- `vite.config.ts` - Vite and Vitest configuration

## Git Version Control

As you complete each step of the assignment, commit your changes to create checkpoints:

```bash
# After completing the BioCard component
git add src/components/BioCard.tsx src/components/BioCard.css
git commit -m "Add BioCard component"

# After cleaning up App.tsx
git add src/App.tsx src/App.css
git commit -m "Clean up and personalize App component"
````

**Reverting to Previous State**: If you encounter problems, you can use Git to return to your last working state:

```bash
# View commit history
git log --oneline

# Reset to a specific commit (replace abc1234 with actual commit hash)
git reset --hard abc1234
```

This brings your codebase back to the state of that commit, effectively undoing changes made after it.

## Assignment Tasks

### Task 1: Create a BioCard Component

Create a new component to display personal information:

1. The component is `BioCard.tsx` in the `/src/components` directory
2. The component has corresponding CSS file for styling
3. Implement a BioCard component that:
   - Accepts props for name, link, description, and image URL
   - Displays the name as a hyperlink to the provided URL
   - Shows the description text below the name
   - Displays the image above the text content; and has an `alt` attribute for accessibility with the name
   - Uses CSS to style the component with a professional look

#### Component Requirements

Your BioCard component should follow this interface:

```typescript
interface BioCardProps {
  name: string;
  link: string;
  description: string;
  imageUrl: string; // URL to a professional photo or any image that represents you that you're comfortable sharing online
}

export function BioCard({ name, link, description, imageUrl }: BioCardProps) {
  // Implementation here
}
```

### Task 2: Clean Up and Personalize App.tsx

update the use of the BioCard component in the App.tsx file to display your personal information: - Your name - A link to your professional profile (LinkedIn, GitHub, personal website, etc.) - A brief professional description or bio statement - A link to a professional photo or any image that represents you that you're comfortable having on the open internet

- Add any additional styling or structure to make the page look professional

The test make sure that you have all of this information in the BioCard component. Review the test file [bio-card.test.tsx](./tests/bio-card.test.tsx) to see the specific requirements for the BioCard component.

### Task 3: Insure BioCard tests pass

The tests in [bio-card.test.tsx](./tests/bio-card.test.tsx) are written to test the BioCard component. You should not modify these tests. You should run the tests to make sure your BioCard component is working as expected. You can run the tests with the following command:

```bash
npm test
```

You can also use the test extensions in VSCode to run the tests if you have the Jest and Vite test running extension installed.

Before you write your code; you should make sure the tests run and fail. This is a 'test first' approach to development. You should write your code to make the tests pass. A good strategy is to work through each test one by one. Make sure you understand what the test is asking for and then write the code to make the test pass. Once you have a test passing, move on to the next test in the file

Think about making a commit each time you get the tests working. The template uses some linting and prettier tools to help you keep your code clean; and checks those before accepting the commit. You can run these in the terminal with the following commands:

```bash
npm run lint
```

The purpose of this is to insure that your code is formatted in a standard way (prettier) and that it follows some basic coding standards that help prevent errors (linting).

### Task 3: Inspect the application in the browser

After you have completed the BioCard component and updated the App.tsx file, you should be able to see your personal information displayed in the browser. You can run the application with the following command:

```bash
npm run dev
```

### Task 4: Deploy to Firebase Hosting

Finally, deploy your application to Firebase:

1. Insure you have installed the Firebase CLI:

```bash
firebase --version
```

This should return a version number for firebase. If it does not, you can install the firebase CLI with the following command:

```bash
npm install -g firebase-tools
```

2. Build your application:

   ```bash
   npm run build
   ```

3. Initialize Firebase:

   ```bash
   firebase login
   firebase init
   ```

   During initialization:

   - Select "Hosting" as the feature
   - Select "Use an existing project" or "Create a new project"
   - Use "dist" as your public directory (Vite's default build output)
   - Configure as a single-page app: Yes
   - Set up automatic deploys: No (for now)

4. Deploy to Firebase:

   ```bash
   firebase deploy
   ```

5. Access your deployed site at the URL provided by Firebase after deployment

## Submission Guidelines

To submit your work:

1. Ensure all tests pass with:

   ```bash
   npm test
   ```

2. Push your code to GitHub:

   ```bash
   git branch -M main
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

3. Ensure your application is deployed to Firebase Hosting

4. Submit your Firebase Hosting URL in Canvas as well as a link to the repository

## Grading Rubric (10 Points Total)

| Criteria                | Points   | Description                                                                                                          |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| **GitHub Repository**   | 3 points | Code is successfully pushed to GitHub and can build with `npm install && npm run build`                              |
| **BioCard Component**   | 5 points | BioCard component is created with the correct props, displays information properly, and follows the specified design |
| **Firebase Deployment** | 2 points | Application is successfully deployed to Firebase Hosting and accessible via the provided URL                         |

**Note:** The Firebase URL must be submitted in Canvas to receive credit for deployment.

## Helpful Resources

- [React Documentation on Components and Props](https://react.dev/learn/your-first-component)
- [TypeScript Documentation on Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Testing Library Documentation](https://testing-library.com/docs/)
