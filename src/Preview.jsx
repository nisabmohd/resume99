import React from 'react'
import resume from './asset/008-.jpg'
import './Resp.css'
import './Resp.css'

export const Preview = (props) => {
  return (
    <div style={{borderRight:'1px solid rgb(53 52 52)',height:'inherit',overflowX:'scroll',paddingTop:'0px'}}>
      <div className="header" style={{width:'100%',height:'fit-content',backgroundColor:'',marginTop:'-3px',display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:'15px',}}>

      </div>
      <div className="resume" style={{marginTop:'22px'}}>
        <img className='resimg'  src={resume} alt="" />
      </div>
    </div>
  )
}
