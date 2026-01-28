import { FC, PropsWithChildren } from "react";
import { IPost } from "@/app/interfaces/postInterface";
import { Post } from "./post";

interface IProps extends PropsWithChildren {
    posts: IPost[]
}

export const Posts: FC<IProps> = ({posts}) => {

    return (
        <div>
           {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};