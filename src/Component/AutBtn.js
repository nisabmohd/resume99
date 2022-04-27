import React from 'react'
export const AutBtn = (props) => {
  return (
   <button onClick={props.onc} style={{display:'flex',flexDirection:'row',width:'184px',justifyContent:'center',alignItems:'center',height:'48px',border:'1px solid #a6a4a4',outline:'none',borderRadius:'4px',margin:'0 15px',backgroundColor:props.col,color:props.textcol,fontWeight:'bold',cursor:'pointer',zIndex:'99'}}><img style={{width:'25px',marginRight:'8px'}} src={props.img} alt="" />{props.name}</button>
  )
}
