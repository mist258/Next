import { IUser } from "../interfaces/userInterface";
import { apiSrvice, IRes } from "./apiservice";
import { urls } from "../constants/urls";
import { IPost } from "../interfaces/postInterface";

export const userService = {
  getAll: (): IRes<IUser[]> => apiSrvice.get(urls.users.base),
  getPosts: (id: number | string): IRes<IPost[]> =>
    apiSrvice.get(urls.users.getPosts(id)),
};
