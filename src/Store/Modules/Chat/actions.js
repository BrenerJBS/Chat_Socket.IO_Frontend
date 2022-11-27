export function setListContacts(list){
  return{
    type: 'SET_CONTACT_LIST_USERS',
    list
  }
}

export function setSelectedContact(contact){
  return{
    type: 'SET_CONTACT_SELECTED',
    contact
  }
}

export function setLoading(loading){
  return{
    type: 'SET_LOADING',
    loading
  }
}