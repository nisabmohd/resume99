import React from 'react'
import '../css/Home.css'
import Previewone from '../components/Previewone'
import Features from '../components/Features'
import Templates from '../components/Templates'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <div className='Home'>
            <Previewone></Previewone>
            <Features></Features>
            <Templates></Templates>
            <Footer></Footer>
        </div>
    )
}
