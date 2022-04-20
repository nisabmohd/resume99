import React from 'react'

export const LoggedNav = (props) => {
  return (
    <div style={{ marginTop: '-2px' ,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'95%'}}>
      <div className="logo">
        <p style={{ fontWeight: '700', fontSize: '27px', color: 'white', marginLeft: "3.85vw" }}>resume<span style={{ color: '#1976d2' }}>99</span></p>
      </div>
      <div className="userlogo">
        <img  src={props.userimg}  style={{ width: '45px',borderRadius:'100%' }} alt="" />
      </div>
    </div>
  )
}
