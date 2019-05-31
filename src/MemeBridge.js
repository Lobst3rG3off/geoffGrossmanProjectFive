import React from 'react';

const MemeBridge = (props) => {
  return (
    <div className="imageBox">
          <h2>{props.title}</h2>
          <img src={props.imgUrl} alt={props.title}/>
    </div>
  )
}

export default MemeBridge



