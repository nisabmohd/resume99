import React from 'react'
import { Right } from '../Right'
import { Preview } from '../Preview'
import { Leftbar } from '../Leftbar'
import { LoggedNav } from '../Components/LoggedNav'
export const Edit = () => {
    return (
        <>
            <LoggedNav userimg={JSON.parse(localStorage.getItem('user')).photoURL}></LoggedNav>
            <div style={{ display: 'flex', flexDirection: 'row' ,width:'91%',margin:'auto'}}>
                <div className="leftbar" style={{ flex: '0.9', height: '89vh', overflowY: 'scroll' }}>
                    <Leftbar></Leftbar>
                </div>
                <div className="previewbar" style={{ flex: '2', height: '89vh', overflowY: 'scroll' }}>
                    <Preview></Preview>
                </div>
                <div className="rightbar" style={{ flex: 0.9, height: '89vh', overflowY: 'scroll' }}>
                    <Right></Right>
                </div>
            </div>
        </>
    )
}
