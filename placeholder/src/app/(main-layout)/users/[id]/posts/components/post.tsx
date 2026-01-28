import { IPost } from "@/app/interfaces/postInterface";
import { FC, PropsWithChildren } from "react";
import css from "./UsersPost.module.css";

interface IProps extends PropsWithChildren {
  post: IPost;
}

export const Post: FC<IProps> = ({ post }) => {
  const { id, userId, title, body } = post;
  return (
    <div>
      <div className={css.Post}>
        <div className={css.Header}>
          <span className={css.Post}>#{id}</span>
          <span className={css.Post}>User: {userId}</span>
        </div>
        <h3 className={css.Title}>{title}</h3>
        <p className={css.Body}>{body}</p>
      </div>
    </div>
  );
};

export default Post;
