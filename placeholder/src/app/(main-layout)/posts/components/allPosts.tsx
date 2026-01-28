import { FC, PropsWithChildren } from "react";
import { IPost } from "@/app/interfaces/postInterface";
import { Post } from "./post";
import css from "./Post.module.css";

interface IProps extends PropsWithChildren {
  posts: IPost[];
}

export const Posts: FC<IProps> = ({ posts }) => {
  return (
    <div className={css.Grid}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
