import { combineReducers } from 'redux'

import progress from '../Modules/Progress/reducer'
import chat from '../Modules/Chat/reducer'

export default combineReducers({ progress, chat })