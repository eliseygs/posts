import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostIdPage =() =>{
    const params =useParams()
    const [post, setPost] =useState({})
    const [comments, setComments] =useState([])
    const [fetchPostsById, isLoading, postError] =useFetching(async (id) => {
    const response= await PostService.getById(id);
    setPost(response.data)
    })
    
    const [fetchComents, isComLoading, comError] =useFetching(async (id) => {
    const response= await PostService.getCommentsByPostId(id);
    setComments(response.data)
    })

    useEffect(()=>{
        fetchPostsById(params.id)
        fetchComents(params.id)
    },[])

    return(

        <div>
                <h1> you are opening page of post with id = {params.id} </h1>
                {isLoading
                    ?<Loader/>
                :<div>{post.id}.{post.title} </div>
                }

        <h1>
            comments
        </h1>
                {isComLoading
                ?<Loader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop:15}}>
                            <h5>{comm.email}</h5>
                            <h5>{comm.body}</h5>
                            
                         </div>   
                            )}
                 </div>
                }
        </div>

    )
}
export default PostIdPage;