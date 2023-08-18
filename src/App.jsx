import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return "uncomment the below methods to test out the code";

  // First Approach :- Anonymous arrow function method where instead of writing the function and defining the function using onclick
  //we can follow as below
  // return (
  //   <div className="main">
  //     <div>
  //       <h1 className="main-text">Change the count Values by click</h1>
  //       <>
  //         <button type="button" onClick={() => setCount(count + 1)}>
  //           +
  //         </button>
  //       </>
  //       <p>{count}</p>
  //       <>
  //         <button type="button" onClick={() => setCount(count - 1)}>
  //           -
  //         </button>
  //       </>
  //     </div>
  //     <div className="reset-button">
  //       <button type="button" onClick={() => setCount(0)}>
  //         Reset
  //       </button>
  //     </div>
  //   </div>
  // );

  //second approach conventional approach more lines of code

  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  // const decreaseCount = () => {
  //   if (count <= 0) {
  //     return setCount(0);
  //   }
  //   return setCount(count - 1);
  // };

  // const resetCount = () => {
  //   setCount(0);
  //   if (count > 0) {
  //     return alert("Count set to Zero");
  //   }
  // };

  // return (
  //   <div className="main">
  //     <div>
  //       <h1 className="main-text">Change the count Values by click</h1>
  //       <>
  //         <button type="button" onClick={increaseCount}>
  //           +
  //         </button>
  //       </>
  //       <p>{count}</p>
  //       <>
  //         <button type="button" onClick={decreaseCount}>
  //           -
  //         </button>
  //       </>
  //     </div>
  //     <div className="reset-button">
  //       <button type="button" onClick={resetCount}>
  //         Reset
  //       </button>
  //     </div>
  //   </div>
  // );
}

export default App;
