import React, {useState} from 'react';
import './App.css';
import UsersComponent from "./components/users/UsersComponent";
import PostsComponent from "./components/Posts/PostsComponent";
import {getAllPostsOfSingleUser} from "./services/jpg.api.service";
import {IPostModel} from "./models/IPostModel";


const App = () => {
    const [posts, setPosts]= useState<IPostModel[]>([])
    const lift =(userId:number) => {
        getAllPostsOfSingleUser(userId).then(({data})=> {
            setPosts(data);
        })
    }
  return (
      <div className={'App'}>

          <div className={'users'}><UsersComponent lift={lift}/></div>
          <div className={'posts'}><PostsComponent posts={posts}/></div>


      </div>


  )
}

export default App;

