# React Component Refactoring and Creation with Firebase Deployment

## Overview

In this tutorial, you'll practice component refactoring and creation in React, then deploy your application to Firebase Hosting. You'll refactor an existing counter component, create a new component to display personal information, and streamline the application by removing boilerplate code.

## Learning Objectives

- Extract functionality into reusable React components
- Work with TypeScript interfaces for props
- Implement stateful components and prop-based components
- Deploy a React application using Firebase Hosting
- Apply modern React development practices

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

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Explore the Project Structure

Take a moment to familiarize yourself with the project structure:

- `/src` - Contains React components and application code
- `/src/App.tsx` - Main application component with counter functionality
- `/tests` - Contains Vitest test files
- `vite.config.ts` - Vite and Vitest configuration

## Git Version Control

As you complete each step of the assignment, commit your changes to create checkpoints:

```bash
# After completing the Counter component
git add src/components/Counter.tsx src/App.tsx
git commit -m "Complete Counter component refactoring"

# After completing the BioCard component
git add src/components/BioCard.tsx src/components/BioCard.css
git commit -m "Add BioCard component"

# After cleaning up App.tsx
git add src/App.tsx src/App.css
git commit -m "Clean up and personalize App component"
```

**Reverting to Previous State**: If you encounter problems, you can use Git to return to your last working state:

```bash
# View commit history
git log --oneline

# Reset to a specific commit (replace abc1234 with actual commit hash)
git reset --hard abc1234
```

This brings your codebase back to the state of that commit, effectively undoing changes made after it.

## Assignment Tasks

### Task 1: Refactor the Counter from App.tsx

Currently, the counter functionality is implemented directly in the App component. Your first task is to refactor this into a separate component:

1. Create a new file named `Counter.tsx` in the `/src/components` directory (create this directory if it doesn't exist)
2. Implement a reusable Counter component that:

   - Maintains its own state for the count
   - Provides increment, decrement, and reset functionality
   - Accepts an optional `initialValue` prop (default: 0)
   - Has clear, semantic HTML structure

3. Update `App.tsx` to:
   - Import and use your new Counter component
   - Remove the counter-specific state and functions
   - Pass any necessary props to the Counter component

#### Component Requirements

Your Counter component should follow this interface:

```typescript
interface CounterProps {
  initialValue?: number;
}

export function Counter({ initialValue = 0 }: CounterProps) {
  // Implementation here
}
```

And should render:

- A display showing the current count
- Increment (+) button
- Decrement (-) button
- Reset button

### Task 2: Create a BioCard Component

Next, create a new component to display personal information:

1. Create a new file named `BioCard.tsx` in the `/src/components` directory
2. Implement a BioCard component that:
   - Accepts props for name, link, description, and image URL
   - Displays the name as a hyperlink to the provided URL
   - Shows the description text below the name
   - Displays the image above the text content
   - Has appropriate styling

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

### Task 3: Clean Up and Personalize App.tsx

Remove the boilerplate code from the template and personalize the application:

1. Remove unnecessary logos, links, and boilerplate text
2. Update `App.tsx` to:
   - Import your Counter and BioCard components
   - Use the BioCard component with your personal information:
     - Your name
     - A link to your professional profile (LinkedIn, GitHub, personal website, etc.)
     - A brief professional description or bio statement
     - A link to a professional photo or any image that represents you that you're comfortable having on the open internet
   - Add the Counter component below your BioCard
   - Add any additional styling or structure to make the page look professional

### Task 4: Deploy to Firebase Hosting

Finally, deploy your application to Firebase:

1. Install the Firebase CLI:

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

## Testing Your Implementation

Run the tests for your Counter component:

```bash
npm test
```

The tests validate that:

- The component renders properly
- Increment button increases the count by 1
- Decrement button decreases the count by 1
- Reset button returns the count to initialValue
- The component accepts and uses the initialValue prop correctly

## Submission Guidelines

To submit your work:

1. Ensure all tests pass with:

   ```bash
   npm test
   ```

2. Push your code to GitHub:

   ```bash
   git init
   git add .
   git commit -m "Complete React component assignment"
   git branch -M main
   git remote add origin [your-github-repo-url]
   git push -u origin main
   ```

3. Ensure your application is deployed to Firebase Hosting

4. Submit your Firebase Hosting URL in Canvas

## Grading Rubric (10 Points Total)

| Criteria                | Points   | Description                                                                                                          |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| **GitHub Repository**   | 2 points | Code is successfully pushed to GitHub and can build with `npm install && npm run build`                              |
| **Counter Component**   | 3 points | Counter component is properly refactored from App.tsx, functions correctly, and passes all tests                     |
| **BioCard Component**   | 3 points | BioCard component is created with the correct props, displays information properly, and follows the specified design |
| **Firebase Deployment** | 2 points | Application is successfully deployed to Firebase Hosting and accessible via the provided URL                         |

**Note:** The Firebase URL must be submitted in Canvas to receive credit for deployment.

## Helpful Resources

- [React Documentation on Components and Props](https://react.dev/learn/your-first-component)
- [TypeScript Documentation on Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Testing Library Documentation](https://testing-library.com/docs/)
