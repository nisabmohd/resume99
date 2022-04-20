import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar' style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'0 10vw'}}>
        <div className="logo">
            <p style={{fontWeight:'700',fontSize:'30px',color:'white'}}>resume<span style={{color:'rgb(103,118,237)'}}>99</span></p>
        </div>
        <div className="tags">
            <a href="/" style={{fontFamily:'Helvetica Neue',fontSize:'16px',fontWeight:'700',textDecoration:'none',margin:'0 12px',color:'white'}}>Home</a>
            <a href="/" style={{fontFamily:'Helvetica Neue',fontSize:'16px',fontWeight:'700',textDecoration:'none',margin:'0 12px',color:'white'}}>About us</a>
            <a href="/" style={{fontFamily:'Helvetica Neue',fontSize:'16px',fontWeight:'700',textDecoration:'none',margin:'0 12px',color:'white'}}>Login</a>
        </div>
    </div>
  )
}
