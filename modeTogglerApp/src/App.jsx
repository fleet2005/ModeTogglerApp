import { useState } from 'react'
import './index.css'


const ModeToggler = () => {

  const [mode, setMode] = useState("light");
    

  const toggleTheme = () => {
    setMode((prevMode)=>{
      if(prevMode == "light")
      {
        return "dark";
      }
      else
      {
        return "light";
      }
    })
  }


  return (
    <>
    <button className= {mode == "dark" ? "dark" : "light"} onClick={toggleTheme}>toggle theme</button>
    </>
  )
}


export default ModeToggler
