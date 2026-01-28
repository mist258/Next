import { IUser } from "@/app/interfaces/userInterface";
import { FC, PropsWithChildren } from "react";
import { User } from "./user";

interface IProps extends PropsWithChildren {
    users:IUser[]

}

export const AllUsers: FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};