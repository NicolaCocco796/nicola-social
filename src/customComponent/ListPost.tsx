import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListPost.css';
import Card from './Card'

interface Post {
    id: number;
    title: string;
    body: string;
}

function ListPost(){
    const [postList, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
          .then(response => setPosts(response.data.posts))
          .catch(error => console.error('Error fetching posts:', error));
      }, []);

      return(
        <>
        <div className='ListPost'>
            {
                postList.map(post =>
                    <Card title={post.title} content={post.body}/>
                )
            }
        </div>
        </>
      );
}

export default ListPost;

