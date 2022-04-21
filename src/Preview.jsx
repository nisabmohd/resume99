import React from 'react'
import resume from './asset/008-.jpg'
export const Preview = (props) => {
  return (
    <div style={{borderRight:'1px solid rgb(53 52 52)',height:'inherit',overflowX:'scroll',paddingTop:'0px'}}>
      <div className="header" style={{width:'inherit',height:'59px',backgroundColor:'rgb(38,38,38)',marginTop:'0',display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'15px'}}>
        <h4 style={{marginTop:'0'}}>{props.rid}</h4>
      </div>
      <div className="resume" style={{marginTop:'20px'}}>
        <img src={resume} alt="" />
      </div>
    </div>
  )
}
