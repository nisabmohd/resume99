import * as React from 'react';
import '../css/Select.css'
export default function MediaCard(props) {
  return (
    
      <div className='card' >
       <img className='tempimg' src={props.image} alt="img" />
      </div>
  );
}