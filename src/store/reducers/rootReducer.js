import { combineReducers } from "redux";
import loadingReducer from "./loading.reducer";
import notifyReducer from "./notify.reducer";
import alertReducer from './alert.reducer'
import authReducer from './auth.reducer'

const rootReducer = combineReducers({
    loadingReducer,
    notifyReducer,
    alertReducer,
    authReducer
})

export default rootReducer