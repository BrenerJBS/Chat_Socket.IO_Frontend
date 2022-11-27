import React from 'react'
import styles from './Error.module.css'
import stylesB from '../Input/Button.module.css'

const PageError = ({error, handleReload}) => {
  return (
    <div>
      <div className={styles.error}> {error}</div>
      <div className={stylesB.centerFlex}> 
        <button  className={stylesB.button} type='button' onClick={() => handleReload()}>Tentar novamente</button>
      </div>
      
    </div>
  )
}

export default PageError