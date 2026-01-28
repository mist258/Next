import { IPost } from "@/app/interfaces/postInterface";
import { FC, PropsWithChildren } from "react";
import Post from "./post";

interface IProps extends PropsWithChildren {
    posts:IPost[]
}

const AllPosts: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default AllPosts