import './App.css';
import Users from "./components/users/Users";
import {postService} from "./services/dummyjson.api.service";
import {useState} from "react";
import {IPost} from "./models/IPost";
import Posts from "./components/posts/Posts";

function App() {
    const [posts, setPosts] = useState<IPost[]>([])
    const  lift = async (id: number) => {
      setPosts(await postService.getPostsOfUser(id));

    }

    return (
        <div>
            <Users lift = {lift}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
