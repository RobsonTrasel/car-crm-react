import { combineReducers } from "redux";
import loadingReducer from "./loading.reducer";
import notifyReducer from "./notify.reducer";
import alertReducer from './alert.reducer'
import authReducer from './auth.reducer'
import registerReducer from './register.reducer'

const rootReducer = combineReducers({
    loadingReducer,
    notifyReducer,
    alertReducer,
    authReducer,
    registerReducer
})

export default rootReducer