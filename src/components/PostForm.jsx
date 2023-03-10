import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

  const [post, setPost] = useState({title:'',body:''})

  const addnewPost = (e) => {
      e.preventDefault();
      const newPost ={
          ...post, id: Date.now()
      }
      create(newPost)
      setPost({title:'',body:''})
    }
  
return(
<form onSubmit={addnewPost}>
  <MyInput 
    value={post.title}
    onChange ={e => setPost({...post, title: e.target.value})} 
    type="text" 
    placeholder="name of post"
  />
  <MyInput
    value={post.body}
    onChange ={e => setPost({...post, body: e.target.value})} 
    type="text" 
    placeholder="name of post"
  />
   <MyButton> create post</MyButton>
</form>
);  

}

export default PostForm;