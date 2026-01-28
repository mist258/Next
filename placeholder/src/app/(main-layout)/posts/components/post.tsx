import { FC, PropsWithChildren } from "react";
import { IPost } from "@/app/interfaces/postInterface";

interface IProps extends PropsWithChildren {
    post: IPost
}

export const Post: FC<IProps> = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};