const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [{id: 1, message: 'hi'}, {id: 2, message: 'how are you ? '}, {id: 3, message: 'i am okay!'},],
    dialogs: [{id: 1, name: 'Bakhtiyar'}, {id: 2, name: 'Kamila'}, {id: 3, name: 'Kolya'},],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload
            return state

        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state

        default:
            return state
    }
}


export const addMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, payload: text})

export default dialogsReducer;