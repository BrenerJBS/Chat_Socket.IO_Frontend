import React from 'react'
import styles from './Input.module.css'

const Input = (props) => {
  return (
    <div className={styles.box}>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <input
        className={props.isdisable ? styles.inputDisabled : styles.input}        
        {...props}
        value={props.value}
        onChange={props.onChange}
        //onBlur={props.onBlur}
      />  
      
    </div>
  )
}

export default Input
