import React from 'react';
import './Card.css';

function Card({title, content}:{title:string, content:string}) {
    return (
      <>
        <div className='Card'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
      </>
    );
  }
  
  export default Card;
  