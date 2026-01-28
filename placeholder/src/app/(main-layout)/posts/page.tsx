import { postService } from "@/app/services/postService";
import { FC, PropsWithChildren} from "react";
import { Posts } from "./components/allPosts";


const PostsPage = async() => {

    const {data} = await postService.getAll()

    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export default PostsPage