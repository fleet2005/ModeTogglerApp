//Single element theme toggling
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
//Single element theme toggling




//Toggling theme for an entire component
// import { useState } from 'react'
// import './index.css'

// const ModeToggler = () => {

//   const [mode, setMode] = useState("light");

//     const toggleTheme = () => {
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
  

//    return (
//       <div className= {mode == "dark" ? "dark" : "light"}>
//         <button onClick={toggleTheme}>toggle theme</button>
//         <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, cum quidem numquam eaque cupiditate modi ab earum dolorum qui aspernatur tempora voluptate, doloribus nam, aperiam ipsum minus labore commodi quas.</h1>
//       </div>
//    )
// }


// export default ModeToggler
//Toggling theme for an entire component



//Entire body modification recommended way //FOLLOW THIS ONLY
import { useState } from 'react'
import './index.css'

const ModeToggler = () => {

  const [mode, setMode] = useState("light");

    const toggleTheme = () => {
    setMode((prevMode)=>{
      if(prevMode == "light")
      {
        document.body.className = "dark";
        return "dark";
      }
      else
      {
        document.body.className = "light";
        return "light";
      }
    })
  }
  

   return (
      <>
        <button onClick={toggleTheme}>toggle theme</button>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe sunt repudiandae magnam ea quis ratione culpa pariatur eveniet, magni velit, debitis officia laboriosam facilis, ad deleniti odio enim amet voluptates?</h1>
      </>
   )
}

export default ModeToggler
//Entire body modification recommended way //FOLLOW THIS ONLY

