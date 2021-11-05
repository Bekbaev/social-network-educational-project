import React from 'react';

const Post = (props) => {
    return (
        <div>
            <img className="postUserLogo" src="https://shikimori.one/system/characters/original/422.jpg" alt=""/>
            {props.message}
        </div>
    );
};

export default Post;
