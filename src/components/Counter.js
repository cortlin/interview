import { useState } from 'react';
import styles from './counter.module.css';

export const Counter = ({initialValue}) => {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div className={styles.card}>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}