import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

let combinedReducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

let store = createStore(combinedReducers)

export default store