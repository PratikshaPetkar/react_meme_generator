//State example
// function greeting(name) {
//     const date = new Date()
//     const hours = date.getHours()

//     let timeOfDay
//     if(hours >= 4 && hours < 12) {
//         timeOfDay = "morning"
//     } else if(hours >= 12 && hours < 17) {
//         timeOfDay = "afternoon"
//     } else if(hours >= 17 && hours < 20) {
//         timeOfDay = "evening"
//     } else {
//         timeOfDay = "night"
//     }

//     return `Good ${timeOfDay}, ${name}!`
// }

// console.log(greeting("Bob"))

// 1. How would you describe the concept of "state"?
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)

// 2. When would you want to use props instead of state?
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.

// 3. When would you want to use state instead of props?
// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).

// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Unchanging. Props are immutable. State is mutable.

// USESTATE EXAMPLE
/**
 * Challenge: Replace our hard-coded "Yes" on the page with
 * some state initiated with React.useState()
 */
//    const result = React.useState("Yes")
//    console.log(result)
//    return (
//        <div className="state">
//            <h1 className="state--title">Is state important to know?</h1>
//            <div className="state--value">
//                <h1>Yes</h1>
//            </div>
//        </div>
//    )
// }
//DESTRUCTRED ARRAY
//  const [whateverWeWant, func] = React.useState("Yes")
//     console.log(whateverWeWant)
//CHANGING STATE
//export default function App() {
//     const [isImportant, setIsImportant] = React.useState("Yes")
//     function handleClick() {
//         setIsImportant("No")
//     }

//     return (
//         <div className="state">
//             <h1 className="state--title">Is state important to know?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h1>{isImportant}</h1>
//             </div>
//         </div>
//     )
// }
 /**
     * Challenge: 
     * Add functionality to the minus button
     */
//   const [count, setCount] = React.useState(0)
    
//   function add() {
//       setCount(count + 1)
//   }
  
//   function subtract() {
//       setCount(count - 1)
//   }
  
//   return (
//       <div className="counter">
//           <button className="counter--minus" onClick={subtract}>–</button>
//           <div className="counter--count">
//               <h1>{count}</h1>
//           </div>
//           <button className="counter--plus" onClick={add}>+</button>
//       </div>
//   )
// }

//  CHANGING STATE WITH CALLBACK FUNCTION
// * Note: if you ever need the old value of state
// * to help you determine the new value of state,
// * you should pass a callback function to your
// * state setter function instead of using
// * state directly. This callback function will
// * receive the old value of state as its parameter,
// * which you can then use to determine your new
// * value of state.
// */
// function add() {
//    setCount(prevCount => prevCount + 1)
// }
// // Challenge: update `substract` to use a callback function

//  function sub() {
//    setCount(prevCount => prevCount - 1)
// }

//chaning state quiz
// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
   
// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function 
//    returns === new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// Whenever you don't need the previous value of state to determine
// what the new value of state should be.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// Whenever you DO need the previous value to determine the new value