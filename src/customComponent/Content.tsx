import React from 'react';
import './Content.css';

function Content({posts} : {posts:string[]}){
    return (
        <div className="content">
          {posts.map((post, index) => (
            <div key={index} className="post">
              {post}
            </div>
          ))}
        </div>
      );
}

export default Content;