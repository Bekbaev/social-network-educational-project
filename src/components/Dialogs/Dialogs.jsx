import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/reducers/dialogsReducer";


const Dialogs = (props) => {
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const updateNewMessageText = (e) => {
        props.dispatch(updateNewMessageTextActionCreator(e.target.value))
    }

    return (
        <div className="dialogs">
            <div className="dialogs-items">
                {props.dialogPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </div>
            <div className="messages">
                {props.dialogPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
                <div>
                    <div><textarea value={ props.dialogPage.newMessageText } onChange={e => updateNewMessageText(e)} /></div>
                    <div><button onClick={ addMessage }>Add Message</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
