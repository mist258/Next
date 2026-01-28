import { userService } from "@/app/services/userService";
import { FC} from "react";
import { AllUsers } from "./components/allUsers";



const UsersPage:FC = async() => {
    const {data} = await userService.getAll()

    return (
        <div>
            <AllUsers users={data}/>
        </div>
    );
};

export default UsersPage