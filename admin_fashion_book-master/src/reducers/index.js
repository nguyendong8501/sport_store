import { combineReducers } from 'redux'
import sportReducers from './sport.reducer'
import userReducers from './user.reducer'
import homeReducers from './home.reducer';
export default combineReducers({
    sportReducers,
    userReducers,
    homeReducers
})