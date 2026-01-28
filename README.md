# cs 394 Lab 00: React Component Creation and Firebase Deployment

## Overview

In this tutorial, you'll practice component creation in React and deploying your application to Firebase Hosting. You'll create a new component to display personal information and streamline the application by removing boilerplate code.

## Using GitHub Copilot for This Lab

This lab includes **GitHub Copilot coaching instructions** designed to help you learn effectively. When you use Copilot:

- **Copilot will guide you, not give you answers** - It will ask questions and provide hints to help you think through problems
- **You'll be encouraged to explore** - Copilot will point you to documentation and help you understand concepts
- **You'll develop problem-solving skills** - The goal is to help you learn the process, not just complete the task

**Tip:** Don't just accept the first suggestion! Engage with Copilot by asking questions, and use it as a learning tool to understand *why* code works, not just *what* code to write.

The Copilot instructions are located in `.github/copilot-instructions.md` if you want to review them.

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

Use the instructions and link provided in Canvas to clone the template repository to your local machine.

### Step 2: Install Dependencies and make sure the template works

```bash
npm install
npm run dev
```

you will get a link in console to open the app in your browser. You should see a simple page with a header and a footer and a "No BioCard Implemented" message in the middle.

### Step 3: Explore the Project Structure

Take a moment to familiarize yourself with the project structure:

- `/src` - Contains React components and application code
- `/src/App.tsx` - Main application component
- `/tests` - Contains Vitest test file that must pass to complete the assignment
- `vite.config.ts` - Vite and Vitest configuration

## Git Version Control

As you complete each step of the assignment, commit your changes to create checkpoints:

```bash
# do these commands from the root of the work space
# the "." indicates the current directory, which will add all changed files to the commit.
git . commit -m "changed BioCard component to pass first test"
#  commit at each working step.

git . commit -m "all tests passing for BioCard""

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

### Task 1: Create a BioCard Component

Create a new component to display personal information:

1. The component is `BioCard.tsx` in the `/src/components` directory
2. The component has a corresponding CSS file for styling
3. Implement a BioCard component that:
   - Accepts props for name, link, description, and image URL
   - Displays the name as a hyperlink to the provided URL
   - Shows the description text below the name
   - Displays the image above the text content; and has an `alt` attribute for accessibility with the name
   - Uses CSS to style the component with a professional look

**Before you start coding:**
- Open and read `tests/biocard.test.tsx` - What is each test checking?
- Look at the current `BioCard.tsx` - What's already there?
- Think about the structure: What HTML elements will you need?

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

**Hints for implementation:**
- The function signature shows you how to accept and destructure props
- You'll need JSX elements for an image, a link, and text
- The tests will tell you exactly what elements and attributes are expected
- Start simple - make one test pass at a time

### Task 2: Clean Up and Personalize App.tsx

update the use of the BioCard component in the App.tsx file to display your personal information: - Your name - A link to your professional profile (LinkedIn, GitHub, personal website, etc.) - A brief professional description or bio statement - A link to a professional photo or any image that represents you that you're comfortable having on the open internet

Add any additional styling or structure to make the page look professional

The tests make sure that you have all of this information in the BioCard component. Review the test file [bio-card.test.tsx](./tests/bio-card.test.tsx) to see the specific requirements for the BioCard component.

**Think about:**
- How do you pass data to a React component? (Hint: props)
- What syntax do you use to pass multiple props?
- Where can you find example images to use? (Consider GitHub profile, LinkedIn, or a professional headshot)
- What makes a good professional description? (Keep it brief but informative)

### Task 3: Insure BioCard tests pass

Run the tests in [bio-card.test.tsx](./tests/bio-card.test.tsx). **You should not modify these tests.** You should run the tests to make sure your BioCard component is working as expected. Run the tests with the following command:

```bash
npm test
```

You can also use the test extensions in VSCode to run the tests if you have the Jest and Vite test running extension installed.

**Understanding Test-Driven Development (TDD):**

Before you write your code; you should make sure the tests run and fail. This is a 'test first' approach to development, often abbreviated [TDD](https://tidyfirst.substack.com/p/canon-tdd). 

**Recommended workflow:**
1. **Read the test file first** - Understand what each test expects before writing code
2. **Run the tests** - See them fail (this is the "red" phase)
3. **Write minimal code** - Make just one test pass at a time
4. **Run tests again** - Verify it passes (this is the "green" phase)
5. **Commit your progress** - Save your working code
6. **Move to the next test** - Repeat the process

**Reflection questions to consider:**
- What is each test checking for?
- Why might the tests be ordered this way?
- What's the simplest code that could make this test pass?
- How does the test output guide you toward the solution?

A good strategy is to work through each test one by one. Make sure you understand what the test is asking for and then write the code to make the test pass. Once you have a test passing, move on to the next test in the file.

In a real project, you would typically write the tests yourself as you develop the component. However, for this assignment, the tests are already provided for you.

Think about making a commit each time you get a test working. The template uses [eslint](https://eslint.org/docs/latest/use/getting-started) and [prettier](https://prettier.io/) to keep your code clean and tidy. the tools run before accepting the commit. You can run these in the terminal with the following commands:

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
- don't overwrite an existing index.html

The `init` command creates two files in the root of your project, `firebase.json` and `.firebaserc`, which store your Firebase project configuration. commit these changes to github with `git add .` and `git commit -m "firebase init"` to save your progress. 4. After initialization, build your application again to ensure everything is up to date:

5. Deploy to Firebase:t

```bash
firebase deploy
```

6. Access your deployed site at the URL provided by Firebase after deployment

## Submission Guidelines

To submit your work:

1. Ensure all tests pass with:

```bash
npm test
```

you can also run the tests in the same way grading runs the tests with this npm command:

```bash
npm run test-grade
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

| Criteria                | Points   | Description                                                                                                           |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| **GitHub Repository**   | 3 points | Code is successfully pushed to GitHub and can build with `npm install && npm run build`                               |
| **BioCard Component**   | 5 points | BioCard component is created with the correct props, displays information properly, tests pass and use the css styles |
| **Firebase Deployment** | 2 points | Application is successfully deployed to Firebase Hosting and accessible via the provided URL                          |

**Note:** The Firebase URL must be submitted in Canvas to receive credit for deployment.

## Learning Strategies and Tips

### Problem-Solving Approach

When you get stuck, try this systematic approach:

1. **Read the error message carefully** - What is it telling you?
2. **Check the tests** - What exactly is being tested?
3. **Review the documentation** - Links are provided in the Helpful Resources section
4. **Try the simplest solution first** - Complex solutions often indicate you're overthinking
5. **Use console.log()** - Debug by printing values to understand what's happening
6. **Commit working code frequently** - You can always revert if something breaks

### Making the Most of GitHub Copilot

- **Ask questions** instead of just accepting suggestions
- **Request explanations** for code you don't understand
- **Use it as a learning tool**, not just a code generator
- **Verify suggestions** by running tests and checking documentation
- **Experiment** with different ways of asking for help

### Common Pitfalls to Avoid

- **Don't skip reading the tests** - They tell you exactly what's needed
- **Don't modify the test file** - Your code should make the tests pass as-is
- **Don't rush through errors** - Each error is a learning opportunity
- **Don't forget to commit** - Regular commits protect your work
- **Don't copy code you don't understand** - Take time to learn what it does

### Reflection Prompts

As you work through this lab, consider:

- What was the most challenging part? Why?
- How did the tests help guide your implementation?
- What did you learn about React component props?
- How does TypeScript help catch errors before runtime?
- What would you do differently if you were creating this component from scratch?

## Helpful Resources

- [React Documentation on Components and Props](https://react.dev/learn/your-first-component)
- [TypeScript Documentation on Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Vitest Documentation](https://vitest.dev/guide/)
- [Testing Library Documentation](https://testing-library.com/docs/)
