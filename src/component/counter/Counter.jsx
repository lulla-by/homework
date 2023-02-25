import React from 'react'
import styles from "./counter.module.css"

const Counter = ({count, plusCounter, minusCounter}) => {

  return (
    <section className={styles.counterBox}>
              <div className={styles.buttonBox}>
        <button aria-label="개수추가버튼"
          onClick={() => {
            minusCounter();
          }}
          className={styles.minusButton}
        >
          
        </button>
        <span className={styles.count}>
          {count}
          </span>
        <button aria-label="개수감소버튼"
          onClick={() => {
            plusCounter();
          }}
          className={styles.plusButton}
        >
          
        </button>
        </div>
    </section>
  )
}

export default Counter