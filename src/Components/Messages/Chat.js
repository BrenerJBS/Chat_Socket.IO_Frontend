import React from 'react';
import axios from 'axios'

import styles from '../../Pages/Account/Messages/Messages.module.css'
import stylesI from '../../Components/Input/Input.module.css'
import stylesB from '../../Components/Input/Button.module.css'

import io from "socket.io-client";
import NewMessages from './NewMessages';
import useTyping from "../../Hooks/useTyping";
import TypingCss from './TypingCss';
//let socket;


const Chat = ({ user, selectedUser }) => {


  const room = selectedUser.id;
  //const [messagesDB, setMessagesDB] = React.useState([]);
  const messagesDB = []
  const [messages, setMessages] = React.useState([]);
  const [typingUsers, setTypingUsers] = React.useState([]);
  const [message, setMessage] = React.useState([]);

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const socket = React.useRef();

  const ENDPOINT = "http://localhost:4000"
  
  const START_TYPING_MESSAGE_EVENT = "START_TYPING_MESSAGE_EVENT";
  const STOP_TYPING_MESSAGE_EVENT = "STOP_TYPING_MESSAGE_EVENT";

  React.useEffect(() => {
    const name = user.name;
    const userid = user.id;
    socket.current = io(ENDPOINT);
    socket.current.emit("join", { name, room, userid }, (error) => {
      if (error) {
        alert("não foi possível conectar ao chat");
      }
    });
    socket.current.on("welcome", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.current.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.current.on(START_TYPING_MESSAGE_EVENT, (typingInfo) => {
      //startTyping();       
      if (typingInfo.senderId !== socket.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => [...users, user]);
      }
    });

    socket.current.on(STOP_TYPING_MESSAGE_EVENT, (typingInfo) => {
      //setIsTyping(false);
      if (typingInfo.senderId !== socket.current.id) {
        const user = typingInfo.user;
        setTypingUsers((users) => users.filter((u) => u.name !== user.name));
      }
    });

    return () => {
      socket.current.disconnect();
    };
  }, [room, user.id, user.name]);

  React.useEffect(() => {
    async function fetchMessagesDB() {
      try {
        //get Messages From DB
        /*if (response){
          const result = response.data.messages;
          setMessagesDB(result);
        }*/
      } catch (err) {
        alert('fetchMessagesDB' + selectedUser.id + err)
      }
    }

    async function fetchMessages() {
      try {
        const response = await axios.get(`${ENDPOINT}/rooms/${room}/messages`);
        if (response){
          const result = response.data.messages;
          setMessages(result);
        }
        
      } catch (err) {
        alert('fetchMessages' + selectedUser.id + err)
      }
    };
    fetchMessagesDB()
    fetchMessages();
  }, [room, selectedUser]);

  React.useEffect(() => {
    const startTypingMessage = () => {
      if (!socket.current) return;
      socket.current.emit(START_TYPING_MESSAGE_EVENT, {
        senderId: socket.current.id,
        user,
      });
    };

    const stopTypingMessage = () => {
      if (!socket.current) return;
      socket.current.emit(STOP_TYPING_MESSAGE_EVENT, {
        senderId: socket.current.id,
        user,
      });
    };

    if (isTyping)
      startTypingMessage();
    else
      stopTypingMessage();
  }, [isTyping, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      cancelTyping();
      socket.current.emit("sendMessage", { message });
      setMessage("");
    }
  };

  
  

  return (
    <div className={styles.chat}>
      <NewMessages messagesDB={messagesDB} messages={messages} userid={user.id} />
      {typingUsers.map((typingUser) => <TypingCss key={typingUser} />)}
      <div className={styles.typemsg}>
        <form className={styles.formChat} action="" onSubmit={handleSubmit}>
          <div className={styles.senderChat}>
            <input
              className={stylesI.input}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={startTyping}
              onKeyUp={stopTyping}
            />
            <input className={stylesB.button} type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
};

export default Chat;