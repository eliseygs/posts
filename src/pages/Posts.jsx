import React, {useMemo,useState,useRef, useEffect} from 'react'  
import ClassCounter from 'D:/works/top/react-fund-course/src/components/ClassCounter'
import Counter from "D:/works/top/react-fund-course/src/components/Counter";
import PostItem from 'D:/works/top/react-fund-course/src/components/PostItem';
import PostList from 'D:/works/top/react-fund-course/src/components/PostList';
import MyButton from "D:/works/top/react-fund-course/src/components/UI/button/MyButton";
import MyInput from 'D:/works/top/react-fund-course/src/components/UI/input/MyInput';
import PostForm from 'D:/works/top/react-fund-course/src/components/PostForm';
import MySelect from 'D:/works/top/react-fund-course/src/components/UI/select/MySelect';
import PostFilter from 'D:/works/top/react-fund-course/src/components/PostFilter';
import MyModal from 'D:/works/top/react-fund-course/src/components/UI/MyModal/MyModal';
import { usePosts } from 'D:/works/top/react-fund-course/src/hooks/usePosts';
import axios from 'axios';
import PostService from 'D:/works/top/react-fund-course/src/API/PostService';
import Loader from 'D:/works/top/react-fund-course/src/components/UI/Loader/Loader';
import { useFetching } from 'D:/works/top/react-fund-course/src/hooks/useFetching';
import  {getPageCount}  from 'D:/works/top/react-fund-course/src/utils/pages';
import Pagination from 'D:/works/top/react-fund-course/src/components/UI/pagination/Pagination'
import { useObserver } from '../hooks/useObserver';

function Posts() {

  const [posts, setPosts] = useState([])

   const[filter, setFilter] = useState({sort: '', query:''})
   const[modal, setModal] = useState(false)
   const[totalPages,setTotalPages]=useState(0)
   const[limit, setLimit] = useState(10)
   const[page, setPage] = useState(1)
   const sortedAndSerchedPosts= usePosts(posts,filter.sort, filter.query);
   const lastElement=useRef()
   console.log(lastElement) 
   

   const [fetchPosts, isPostsLoading, postError] =useFetching(async (limit,page) => {
     const response= await PostService.getAll(limit,page);
     setPosts([...posts, ... response.data])
     const totalCount = response.headers['x-total-count']
     setTotalPages(getPageCount(totalCount,limit))
   })

   useObserver(lastElement, page<totalPages, isPostsLoading, () =>{
     setPage(page+1)
   })
   
   useEffect(()=>{
      fetchPosts(limit,page)
    },[posts])

    const changePage = (page) => {
      setPage(page)
    }
   const createPost =(newPost) => {
     setPosts([...posts,{newPost}])
     setModal(false)
   }

   const removePost =(post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


return (
    <div className="App">
      <MyButton onClick= {() => setModal(true)}>
        create modal
      </MyButton>

      <MyModal visible={modal} setVisible={setModal} >
      <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
        {postError &&
            <h1> error  ${postError} </h1>
        }

        <PostList remove={removePost} posts={sortedAndSerchedPosts} title="Posts about 35"/>
        <dib ref={lastElement} style={{height:20, background: 'red'}}/>
        {isPostsLoading &&
         <div style= {{display: 'flex', justifyContent:'center', marginTop: 50}}><Loader/> </div>
        } 
     
        <Pagination
            page={page}
            changePage={changePage}
            totalPages={totalPages}
            />
    
   </div>
  );

}

export default Posts;
