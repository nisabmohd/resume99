
import React from 'react'
import MediaCard from '../components/MediaCard'
import '../css/Select.css'
import temp1 from '../images/Template1.jpg'
import temp2 from '../images/Template2.png'
import temp3 from '../images/Template3.png'
export default function Select() {
  return (
    <div className='selectpage'>
        <h3>Choose a Template</h3>
        <div className="resumetemplates">
        <MediaCard image={temp1}></MediaCard>
        <MediaCard image={temp2}></MediaCard>
        <MediaCard image={temp3}></MediaCard>
        </div>
    </div>
  )
}
