Hi there, this is one of my most anticipated projects, I have done the first part of this project which I bring to you, I shall complete this project in parts, so make sure you know that this is not the full project.

Before I proceed onto explaining the code,  I would like anyone who is reading this to know who has helped me built this particular project, and that is none other than Mosh Hamedani, Mosh is a great teacher with over 20+ years of Programming experience, if you want to check him here --> https://www.youtube.com/@programmingwithmosh

Now Let's dive into the project!

As you can see I have used Vite for this project, this project was a version of the rawg.io site.
- I have done almost all this project in TypeScript.
- I have used Chakra UI, although initially I wanted to use Next UI (now known as Hero UI) , with some Magic UI, however they proved insufficient for this particular poject.
- I have used the rawg.io site to fetch the games and all its details(id, name, publish  date, cover image, etc).
- Note that I have practised two ways to fetch the games, one way was dynamic in which the data was fetched only when the user entered the page or refreshed the page(this is the one you are going to see in part 1), the second way in which data was fetched was static, meaning that the data was already there hardcoded, the first way also had a cool animation of a spinner(loading spinner using Chakra).
- I have used a very time saving principle that programmes use and that is that 'If it works, it works', meaning that I shall first make my code work , then I shall polish and refactor the code to make it clean.
- I have used custom hooks to add a personal touch to the project.
- And finally I have deployed it on Vercel

  I'll now Higlight a few things I would lke to work on the 2nd part:
  - I will use React Query(which would mean great features like paginated and infinite queries among other great features).
  - The other implementation would be of Global State Management, I shall explore Zustand , which is a State Management library.
  - And finally I shall implement routing with React Router in order to make my site more robust and scalable.
 
That's it for now!

# React + TypeScript + Vite

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
