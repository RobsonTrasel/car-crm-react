import { combineReducers } from "redux";
import loadingReducer from "./loading.reducer";
import notifyReducer from "./notify.reducer";

const rootReducer = combineReducers({
    loadingReducer,
    notifyReducer
})

export default rootReducer