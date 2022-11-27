import React from 'react';
import styles from '../../Pages/Account/Messages/Messages.module.css'
import studentimg from '../../Assets/avatar.png'
import { useDispatch } from 'react-redux';
import { setSelectedContact, setLoading } from '../../Store/Modules/Chat/actions';
import CircularProgress from '@mui/material/CircularProgress';

const Contacts = ({chats, selectedContact}) => {
  const dispatch = useDispatch();

  function selectContact(contact) {
    dispatch(setLoading(true))
    dispatch(setSelectedContact(contact))
    dispatch(setLoading(false))
  }

  if (!chats) {
    return (
      <div >
        <CircularProgress />
      </div>
    )
  }

  else
    return (
      <div className={styles.scroll}>
        <div className={styles.wrapper} >
          {chats?.map((contact, index) => {
            return (
              <div onClick={() => selectContact(contact)} key={index} className={
                index === chats.length - 1 ?
                  (selectedContact === contact ? styles.messagesboxfinalSelected : styles.messagesboxfinal) :
                  (index === 0 ? (selectedContact === contact ? styles.messagesboxinitialSelected : styles.messagesboxinitial) : (selectedContact === contact ? styles.messagesboxSelected : styles.messagesbox))}>
                <div className={styles.studentimage}>
                  <img src={studentimg} alt="Student" />
                </div>
                <div className={styles.studentinfo}>
                  <div className={styles.studentname}>
                    {contact.tutor.user.name}
                  </div>                  
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
};

export default Contacts;
