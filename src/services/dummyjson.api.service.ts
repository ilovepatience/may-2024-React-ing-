import axios from 'axios';
import {IUser} from "../models/IUser";
import {IResponseUsers} from "../models/IResponseUsers";
import {IResponsePosts} from "../models/IResponsePosts";
import {IPost} from "../models/IPost";

let axiosInstanse = axios.create({
    baseURL: "https://dummyjson.com"
})

export const userService = {
    getUsers :async ():Promise<IUser[]> =>{
        return (await axiosInstanse.get<IResponseUsers>('/users')).data.users
        // let axiosResponse = await axiosInstanse.get<IResponseUsers[]>('/users');
        // let data = axiosResponse.data
        // return data.users
    }
}


export const postService = {
    getPostsOfUser: async (id: number): Promise<IPost[]> => {
        let axiosResponse = await axiosInstanse.get<IResponsePosts>('/posts/user/' + id);
        return axiosResponse.data.posts
    }
};
