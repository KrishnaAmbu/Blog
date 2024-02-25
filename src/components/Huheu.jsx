
// import { TableBody,Table,TableRow,TableCell,TableContainer,TableHead } from '@mui/material'
import React, { useEffect ,useState} from 'react'
import axios from 'axios';

function Huheu(){
   const[posts,setPosts]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,10)))
    },[])
  return <div className="Huheu">
    <h1 className="bg-primary text-white">Blog</h1>
       {posts.map((post)=>
       <div key={post.id}>
        <h1>{post.id}</h1>
        <h1>{post.title}</h1>
        {/* <p>{post.body}</p> */}
        </div>
       )}
</div>;
  
}
  
export default Huheu
