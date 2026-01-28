import { userService } from "@/app/services/userService";
import { FC, PropsWithChildren } from "react";
import AllPosts from "./components/allPosts";

interface IProps extends PropsWithChildren{
    params: Promise<{ id: string }>;
}

const PostPageById:FC<IProps> = async ({params}: IProps) => {

     const { id } = await params

    const {data} = await userService.getPosts(id)
    return (
        <div>
        <AllPosts posts={data}/>
        </div>
    );
};

export default PostPageById;