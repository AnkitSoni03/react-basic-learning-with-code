Short Notes on Context API in React.js

Definition:
The Context API is a built-in feature in React that allows data to be shared across components without passing props manually at every level.


*************************


Use Case:
Helps in managing global state such as themes, authentication, user data, and language preferences.

Key Components:

1. React.createContext() – Creates a Context object.

2. Provider (<Context.Provider>) – Supplies the state to child components.

3. Consumer (<Context.Consumer>) – Consumes the provided state (used in class components).

4. useContext() Hook – A modern way to access context in functional components.

***************************

Steps to Use Context API:

Create a Context: const MyContext = React.createContext();

Provide a Value: Wrap the component tree with <MyContext.Provider value={data}>

Consume the Context: Use const data = useContext(MyContext); in functional components.

*************************** 

Advantages:

Avoids prop drilling (passing props manually at multiple levels).

Improves code readability and maintainability.

Better than Redux for simple global state management.


****************************
Example Code:

import React, { createContext, useContext } from "react";

// Create Context
const UserContext = createContext();

function ChildComponent() {
    const user = useContext(UserContext);
    return <h1>Hello, {user}!</h1>;
}

function App() {
    return (
        <UserContext.Provider value="Ankit">
            <ChildComponent />
        </UserContext.Provider>
    );
}

export default App;


****************************


When to Use?

When multiple components need access to shared data.

When prop drilling becomes complex.

For lightweight state management instead of Redux.








