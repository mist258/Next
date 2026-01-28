import { IPost } from "@/app/interfaces/postInterface";
import { FC, PropsWithChildren } from "react";
import Post from "./post";
import css from "./UsersPost.module.css";

interface IProps extends PropsWithChildren {
  posts: IPost[];
}

const AllPosts: FC<IProps> = ({ posts }) => {
  return (
    <div className={css.Grid}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default AllPosts;
