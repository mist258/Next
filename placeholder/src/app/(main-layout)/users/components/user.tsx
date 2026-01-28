import { IUser } from "@/app/interfaces/userInterface";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import css from "./Users.module.css";

interface IProps extends PropsWithChildren {
  user: IUser;
}

export const User: FC<IProps> = ({ user }) => {
  const { id, name, username, email } = user;
  return (
    <div className={css.UserCard}>
      <div className="Header">
        <span>ID: {id}</span>
        <span>Username: {username}</span>
      </div>
      <h3 className={css.Name}>{name}</h3>
      <p className={css.Email}>{email}</p>
      <Link className={css.Link} href={`users/${id}/posts`}>
        Posts
      </Link>
    </div>
  );
};
