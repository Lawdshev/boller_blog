import axios from "axios";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCard from "../components/newsCard";
import { addUser, deleteUser, editUser,setInitialState } from "../Redux/reducers/users";

function Home() {
  const  dispatch = useDispatch();
  useEffect(() => {
    axios.get('https://footballblogserver.onrender.com/allBlogs')
      .then(res=>{ dispatch({type:setInitialState, payload:res.data});
    console.log(res.data)})
      .catch(err=> console.log(err.message))
  }, []);
  const userList = useSelector(state=> state.users.value)

  return (
    <div className="bg-yellow-400 w-screen px-4 lg:px-[10%]">
        {
            userList.map(blog=>{
                return  <NewsCard key={blog.id} {...blog}/>
            })
        }
    </div>
  );
}
export default Home;