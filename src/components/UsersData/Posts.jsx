  import { useEffect, useState } from "react";
  import { fetchData } from './api';

  const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetchData("https://jsonplaceholder.typicode.com/posts", setPosts);
    }, []);

    return (
      <div>
          <h1>Posts:</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    )
  }

  export default Posts
