interface Blog {
    slug: string;
    content: string;
    title: string;
    imageUrl: string;
    description: string;
  }
  
  

  const SampleBlogs: Blog[] = [
    {
      slug: "modern-css-techniques",
      content: `
  # Modern CSS Techniques You Should Know
  CSS has evolved significantly over the years. Master these modern techniques to level up your web designs.
  
  ## Techniques to Learn:
  - **CSS Variables**: Define reusable values globally.
  - **Custom Properties**: Dynamically update styles.
  - **Grid Layouts**: Build advanced, responsive grids.
  
  ### Example: Using CSS Variables
  \`\`\`css
  :root {
    --main-color: #3498db;
  }
  button {
    background-color: var(--main-color);
  }
  \`\`\`
  
  Learn more at [Modern CSS](https://moderncss.dev/).
      `,
      title: "Modern CSS Techniques You Should Know",
      imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Explore the latest CSS techniques like variables, custom properties, and grid layouts to create stunning web designs.",
    },
    {
      slug: "python-for-beginners",
      content: `
  # Python for Beginners: Your First Steps
  Python is one of the most beginner-friendly programming languages.
  
  ## Why Learn Python?
  - Simple syntax
  - Versatile applications (web, data, AI)
  - Extensive libraries
  
  ### Example: Hello, World!
  \`\`\`python
  print("Hello, World!")
  \`\`\`
  
  Learn more at [Python.org](https://www.python.org/).
      `,
      title: "Python for Beginners: Your First Steps",
      imageUrl: "https://images.unsplash.com/photo-1685558593626-686907d7ee4b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Python is great for beginners. Discover why it's a must-learn language and how to get started.",
    },
    {
      slug: "vue-vs-react",
      content: `
  # Vue.js vs React: Choosing the Right Framework
  Both Vue.js and React are popular JavaScript frameworks. Here's how they compare.
  
  ## Key Differences:
  - **Vue.js**: Simple and beginner-friendly.
  - **React**: Backed by Facebook, highly versatile.
  - **Ecosystem**: Vue offers a built-in router and state management; React relies on third-party libraries.
  
  ### Example: React Component
  \`\`\`jsx
  function Welcome() {
    return <h1>Hello, React!</h1>;
  }
  \`\`\`
  
  Learn more at [Vue Docs](https://vuejs.org/) and [React Docs](https://reactjs.org/).
      `,
      title: "Vue.js vs React: Choosing the Right Framework",
      imageUrl: "https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Not sure whether to use Vue.js or React? Compare their features and ecosystems to make an informed decision.",
    },
    {
      slug: "docker-containers",
      content: `
  # Understanding Docker and Containers
  Docker simplifies application deployment by using lightweight, portable containers.
  
  ## Benefits:
  - Consistent environments
  - Scalable applications
  - Simplified deployment
  
  ### Example: Running a Container
  \`\`\`bash
  docker run -d -p 80:80 nginx
  \`\`\`
  
  Learn more at [Docker Docs](https://docs.docker.com/).
      `,
      title: "Understanding Docker and Containers",
      imageUrl: "https://images.unsplash.com/photo-1646627927863-19874c27316b?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Learn how Docker and containerization can make your application deployments more efficient.",
    },
    {
      slug: "state-management-in-react",
      content: `
  # State Management in React: A Complete Guide
  State management is crucial in React applications. Here are your options.
  
  ## Popular State Management Tools:
  - **Context API**: Built into React, suitable for small apps.
  - **Redux**: Powerful for large-scale applications.
  - **Recoil**: Modern and lightweight.
  
  ### Example: Using Context API
  \`\`\`tsx
  import { createContext, useContext } from "react";
  
  const ThemeContext = createContext("light");
  
  function App() {
    const theme = useContext(ThemeContext);
    return <div>{theme}</div>;
  }
  \`\`\`
  
  Learn more at [React Context API](https://reactjs.org/docs/context.html).
      `,
      title: "State Management in React: A Complete Guide",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Discover the best tools for managing state in React applications, from Context API to Redux and Recoil.",
    },
    {
      slug: "intro-to-nodejs",
      content: `
  # Introduction to Node.js
  Node.js is a runtime environment for executing JavaScript on the server side.
  
  ## Why Use Node.js?
  - **Asynchronous**: Handles multiple requests efficiently.
  - **Fast**: Built on Chrome's V8 engine.
  - **Scalable**: Ideal for real-time applications.
  
  ### Example: Simple Server
  \`\`\`javascript
  const http = require("http");
  
  http.createServer((req, res) => {
    res.write("Hello, Node.js!");
    res.end();
  }).listen(3000);
  \`\`\`
  
  Learn more at [Node.js Docs](https://nodejs.org/en/).
      `,
      title: "Introduction to Node.js",
      imageUrl: "https://images.unsplash.com/photo-1592609931041-40265b692757?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Learn why Node.js is a popular choice for server-side JavaScript and how to build your first server.",
    },
  ];
  
  
  export default SampleBlogs
  