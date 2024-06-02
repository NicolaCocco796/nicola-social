import React, { useState }  from 'react';
import './InsertComponent.css';

function InsertComponent({ onAddPost } : {onAddPost: () => void}) {

    return (
        <>
            <div className='InsertComponent'>
                <h1>Nicola Social</h1>
                <button onClick={onAddPost}>Aggiungi Post</button>
            </div>
        </>
    );
}

export default InsertComponent;