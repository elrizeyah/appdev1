import React, { useState } from 'react';

export default function MyButton() {
  // Declare a state variable named 'count', initialized to 0
  const [count, setCount] = useState(0);

  // Event handler function for when the button is clicked
  function handleClick() {
    // Update the count by 1
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
