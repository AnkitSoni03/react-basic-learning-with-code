

Difference Between Context API and Redux  
-------------------------------------------------------------------------------------------------------------------------------------------
| **Feature**     | **Context API**                                                 | **Redux**                                           |  
|-----------------|-----------------------------------------------------------------|-----------------------------------------------------|  
| **Purpose**     | Manages state globally but mainly for lightweight state sharing | Centralized state management with advanced features |  
| **Complexity**  | Simple, minimal boilerplate                                     | More complex, requires setup                        |  
| **Performance** | Can cause unnecessary re-renders                                | Optimized with reducers and middleware              |  
| **Middleware**  | No built-in middleware support                                  | Supports middleware like Redux Thunk & Saga         |  
| **Data Flow**   | Propagation through React tree                                  | Strictly follows unidirectional data flow           |  
-------------------------------------------------------------------------------------------------------------------------------------------


************************************************

What is Redux?
Redux is a state management library that provides a single source of truth (a centralized store) to manage application-wide state predictably.

************************************************

What is React-Redux and Why Is It Used?
React-Redux is the official binding library for using Redux with React. It helps React components connect to the Redux store efficiently, reducing unnecessary re-renders.

************************************************

How Can We Use Redux?

Install Redux and React-Redux: npm install redux react-redux

Create a Redux Store.

Define Actions and Reducers.
Provide Store to React using <Provider>.
Use Redux hooks (useSelector, useDispatch) or connect() to access state in components.

************************************************

Basic Syntax


1. Setup Redux Store (store.js)
The Redux store is created using configureStore from Redux Toolkit.

It takes a reducer (or multiple reducers) as an argument, which defines how the state should be updated.

The store is then exported to be used in the application.

code :

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: { counter: counterReducer },
});

export default store;


Key Notes:
✅ configureStore() automatically includes Redux DevTools and middleware.
✅ The store is the centralized state container of the app.

********************

2. Create a Reducer (Slice) (counterSlice.js)
A slice is a small piece of the global state, created using createSlice().

It consists of:

name: Identifies the slice.

initialState: The default state value.

reducers: Functions that modify the state based on dispatched actions.

Actions (increment, decrement) are generated automatically.

code :

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

Key Notes:
✅ createSlice() reduces boilerplate by auto-generating action creators and action types.
✅ The state is directly mutated inside reducers (handled internally by Immer).

********************

3. Provide Store in index.js
The Provider from react-redux makes the Redux store available to the entire React component tree.

This ensures that any component can access and modify the store.

code :

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

Key Notes:
✅ <Provider store={store}> wraps the entire app to enable Redux usage.
✅ Components inside <Provider> can connect to the store using hooks like useSelector and useDispatch.

********************

4. Use Redux State & Actions in Components (Counter.js)
useSelector retrieves state from the store.

useDispatch allows dispatching actions (e.g., increment() and decrement()).

code :

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter;

Key Notes:
✅ useSelector(state => state.counter.value): Fetches counter state.
✅ useDispatch(): Sends actions to update state.
✅ Redux ensures that only the necessary components re-render when state changes.



****************************************


Final Key Takeaways for Redux Setup
✔ Store: Centralized state container created using configureStore().
✔ Reducers (Slices): Define how state updates occur, using createSlice().
✔ Provider: Wraps the app to give Redux access to components.
✔ useSelector: Reads state from the store.
✔ useDispatch: Dispatches actions to modify state.

This setup is crucial for managing global state efficiently and making state updates predictable in a React app. 🚀