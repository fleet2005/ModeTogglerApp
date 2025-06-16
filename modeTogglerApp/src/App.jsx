// import { useState } from 'react'
// import './index.css'


// const ModeToggler = () => {

//   const [mode, setMode] = useState("light");
    

//   const toggleTheme = () => {
//     setMode((prevMode)=>{
//       if(prevMode == "light")
//       {
//         return "dark";
//       }
//       else
//       {
//         return "light";
//       }
//     })
//   }


//   return (
//     <>
//     <button className= {mode == "dark" ? "dark" : "light"} onClick={toggleTheme}>toggle theme</button>
//     </>
//   )
// }



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
      <div className= {mode == "dark" ? "dark" : "light"}>
        <button onClick={toggleTheme}>toggle theme</button>
        <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cum quidem numquam eaque cupiditate modi ab earum dolorum qui aspernatur tempora voluptate, doloribus nam, aperiam ipsum minus labore commodi quas.</h1>
      </div>
   )
}


export default ModeToggler
