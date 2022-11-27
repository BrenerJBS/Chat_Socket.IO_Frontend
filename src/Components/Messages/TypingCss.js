import React from 'react'
import styles from './TypingCss.module.css'

const TypingCss = () => {
  return (
    <div className={styles.TypingCss}>
      <div className={styles.dotsContainer}>
        <span id={styles.dot1}></span>
        <span id={styles.dot2}></span>
        <span id={styles.dot3}></span>
      </div>
    </div>
  )
}

export default TypingCss