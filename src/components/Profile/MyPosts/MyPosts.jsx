import React from 'react';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/reducers/profileReducer";

const MyPosts = (props) => {

        const updateNewPostText = (text) => {
            props.dispatch(updateNewPostTextActionCreator(text))
        }
        const addPost = () => {
            props.dispatch(addPostActionCreator())
        }

        return (
            <div className="">
                <b>My Posts</b>
                <div>New post</div>
                <div>
                <textarea onChange={e => {
                    updateNewPostText(e.target.value)
                }} value={props.profilePage.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <div>
                    {props.profilePage.posts.map(p => <Post key={p.id} message={p.message}/>)}
                </div>
            </div>
        );
    }
;

export default MyPosts;
