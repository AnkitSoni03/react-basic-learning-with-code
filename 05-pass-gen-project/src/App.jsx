import { useState, useCallback, useEffect, useRef } from "react"

function App() {


  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [Characters, setCharacters] = useState(false)
  const [password, setPassword] = useState()


  const passwordRef = useRef(null)


  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbers) str += "0123456789"
    if (Characters) str += "!@#$%^&*"
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbers, Characters, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
   window.navigator.clipboard.writeText(password) 
  }, [password])



  useEffect(() => {
    passwordGen()
  }, [length, numbers, Characters, passwordGen])

  

  return (
    <>
      <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-bold pb-6">Password Generator</h1>
        <div className="flex items-center justify-center">
          <input type="text" value={password} className="border border-gray-300 rounded-md px-2 py-1 mr-2" placeholder="Password" readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className="bg-white hover:bg-gray-300 text-black font-bold py-1 px-4 rounded">Copy Password</button>
        </div>
        <div className="flex items-center gap-2 pt-4">
          <input type="range" min={6} max={25} value={length} className="curcor-pointer" onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label>
          <input type="checkbox" defaultChecked={numbers} onChange={() => { setNumbers((prev) => !prev); }} />
          <label htmlFor="numbers">Numbers</label>
          <input type="checkbox" defaultChecked={Characters} onChange={() => { setCharacters((prev) => !prev); }} />
          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
