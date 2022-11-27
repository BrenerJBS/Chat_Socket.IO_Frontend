import React from 'react'
import styles from '../../Pages/Account/Messages/Messages.module.css'
import studentimg from '../../Assets/avatar.png'

const NewMessages = ({ messages,messagesDB , userid }) => {

  const scrollSpan = React.useRef();

  React.useEffect(() => {
    scrollSpan?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  function rightSide(i, val) {
    return (
      <div key={i} className={styles.row}>
        <div className={styles.tutormsg}>
          <p>{val.message}</p>
        </div>
        {val.user !== "Admin" &&
          <div className={styles.studentimagemini}>
            <img src={studentimg} alt="Student" />           
          </div>}
        <span ref={scrollSpan}></span>
      </div>
    )
  }

  function leftSide(i, val) {
    return (
      <div key={i} className={styles.rowreverse}>
        <div className={styles.studentimagemini}>
          <img src={studentimg} alt="Student" />          
        </div>
        <p>{val.message}</p>
        <div className={styles.tutormsg}>          
        </div>
        <span ref={scrollSpan}></span>
      </div>
    )
  }

  return (
    <div className={styles.scrollContent}>
      
      <div className={styles.flexContent}>
        {messagesDB.map((val, i) => {
          if (val.userid === userid || !val.userid){
            return rightSide(i, val)
          }            
          else {
            return leftSide(i, val)
          }
        })}
        {messages.map((val, i) => {
          if (val.userid === userid || !val.userid){
            return rightSide(i, val)
          }            
          else {
            return leftSide(i, val)
          }
        })}
      </div>
    </div>
  )
}

export default NewMessages