import React, {FC} from 'react';
import {IPostModel} from "../../models/IPostModel";


interface IProps {
    posts: IPostModel[];

}

const PostsComponent: FC<IProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map((post)=>(<li key={post.id}>{post.body}</li>))
            }
        </div>
    );
};

export default PostsComponent;