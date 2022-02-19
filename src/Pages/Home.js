import React, { useEffect } from 'react'
import '../css/Home.css'
import Previewone from '../components/Previewone'
import Footer from '../components/Footer'
import { Middlesec } from '../components/Middlesec'
export default function Home(props) {
    useEffect(()=>{
        props.set(60)
        props.set(95)
        props.set(100)
      },[])
    return (
        <div className='Home'>
            <Previewone></Previewone>
            <Middlesec></Middlesec>
            <Footer></Footer>
        </div>
    )
}
