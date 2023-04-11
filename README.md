# JustJoin.it Clone

This project is a clone of the JustJoin.it website, implementing advanced React techniques such as Higher-Order Components (HOC), Context, and the smart-dumb architecture. The application utilizes various design patterns like render props, factory, HOC, and strategy to create a maintainable, scalable, and well-structured codebase.

## Design Patterns
- **Render Props**: This pattern allows components to share common functionality by passing a render function as a prop. It promotes reusability and makes it easier to manage complex logic.
- **Factory**: The factory pattern creates objects without exposing the instantiation logic to the client, providing an interface to create instances of a class. This pattern helps to maintain a separation of concerns and makes it easy to add or modify object types.
- **Higher-Order Component (HOC)**: HOC is a function that takes a component and returns a new component with additional props and/or behavior. This pattern enables the reuse of component logic and makes it easier to refactor and test components.
- **Strategy**: The strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. This allows the algorithm to vary independently from the clients that use it, promoting flexibility and extensibility.

## Clean Code Principles
This project follows clean code principles, aiming for a well-structured, easy-to-read, and maintainable codebase. The application avoids code duplication and creates a file structure that reads like a book. Tools like ESLint and Prettier are utilized to ensure consistent and readable code formatting, making it easy for other developers to understand and work with the codebase.

## Libraries Used
Some of the key libraries used in this project include:

- `@material-ui/core`: A popular React UI framework that provides a set of components and styles for building modern, responsive, and accessible web applications.
- `@material-ui/icons`: A library that provides a set of Material Design icons for use in React applications.
- `@testing-library/react`: A lightweight solution for testing React components that encourages good testing practices by working with actual DOM nodes and user interactions.
- `axios`: A popular and feature-rich HTTP client for making API requests in JavaScript applications.
- `leaflet`: An open-source JavaScript library for creating interactive maps.
- `react-router-dom`: A declarative routing library for React applications that provides a collection of navigational components and utilities for managing routing in single-page applications.
- `webpack`: A highly configurable module bundler for JavaScript applications that helps to optimize and automate the process of building, bundling, and deploying web applications.

For a full list of libraries and their versions used in this project, please refer to the `package.json` file.


# Getting Started

Follow these steps to set up and run the JustJoin.it clone on your local machine:

1. Clone the repository:

```
https://github.com/effectiveone/justjoinit-clone-frontend.git
```


2. Change into the project directory:

```
cd justjoinit-clone-frontend
```


3. Install the required dependencies:

```
yarn
```


4. Start the development server:

```
yarn start
```


The application should now be running on `http://localhost:3000`.

## Backend Setup

To set up the backend for the JustJoin.it clone, follow these steps:

1. Download the `justjoint-backend` repository or folder.
2. Follow the instructions provided in the `README` file within the `justjoint-backend` folder.

After setting up the backend, the JustJoin.it clone should be able to communicate with the database and perform required operations.
