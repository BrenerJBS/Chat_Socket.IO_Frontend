import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Messages.module.css'
import MessageBox from '../../../Components/Messages/MessageBox';
import { useDispatch } from 'react-redux';
import { setListContacts} from '../../../Store/Modules/Chat/actions';
import Contacts from '../../../Components/Messages/Contacts';
import PageError from '../../../Components/Error/PageError';
import { useSelector } from 'react-redux';


const Messages = () => {
  const user = {id: '9c8908c2-9388-45ae-b7e8-3fd913ff65da', name: 'User 3'} //get logged User
  const selectedUser = useSelector((state) => state.chat.selectedContact)
  const chats = useSelector((state) => state.chat.chats);
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [reload, setReload] = React.useState(0)
  const dispatch = useDispatch();

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        //get data from user and chats opens
        const chats = [
          {
            id: '88d7ba53-e586-42ac-a9c8-469ab8a41baa',
            tutor: {
              id: '193b6f9c-9f9a-4848-b78d-64363c43e0b8',
              user: {
                id: '6f931686-622f-4add-8595-9de93c683f6d',
                name: 'User 1'
              }
            }
          },
          {
            id: '006d6d5e-34a4-402d-b27a-60ae1f105e31',
            tutor: {
              id: '62aa1d6b-f043-4fd9-a3d4-668f6c576dd6',
              user: {
                id: 'c43290cf-994a-4047-a109-e7aa49abb0c8',
                name: 'User 2'
              }
            }
          }
        ]
        dispatch(setListContacts(chats))
        setLoading(false)
      } catch (err) {
        setError(err.error)
        setLoading(false)
      }
    }
    fetchData();
  }, [dispatch, reload])

  function handleReload() {
    setLoading(true)
    setError(null)
    setReload(reload + 1)
  }

  if (loading) {
    return (
      <div style={{ display: "flex", height: '50vh', alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    )
  }

  else if (error) {
    return (
      <PageError error={error} handleReload={handleReload} />
    )
  }

  return (
    <div className={styles.messagesPage}>
      <Contacts  chats={chats} selectedContact={selectedUser}/>
      <MessageBox user={user} selectedUser={selectedUser}/>
    </div>
  )
}

export default Messages
