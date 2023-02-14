import React, { useState } from "react";

const Child = ({ onStateChange }) => {
    // Just a normal useState hook
  const [state, setState] = useState("");

// If you want to update the parent state whenever child state changes in real-time : Use Line 7 
    onStateChange(state);


  return (
    <>
        <h3>Contents from Child Component</h3>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        {/* If you want to update the parent state whenever child state changes on a button click use onClick() like below */}
        <button type="submit" onClick={ () =>  onStateChange(state)}>Submit</button>
    </>
    
  );
};

export default Child;
