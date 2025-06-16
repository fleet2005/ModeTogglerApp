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
//do the above in the app.jsx to toggle all the components throughout the application

//Yes — if you apply the theme class ("dark" or "light") at the top-level div inside App.jsx, it applies throughout the entire app — to every child component. But keep in mind, only the react component space is modified. Not the entire webpage (if component content size is lesser than browser window). 
//if we want to modify the entire body(parent of react), we have to manually update the dom as react exists inside the body of dom as a div with id root(look at index.html).. only things with in the react component can be modified without accessing dom by
//doing the react techniques on virtual dom. For things outside, such as the entire body, we would have to use dom manipulation like document.getElementById or document.body.className etc as virtual dom react doesnt have access to things outside of it. Accessing dom once in a while is totally fine and recommended. 

//But there is a (not recommended but doesn't hurt to know) turnaround way to stretch the root where react is created to the to the full size of body(so now react root div is like the body interms of browser appearance) and stretch the background colour with min height to apply bg color on full page even if component content is very small. But once in a rare dom access like this is totally fine so follow it.
// ✅ Interacting with the real DOM (e.g. document.body.classList.add("dark")) is only necessary when you want to style or read elements outside your React tree—namely <body> or <html>.
// ✔️ React only “owns” the subtree under its mount node (<div id="root">). To affect <body> or siblings, you need direct DOM APIs (e.g. document.body.classList).

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