const baseURL = "https://jsonplaceholder.typicode.com";

const users = "/users";
const posts = "/posts";

const urls = {
  users: {
    base: users,
    getPosts: (id: number | string): string => `${users}/${id}/posts`,
  },
  posts: {
    base: posts,
  },
};

export { baseURL, urls };
