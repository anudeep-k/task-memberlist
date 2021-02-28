import {combineReducers} from 'redux';
import members from './members'
import events from './events'

export default combineReducers({
    members,events
})