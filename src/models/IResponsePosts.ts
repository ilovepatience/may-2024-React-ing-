import {IPost} from "./IPost";

export interface IResponsePosts{
    posts: IPost[],
    skip: number,
    total: number,
    limit: number,
}