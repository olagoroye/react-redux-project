import { combineReducers } from 'redux'
import teaReducer from "./teaReducer"
import reviewReducer from "./reviewReducer"


export default combineReducers({
    teaReducer,
    reviewReducer
  })