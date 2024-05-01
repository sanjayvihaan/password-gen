import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {



  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const getnratePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    
  }, [length, numberAllowed, charAllowed])


  useEffect(() => {
    getnratePassword()
  }, [length, numberAllowed, charAllowed])

  const passwordRef = useRef(null)


  const copyToClipBoard = () => {
    window.navigator.clipboard.writeText(password)
    // passwordRef.current.alert('Password copied to clipboard')
    console.log(passwordRef.current.value);
    alert('Password copied to clipboard')
  }

  return (
    <>
      <h1 className='text-white text-3xl'>Password Generator</h1>
      <div className="mx-auto mt-8 flex flex-col justify-center items-center">
        <div className="w-96 flex gap-5 relative  h-10">
          <input
            className="peer text-white w-[46%] h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-white-900"
            placeholder=" " 
            type='text'
            readOnly
            value={password}
            ref={passwordRef}
            
            /><label
            className="flex w-[46%] h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] 
            before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' ']
             after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent 
             peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-white-900 before:border-blue-white-200 peer-focus:before:!border-white-900 after:border-blue-gray-200 peer-focus:after:!border-white-900">Password
          </label>
          <button type="button" className="text-white bg-gradient-to-r m-0 w-44 from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300
           dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2" onClick={copyToClipBoard}>Copy</button>

        </div>
      <div className='flex flex-wrap gap-5'>
        <div className="flex justify-center items-center gap-x-1 w-auto mt-10">
            <input id="medium-range" 
            type="range" 
            value={length} 
            min={6}
            max={100}
            onChange={(e)=> setLength(e.target.value)}
            className="slider w-full h-2 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
            <label htmlFor="length" className='text-white w-full'>Length: {length}</label>
        </div>

        <div className="flex justify-center items-center gap-x-1 w-auto mt-10">
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numInput" className='text-white w-full'>Numbers</label>

        </div>

        <div className="flex justify-center items-center gap-x-1 w-auto mt-10">
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }}
            />
                        <label htmlFor="charInput" className='text-white w-full'>Characters</label>

        </div>

        </div> 

      </div>  

    </>
  )
}

export default App
