import React, {  } from 'react'
import '../css/Home.css'
import Previewone from '../components/Previewone'
import Footer from '../components/Footer'
import { Middlesec } from '../components/Middlesec'
export default function Home() {
    return (
        <div className='Home'>
            <Previewone></Previewone>
            <Middlesec></Middlesec>
            <Footer></Footer>
        </div>
    )
}
