Git Info
Git Info is a web-based application designed to display and manage repository information. It is built using React and Material-UI, offering a clean and modern user interface. The application integrates Axios for data fetching and supports robust testing with Jest and Testing Library.

Features
View Repository Data: Displays repository details like name, description, forks, stars, and more.
Pagination: Handles pagination for large datasets efficiently.
Interactive UI: Built with Material-UI components for a responsive and accessible user interface.
Testing: Includes unit and integration tests using Jest and Testing Library.

Installation
To set up the project locally:

Clone the repository:
-git clone [https://github.com/aditisharma6202/github-app.git]

Install dependencies
-npm install


Scripts
Development
Start the development server:
-npm run dev

Build
Compile the TypeScript files and bundle the application for production:
-npm run build

Preview
Preview the production build:
-npm run preview

Linting
Run ESLint to check for code issues:
-npm run test

Technologies Used
 Frontend
 React: A library for building user interfaces.
 Material-UI: For building accessible and aesthetically pleasing components.
 Emotion: For styling components.
 Axios: For fetching repository data via REST APIs.
 Vite: A fast build tool for development and production.
 TypeScript: For type-safe JavaScript.
 ESLint: To enforce coding standards.
 Jest: For writing and executing test cases.
 Testing Library: For DOM-based testing.
 Jest DOM: To extend Jest's assertions.


 React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

```



