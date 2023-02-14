import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {

    // Just a normal useState hook
  const [childState, setChildState] = useState(null);

//  It takes a newChildState as an argument and sets the childState to the newChildState.
  const handleChildState = (newChildState) => {
    setChildState(newChildState);
  };

  return (
    <div>
        <h3>Contents from Parent component</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>

        {/* Here we just pass the  callback function handleChildState as prop to <Child/> component. 
        The <Child/> component will then return it's state thus we set the returned value(ie. child state) into the parent state (line number 7) */}
        <Child onStateChange={handleChildState} />
        
        <h3>Contents from Parent component</h3>
        {childState && <p>Child state(in Parent file): {childState}</p>}
    </div>
  );
};

export default Parent;
