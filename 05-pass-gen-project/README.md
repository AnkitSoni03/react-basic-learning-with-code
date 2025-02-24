

++++++++++++++++++++++++++++++++++++++++ hooks in this project ++++++++++++++++++++++++++++++++++++++++++


1. useState
The useState hook in React is used to manage state in functional components. It allows a component to store, update, and persist local state values across renders.

2. useEffect
The useEffect hook allows performing side effects in functional components, such as fetching data, updating the DOM, and managing subscriptions. It runs after the component renders and can be controlled with dependencies.

3. useCallback
The useCallback hook memoizes a function to prevent unnecessary re-creation on re-renders. It returns the same function instance unless its dependencies change, improving performance.

4. useRef
The useRef hook creates a reference that persists across renders without causing re-renders. It is commonly used for accessing DOM elements or storing mutable values.



*********** in my project ************

useState:

Purpose: Manages the component's state.
Usage:
length: Stores the desired length of the generated password.
numbers: A boolean indicating whether to include numbers in the password.
Characters: A boolean indicating whether to include special characters in the password.
password: Holds the generated password string.


useRef:

Purpose: Creates a reference to a DOM element.
Usage: passwordRef is assigned to the password input field to facilitate selecting its content programmatically for copying purposes.


useCallback:

Purpose: Memoizes functions to prevent unnecessary re-creations on re-renders.
Usage:
passwordGen: Generates a new password based on the current state (length, numbers, Characters) and updates the password state.
copyPasswordToClipboard: Selects the password input field's content and copies it to the clipboard.


useEffect:

Purpose: Performs side effects in functional components.
Usage: Invokes the passwordGen function whenever there's a change in the length, numbers, or Characters state variables, ensuring the password is regenerated with the updated parameters.