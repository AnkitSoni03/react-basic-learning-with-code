################### Context API in React – Detailed Explanation ##########################

What is Context API?
The Context API is a built-in feature in React that allows for state management and data sharing across components without prop drilling (passing props manually through multiple components). It provides a way to create global state that can be accessed anywhere in the React component tree.


*************** start ******************

Why Use Context API?
✅ Avoids Prop Drilling: Directly passes data to deeply nested components without manually passing props at every level.
✅ Simplifies State Management: Ideal for small to medium-sized applications where Redux might be overkill.
✅ Easy to Use: No extra libraries required, as it is a native feature of React.
✅ Improves Readability: Makes code cleaner by reducing unnecessary prop passing.


****************************************

How Context API Works?
Context API consists of three main parts:

React.createContext() → Creates a Context object.

Provider Component → Provides the state/data to its child components.

Consumer (or useContext Hook) → Consumes the context value in any component.

*********************************************

1. Create Context (ThemeContext.js)

code :

import { createContext } from "react";

const ThemeContext = createContext("light");  // Default value is "light"
export default ThemeContext;

👉 createContext() creates a Context with a default value (optional).

2. Provide Context (App.js)

code :

import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemedComponent from "./ThemedComponent";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

export default App;

👉 The Provider wraps the application and passes a value (state) to its children.

3. Consume Context Using useContext Hook (ThemedComponent.js)

code :

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemedComponent() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemedComponent;

👉 useContext(ThemeContext) allows direct access to theme and setTheme from the context.


*************************************

Context API vs Redux – When to Use What?

Feature	Context API	Redux


-------------------------------------------------------------------------------------------------------------------------------------------  
| **Feature**     | **Context API**                                                 | **Redux**                                           |  
|---------------|-----------------------------------------------------------------|-------------------------------------------------|  
| **Best for**  | Small to medium-sized applications                             | Large-scale applications with complex state    |  
| **Performance** | Can cause unnecessary re-renders                             | Optimized with reducers and middleware        |  
| **Middleware Support** | No built-in middleware support                        | Supports middleware like Redux Thunk & Saga   |  
| **Ease of Use** | Simple and built-in React API                                | More complex, requires setup                  |  
| **Data Management** | Only provides state sharing                            | Centralized state management                 |  
-------------------------------------------------------------------------------------------------------------------------------------------  


*************************************


Final Key Takeaways for Context API
✔ Context API is best for lightweight global state management (e.g., themes, authentication).
✔ Easy to set up and built into React, reducing dependency on external libraries.
✔ For complex state logic (like API calls, caching, and side effects), Redux is a better choice.

This makes Context API a great tool for handling global state in simpler applications where Redux might be overkill. 🚀