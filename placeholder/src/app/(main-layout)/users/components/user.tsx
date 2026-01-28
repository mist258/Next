import { IUser } from "@/app/interfaces/userInterface";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";

interface IProps extends PropsWithChildren {
    user: IUser
}

export const User: FC<IProps> = ({user}) => {
    const {id, name, username, email} = user
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <Link href={`users/${id}/posts`}>Posts</Link>
        </div>
    );
};