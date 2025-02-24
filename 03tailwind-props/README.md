

++++++++++++++++++++++++++++ Tailwind, and Props in ReactJs ++++++++++++++++++++++++++++++++++++++

In React.js, props (short for "properties") are a way to pass data from a parent component to a child component. Props are read-only and help make components dynamic and reusable.

How Props Work:

Props are passed as attributes to a child component.
They allow data to be passed from a parent component to a child.
Props are immutable, meaning they cannot be changed inside the child component.

exp- this project ( open the code and analysis the work and workflow and control on the data and UI.)

Exp -

Cards()-

export default function Cards({username, btnText="Missed text"}) {
    return (
        <>
            <div class="p-10 position-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">{btnText}</button>
                </div>
            </div>
        </>
    )
}


App() -


import Cards from "./components/Cards";

export default function App() {
  return (
    <>
    <h1 class="text-3xl font-bold underline text-center">Tailwind Props</h1>
    <Cards username = "Ankit" btnText = "View Profile"/>
    <Cards username = "Soni" btnText = "View Portfolio"/>
    <Cards username = "Kumar"/>
    </>
  )
}

here reusebility of Card and control the data on display by using the props in reactjs.



+++++++++++++++++++++++++ MOst Imp React Interview Question +++++++++++++++++++++++++++++

Question - Create a react page where will be two button for increament and decreament , When clicked on first -> increase and clicked on second -> decrease the values. After that, what if , in the condition you will repeate the condition 4 time .

exp- 

let [counter, setCounter] = useState(0)

  const addValue =() => {

    //repeated condition 

     setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)
     setCounter(counter + 1)

    }

    const removeValue =() => {
      setCounter(counter - 1)
     }

  return (
    <>
      <h1>start to learn vite</h1>
      <h2>count value is {counter}</h2>
      <button onClick={addValue}>Add Value { counter}</button><br /><hr />
      <button onClick={removeValue}>Remove Value { counter}</button>
    </>
  )

  Note -
  1. Here, each setCounter(counter + 1) is based on the same stale value of counter before updates occur.
  2. React does not immediately update counter after each line; instead, it schedules an update.
  3. Since all four updates use the same counter value, only the last update takes effect.


  result - when you click then increase by 1 not 4 .

  but :-

  // condition -

  setCounter(prevCounter => prevCounter + 1) //prevCounter is not any keyword or special meaning you can take another name accordingly.
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)
  setCounter(prevCounter => prevCounter + 1)

Note -
  1. Here, each setCounter function receives the previous state value (prevCounter), which ensures that every update is based on the latest state.
  2. React batches these updates, but since each one correctly references the previous state, the counter updates sequentially (0 → 1 → 2 → 3 → 4).
  3. This ensures that counter increases by 4 instead of just 1


  result - here you will get the increament of 4. 


