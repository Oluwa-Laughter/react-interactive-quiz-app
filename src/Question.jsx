export const questions = [
  {
    id: 1,
    question: "What is JSX in React?",
    answers: [
      {
        text: "A JavaScript XML syntax extension that allows HTML in JavaScript",
        correct: true,
      },
      { text: "A JavaScript framework", correct: false },
      { text: "A JavaScript testing library", correct: false },
      { text: "A JavaScript styling convention", correct: false },
    ],
  },
  {
    id: 2,
    question: "What is the virtual DOM in React?",
    answers: [
      { text: "A direct copy of the browser's DOM", correct: false },
      {
        text: "A lightweight copy of the actual DOM for performance optimization",
        correct: true,
      },
      { text: "A DOM debugging tool", correct: false },
      { text: "A DOM validation library", correct: false },
    ],
  },
  {
    id: 3,
    question: "What is a React component?",
    answers: [
      { text: "A JavaScript function", correct: false },
      {
        text: "A reusable piece of UI that can contain HTML, CSS, and JavaScript",
        correct: true,
      },
      { text: "A styling framework", correct: false },
      { text: "A testing utility", correct: false },
    ],
  },
  {
    id: 4,
    question: "What is the purpose of state in React?",
    answers: [
      { text: "To store static data", correct: false },
      { text: "To manage component styling", correct: false },
      { text: "To handle component lifecycle", correct: false },
      {
        text: "To store and manage dynamic data in a component",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "Which hook is used to perform side effects in React?",
    answers: [
      { text: "useReducer", correct: false },
      { text: "useState", correct: false },
      { text: "useEffect", correct: true },
      { text: "useContext", correct: false },
    ],
  },
  {
    id: 6,
    question: "What is the correct way to update state in React?",
    answers: [
      { text: "Directly modify the state variable", correct: false },
      {
        text: "Use the setState function or state updater function",
        correct: true,
      },
      { text: "Use regular JavaScript assignment", correct: false },
      { text: "Modify the DOM directly", correct: false },
    ],
  },
  {
    id: 7,
    question: "What is the purpose of props in React?",
    answers: [
      { text: "To pass data from child to parent component", correct: false },
      { text: "To store component state", correct: false },
      { text: "To pass data from parent to child component", correct: true },
      { text: "To handle HTTP requests", correct: false },
    ],
  },
  {
    id: 8,
    question: "What is the default export in React?",
    answers: [
      { text: "A way to export multiple components", correct: false },
      { text: "A way to export a single component or function", correct: true },
      { text: "A way to import components", correct: false },
      { text: "A way to define component props", correct: false },
    ],
  },
  {
    id: 9,
    question: "What is the purpose of React.Fragment?",
    answers: [
      {
        text: "To group multiple elements without adding extra nodes to the DOM",
        correct: true,
      },
      { text: "To create component fragments", correct: false },
      { text: "To split components into smaller pieces", correct: false },
      { text: "To fragment the virtual DOM", correct: false },
    ],
  },
  {
    id: 10,
    question: "What is the purpose of useContext hook?",
    answers: [
      { text: "To manage local state", correct: false },
      { text: "To handle side effects", correct: false },
      { text: "To subscribe to React context", correct: true },
      { text: "To create custom hooks", correct: false },
    ],
  },
  {
    id: 11,
    question: "What is conditional rendering in React?",
    answers: [
      {
        text: "Rendering components based on certain conditions",
        correct: true,
      },
      { text: "Rendering all components at once", correct: false },
      { text: "Rendering styles conditionally", correct: false },
      { text: "Rendering props conditionally", correct: false },
    ],
  },
  {
    id: 12,
    question: "What is the purpose of key prop in React lists?",
    answers: [
      { text: "To style list items", correct: false },
      {
        text: "To help React identify which items have changed, been added, or removed",
        correct: true,
      },
      { text: "To set the order of list items", correct: false },
      { text: "To make lists searchable", correct: false },
    ],
  },
  {
    id: 13,
    question:
      "What is the difference between controlled and uncontrolled components?",
    answers: [
      { text: "There is no difference", correct: false },
      { text: "Controlled components have internal state", correct: false },
      {
        text: "Controlled components are managed by React state",
        correct: true,
      },
      {
        text: "Uncontrolled components are not valid in React",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "What is the purpose of useReducer hook?",
    answers: [
      { text: "To manage simple state", correct: false },
      { text: "To handle HTTP requests", correct: false },
      { text: "To manage complex state logic", correct: true },
      { text: "To reduce component size", correct: false },
    ],
  },
  {
    id: 15,
    question: "What is prop drilling in React?",
    answers: [
      { text: "A way to create props", correct: false },
      {
        text: "Passing props through multiple levels of components",
        correct: true,
      },
      { text: "A prop validation technique", correct: false },
      { text: "A way to delete props", correct: false },
    ],
  },
  {
    id: 16,
    question: "What is the purpose of useCallback hook?",
    answers: [
      { text: "To memoize functions", correct: true },
      { text: "To create callbacks", correct: false },
      { text: "To handle events", correct: false },
      { text: "To manage state", correct: false },
    ],
  },
  {
    id: 17,
    question: "What is the purpose of useMemo hook?",
    answers: [
      { text: "To memorize components", correct: false },
      { text: "To memoize values", correct: true },
      { text: "To create memos", correct: false },
      { text: "To handle memory management", correct: false },
    ],
  },
  {
    id: 18,
    question: "What is the purpose of React.StrictMode?",
    answers: [
      { text: "To enforce strict typing", correct: false },
      {
        text: "To highlight potential problems in an application",
        correct: true,
      },
      { text: "To prevent runtime errors", correct: false },
      { text: "To enforce code style", correct: false },
    ],
  },
  {
    id: 19,
    question: "What are React hooks?",
    answers: [
      { text: "Class components", correct: false },
      {
        text: "Functions that let you use state and other React features in functional components",
        correct: true,
      },
      { text: "JavaScript functions", correct: false },
      { text: "Event handlers", correct: false },
    ],
  },
  {
    id: 20,
    question: "What is the purpose of useRef hook?",
    answers: [
      { text: "To reference DOM elements directly", correct: true },
      { text: "To create references", correct: false },
      { text: "To manage state", correct: false },
      { text: "To handle side effects", correct: false },
    ],
  },
  {
    id: 21,
    question: "What is the purpose of React.memo?",
    answers: [
      { text: "To create memos", correct: false },
      { text: "To memoize entire components", correct: true },
      { text: "To handle memory management", correct: false },
      { text: "To create references", correct: false },
    ],
  },
  {
    id: 22,
    question: "What is the difference between state and props?",
    answers: [
      { text: "There is no difference", correct: false },
      { text: "Props are immutable, state is mutable", correct: true },
      { text: "State is immutable, props are mutable", correct: false },
      { text: "Both are mutable", correct: false },
    ],
  },
  {
    id: 23,
    question: "What is the purpose of useLayoutEffect hook?",
    answers: [
      { text: "To handle layout changes", correct: false },
      { text: "To perform measurements before browser paint", correct: true },
      { text: "To manage component layout", correct: false },
      { text: "To handle side effects", correct: false },
    ],
  },
  {
    id: 24,
    question: "What is the purpose of React portals?",
    answers: [
      { text: "To create new components", correct: false },
      {
        text: "To render children into a DOM node outside the parent hierarchy",
        correct: true,
      },
      { text: "To handle routing", correct: false },
      { text: "To manage state", correct: false },
    ],
  },
  {
    id: 25,
    question: "What is the purpose of custom hooks in React?",
    answers: [
      { text: "To create reusable stateful logic", correct: true },
      { text: "To create custom components", correct: false },
      { text: "To handle routing", correct: false },
      { text: "To manage styling", correct: false },
    ],
  },
  {
    id: 26,
    question: "What is the difference between Element and Component in React?",
    answers: [
      { text: "There is no difference", correct: false },
      { text: "Elements are instances of components", correct: false },
      { text: "Elements are what components render", correct: true },
      { text: "Components are instances of elements", correct: false },
    ],
  },
  {
    id: 27,
    question: "What is the purpose of React DevTools?",
    answers: [
      { text: "To write React code", correct: false },
      { text: "To debug and inspect React applications", correct: true },
      { text: "To create React components", correct: false },
      { text: "To test React applications", correct: false },
    ],
  },
  {
    id: 28,
    question: "What is the purpose of dependency array in useEffect?",
    answers: [
      { text: "To specify when the effect should run", correct: true },
      { text: "To create dependencies", correct: false },
      { text: "To manage state", correct: false },
      { text: "To handle errors", correct: false },
    ],
  },
  {
    id: 29,
    question: "What is the purpose of React.lazy?",
    answers: [
      { text: "To create lazy components", correct: false },
      { text: "To load components lazily for code splitting", correct: true },
      { text: "To handle lazy loading of images", correct: false },
      { text: "To manage performance", correct: false },
    ],
  },
  {
    id: 30,
    question: "What is the purpose of error boundaries in React?",
    answers: [
      { text: "To handle JavaScript errors", correct: false },
      { text: "To catch and handle React component errors", correct: true },
      { text: "To validate props", correct: false },
      { text: "To handle HTTP errors", correct: false },
    ],
  },
];
