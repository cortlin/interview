import { useState, useEffect } from 'react';
import styles from './user.module.css';

export const RandomUser = () => {

  const [user, setUser] = useState();

  const clickHandler = async () => {
    const result = await fetch('https://randomuser.me/api/');
    const data = await result.json();
    setUser(data.results[0])
  }

  return (
    <div>
      <h1>API CALL</h1>
      <button onClick={clickHandler}>Generate a User</button>

      {user && (
      <div className={styles.userData}>
        <img src={user.picture.medium} alt={user.name.first} />
        <p><strong>First name: </strong>{user.name.first}</p>
        <p><strong>Last Name: </strong>{user.name.last}</p>
        <p><strong>Gender: </strong>{user.gender}</p>
      </div>
      )}
    </div>
  )
}