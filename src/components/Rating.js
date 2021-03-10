import { useState } from 'react';
import styles from './rating.module.css';

export const Rating = ({ numOfRatings }) => {

  const [rating, setRating] = useState();


  return (
    <div>
      <h1>This is a rating</h1>
      <div>
        {[...Array(numOfRatings)].map((n, i) => (
          <svg key={i}
            className={i < rating ? styles.active : styles.ratingStar}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            onClick={() => setRating(i + 1)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
        {rating && (
          <>
            <p>{rating} out of {numOfRatings} Stars!</p>
            <button className={styles.block} onClick={() => setRating()}>Clear Rating</button>
          </>
        )}
      </div>
    </div>
  )
}

