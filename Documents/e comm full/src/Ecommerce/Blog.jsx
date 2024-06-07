import { useEffect, useState } from "react";

function Blog(){


    const [blogs,setBlogs]=useState([])

useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((result)=>
        {console.log(result), setBlogs(result)})
    
},[])
    return(
        <>{
        blogs.map((blog,index)=>{
          return (
            <>
              <h2>{index+1+". "}{blog.title}</h2>
              <p>{blog.body}</p>
              <br></br>
            </>
            )
        })}
        
        
        </>
)
}

export default Blog;