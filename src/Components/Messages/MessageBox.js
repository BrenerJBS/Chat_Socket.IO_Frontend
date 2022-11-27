import React from 'react'
import styles from '../../Pages/Account/Messages/Messages.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import Chat from './Chat'
import { useSelector } from 'react-redux';

const MessageBox = ({ user, selectedUser }) => {
  const loading = useSelector((state) => state.chat.loading)

  
  if (!selectedUser) {
    return (<div className={styles.messagebox}><div className={styles.selectChat}>Selecione uma conversa</div></div>)
  }

  else if (loading) {
    return (
      <div className={styles.messagebox}>
        <div style={{ display: "flex", height: '50vh', alignItems: "center", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      </div>
    )
  }

  else
    return (      
      <div className={styles.messagebox}>            
        <Chat user={user} selectedUser={selectedUser}/>
      </div>
    )
}

export default MessageBox