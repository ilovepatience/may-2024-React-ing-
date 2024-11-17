import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

type PostProps = {
    value: IPost;
}

const Post:FC<PostProps> = ({value}) => {
    return (
        <div>
            <div>{value.title}</div>
            <div>{value.body}</div>
            <div>{value.tags}</div>
            <ul>
                <li>{value.reactions.likes}</li>
                <li>{value.reactions.dislikes}</li>
            </ul>
            <div>{value.views}</div>
            <div>{value.userId}</div>
        </div>
    );
};

export default Post;