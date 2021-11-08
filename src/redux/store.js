import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: 'hello, its my first post'}, {id: 2, message: 'its my second post'}],
            newPostText: 'new post text'
        },
        dialogPage: {
            messages: [{id: 1, message: 'hi'}, {id: 2, message: 'how are you ? '}, {id: 3, message: 'i am okay!'},],
            dialogs: [{id: 1, name: 'Bakhtiyar'}, {id: 2, name: 'Kamila'}, {id: 3, name: 'Kolya'},],
            newMessageText: ''
        }
    },
    _callSubscriber(){
        console.log('observer not found')
    },
    getState(){
      return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer
    },
    dispatch(action){
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
    }
}

export default store