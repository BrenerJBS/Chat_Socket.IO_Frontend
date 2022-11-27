export default function chat (state = {
  chats: [],  
  selectedContact: null,
  loading: false
}, action) {
  switch(action.type){
    case 'SET_CONTACT_LIST_USERS':
      return {
        ...state,
        chats: action.list
      }    
    case 'SET_CONTACT_SELECTED':
      return {
        ...state,
        selectedContact: action.contact
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.loading
      }  
    default:
      return state
  }
}