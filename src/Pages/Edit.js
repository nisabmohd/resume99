import React, { useEffect, useState } from 'react'
import { Right } from '../Right'
import { Preview } from '../Preview'
import { Leftbar } from '../Leftbar'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config';
import { LeftNav } from '../Components/LeftNav'
import '../Resp.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';



export const Edit = (props) => {
    let params = useParams();
    const [dbresume, setdbresume] = useState(null)
    const [resumecontent, setResumecontent] = useState({})
    // const [showRight,setShowRight]=useState(true)
    // const [showLeft,setShowLeft]=useState(true)
    useEffect(() => {
        const fetchdata = async () => {
            const docRef = doc(db, "resumes", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log(JSON.parse(docSnap.data().resumedata));
                setdbresume(docSnap.data());
                setResumecontent(docSnap.data().resumedata)
            } else {
                console.log("No such document!");
            }
        }
        fetchdata();
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' ,position:'relative'}}>
            {/* <LoggedNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL}></LoggedNav> */}
            <LeftNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL} ></LeftNav>
            <button style={{width:'fit-content',height:'fit-content',backgroundColor:'transparent',outline:'none',border:'none',color:'white',cursor:'pointer'}}><ChevronRightIcon className='rightbtn'></ChevronRightIcon></button>
            <button style={{width:'fit-content',height:'fit-content',backgroundColor:'transparent',outline:'none',border:'none',color:'white',cursor:'pointer'}}><ChevronLeftIcon className='leftbtn'></ChevronLeftIcon></button>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '-3px' }}>
                <div className="leftbar">
                    <Leftbar ></Leftbar>
                </div>
                <div className="previewbar" >
                    <Preview rid={params.id}></Preview>
                </div>
                <div className="rightbar">
                    <Right ></Right>
                </div>
            </div>
        </div>
    )
}
