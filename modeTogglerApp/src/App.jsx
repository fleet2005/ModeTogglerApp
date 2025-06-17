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




//do the same thing as below, but in the app.jsx's top level element to toggle all the components theme throughout the react application as app.jsx contains all components as children under it.
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
//do the same thing as above but in the app.jsx's top level element to toggle all the components theme throughout the react application as app.jsx contains all components as children under it.





//Yes — if you apply the theme class ("dark" or "light") at the top-level div inside App.jsx, it applies throughout the entire app — to every child component. But keep in mind, only the react component space is modified. Not the entire webpage (if component content size is lesser than browser window). 
//if we want to modify the entire body(parent of react), we have to manually update the dom as react exists inside the body of dom as a div with id root(look at index.html).. only things with in the react component can be modified without accessing dom by
//doing the react techniques on virtual dom. For things outside, such as the entire body, we would have to use dom manipulation like document.getElementById or document.body.className etc as virtual dom react doesnt have access to things outside of it. Accessing dom once in a while is totally fine and recommended. 

//But there is a (not recommended but doesn't hurt to know) turnaround way to stretch the root where react is created to the to the full size of body(so now react root div is like the body interms of browser appearance) and stretch the background colour with min height to apply bg color on full page even if component content is very small. But once in a rare dom access like this is totally fine so follow it. Why the stretching of root method is not recommended is because, 
//if the react root is the only child under body, then its fine. But if it has other siblings below(more children of body), then they would be forced to be displayed after the react root, which means that if the react component content is very small, then stretching the root would sure fill the entire page with say a black bg color, and only after that would the other sibling be displayed.. It will look totally odd. One small content, full page black bg (until the bounds where react root is stretched), and then the sibling contents, leaving an awkward empty black bg in between .
//So thats why the above method is not recommended, as if siblings are there for the react mount point, it will get messed up.. And that is why modifying the body by dom manipulation is the recommended and practice way. 

// ✅ Interacting with the real DOM (e.g. document.body.classList.add("dark")) is only necessary when you want to style or read elements outside your React tree—namely <body> or <html>.
// ✔️ React only “owns” the subtree under its mount node (<div id="root">). To affect <body> or siblings, you need direct DOM APIs (e.g. document.body.classList).

//Once in a while direct dom manipulation like document.body.getElementById is totally fine.



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


//always use an updater function in setter function unless the value doesn't depend on previous state. But yea safe play is to always use an updater function.
//write in the format like style = {{}} ... Because in JSX, an object of styles is expected. 