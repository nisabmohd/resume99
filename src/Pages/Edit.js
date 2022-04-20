import React, { useEffect } from 'react'
import { Right } from '../Right'
import { Preview } from '../Preview'
import { Leftbar } from '../Leftbar'
import { LoggedNav } from '../Components/LoggedNav'
import { useParams } from 'react-router-dom'


export const Edit = (props) => {
    let params = useParams();
    useEffect(() => {
        console.log(params);
    }, [])
    return (
        <>
            <LoggedNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL}></LoggedNav>
            <div style={{ display: 'flex', flexDirection: 'row', width: '91%', margin: 'auto',marginTop:'29px' }}>
                <div className="leftbar" style={{ flex: '0.9', height: '85vh', overflowY: 'scroll', border: '1px solid red' }}>
                    <Leftbar></Leftbar>
                </div>
                <div className="previewbar" style={{ flex: '2', height: '85vh', overflowY: 'scroll', border: '1px solid red' }}>
                    <Preview></Preview>
                </div>
                <div className="rightbar" style={{ flex: 0.9, height: '85vh', overflowY: 'scroll', border: '1px solid red' }}>
                    <Right></Right>
                </div>
            </div>
        </>
    )
}
