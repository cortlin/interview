import { useState } from 'react';

export const Counter = ({initialValue}) => {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}