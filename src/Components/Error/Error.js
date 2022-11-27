import React from 'react'
import styles from './Error.module.css'

const Error = ({children}) => {
  return (
    <div className={styles.error}>
      {children}
    </div>
  )
}

export default Error
