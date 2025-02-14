import { useState } from "react"

function App() {
  const [Color, setColor] = useState("lightblue")
  const redColor =() => {
    setColor("red")
   }
   const greenColor =() => {
    setColor("green")
   }
   const blueColor =() => {
    setColor("blue")
   }

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={redColor}>Red</button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={greenColor}>Green</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={blueColor}>Blue</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setColor("black")}>Black</button>
        <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded" onClick={()=>setColor("white")} >White</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>setColor("gray")} >Gray</button>
      </div>
    </div>
    </>
  )
} 

export default App
