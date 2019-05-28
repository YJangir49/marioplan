import authReducer from './authReducer';
import projectReducer from './projectReducer'
import {combineReducer} from 'react-redux';

const rootReducer = combineReducer({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer;