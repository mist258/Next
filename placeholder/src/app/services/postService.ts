import { apiSrvice, IRes } from "./apiservice";
import { urls } from "../constants/urls";
import { IPost } from "../interfaces/postInterface";

export const postService = {
    getAll:():IRes<IPost[]> => apiSrvice.get(urls.posts.base),
}