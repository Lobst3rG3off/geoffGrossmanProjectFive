import React from 'react';

const MemeBridge = (props) => {
  return (
    <div className="imageBox">
          <h3>{props.title}</h3>
          <img src={props.imgUrl} alt={props.title}/>
    </div>
  )
}

export default MemeBridge



