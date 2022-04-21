import React, { useEffect, useState } from 'react'
import { Right } from '../Right'
import { Preview } from '../Preview'
import { Leftbar } from '../Leftbar'
import { LoggedNav } from '../Components/LoggedNav'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config';
import { LeftNav } from '../Components/LeftNav'


export const Edit = (props) => {
    let params = useParams();
    const [dbresume,setdbresume]=useState(null)
  const [resumecontent,setResumecontent]=useState({})
    useEffect(() => {
        const fetchdata = async () => {
            const docRef = doc(db, "resumes", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
               setdbresume(docSnap.data());
               setResumecontent(docSnap.data().resumedata)
            } else {
                console.log("No such document!");
            }
        }
        fetchdata();
    }, [])
    return (
        <div style={{display:'flex',flexDirection:'row'}}>
            {/* <LoggedNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL}></LoggedNav> */}
            <LeftNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL} ></LeftNav>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '-3px'}}>
                <div className="leftbar" style={{ flex: '0.9', overflowY: 'scroll',paddingTop:'9px',padding:'0 12px',height:'100vh',borderRight:'1px solid rgb(53 52 52)'}}>
                    <Leftbar></Leftbar>
                </div>
                <div className="previewbar" style={{ flex: '2',overflowY: 'scroll',paddingTop:'9px',padding:'0px',height:'100vh'}}>
                    <Preview rid={params.id}></Preview>
                </div>
                <div className="rightbar" style={{ flex: 0.9, overflowY: 'scroll',paddingTop:'9px',padding:'0 12px',height:'100vh'}}>
                    <Right></Right>
                </div>
            </div>
        </div>
    )
}
