import React, { useState } from 'react';
import InsertComponent from './customComponent/InsertComponent';
import ListPost from './customComponent/ListPost';
import Content from './customComponent/Content'
import logo from './logo.svg';
import './App.css';

function App() {
  const [posts, setPosts] = useState<string[]>([]);

  const handleAddPost = () => {
    const newPost = prompt('Inserisci il tuo post:');
    if (newPost) {
      setPosts([...posts, newPost]);
    }
  };

  return (
    <div className="App">
      <InsertComponent onAddPost={handleAddPost}></InsertComponent>
      <Content posts={posts}></Content>
      <ListPost></ListPost>
    </div>
  );
}

export default App;
