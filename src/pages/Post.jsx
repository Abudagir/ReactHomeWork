import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
// import PageNotFound from './PageNotFound';

const Post = () => {
  const {id} = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);
    };
    getPost();
  },[id]); 
  // const { id } = useParams();
  // const [post, setPost] = useState({});
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getPost = async () => {
  //     try {
  //       const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  //       if (!res.ok) {
  //         throw new Error(`Could not fetch post with id ${id}`);
  //       }

  //       const data = await res.json();
  //       setPost(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };
    
  //   getPost();
  // }, [id]);

  // if (error) {
  //   return <div>Error: {error} <PageNotFound/>
  //   </div>;
  // }

  return (
    <div>
      <h1>Post:</h1>
      <h2>{post.title}</h2>
      <h3>{post.body}</h3>
    </div>
  )
}

export default Post
