import counterReducer from './Counter'
import loggedIn from './IsLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
    IsLogged: loggedIn
})

export default allReducers