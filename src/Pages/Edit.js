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
    // const [dbresume, setdbresume] = useState(null)
    // const [resumecontent, setResumecontent] = useState({})

    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [website, setWebsite] = useState('')
    const [headline, setHeadline] = useState('')
    const [summary, setSummary] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [region, setRegion] = useState('')
    const [country, setCountry] = useState('')
    const [postal, setPostal] = useState('')
    const [facebook, setFacebook] = useState('')
    const [twitter, setTwitter] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [instagram, setInstagram] = useState('')
    const[education1,setEducation1]=useState('')
    const[education2,setEducation2]=useState('')
    const[education3,setEducation3]=useState('')

    // const [showRight,setShowRight]=useState(true)
    // const [showLeft,setShowLeft]=useState(true)
    useEffect(() => {
        const fetchdata = async () => {
            const docRef = doc(db, "resumes", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {

                const obj = JSON.parse(docSnap.data().resumedata);
                console.log(obj);
                // setdbresume(docSnap.data());
                // setResumecontent(docSnap.data().resumedata)
                setFullName(obj.basics.name)
                setPhone(obj.basics.phone)
                setEmail(obj.basics.email)
                setWebsite(obj.basics.website)
                setHeadline(obj.basics.headline)
                setSummary(obj.basics.summary)
                setAddress(obj.basics.location.address)
                setCity(obj.basics.location.city)
                setRegion(obj.basics.location.region)
                setCountry(obj.basics.location.country)
                setPostal(obj.basics.location.postalCode)
                setFacebook(obj.basics.profiles.facebook)
                setInstagram(obj.basics.profiles.instagram)
                setLinkedin(obj.basics.profiles.linkedin)
                setTwitter(obj.basics.profiles.twitter)
                setEducation1(obj.sections.education.items.institution1)
                setEducation2(obj.sections.education.items.institution2)
                setEducation3(obj.sections.education.items.institution3)
            } else {
                console.log("No such document!");
            }
        }
        fetchdata();
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%', position: 'relative' }}>
            {/* <LoggedNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL}></LoggedNav> */}
            <LeftNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL} ></LeftNav>
            <button style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'transparent', outline: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><ChevronRightIcon className='rightbtn'></ChevronRightIcon></button>
            <button style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'transparent', outline: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><ChevronLeftIcon className='leftbtn'></ChevronLeftIcon></button>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop: '-3px' }}>
                <div className="leftbar">
                    <Leftbar fullname={fullname} email={email} phone={phone} website={website} headline={headline} summary={summary} address={address} region={region} city={city} postal={postal} country={country} facebook={facebook} instagram={instagram} twitter={twitter} linkedin={linkedin} education1={education1} education2={education2} education3={education3}></Leftbar>
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
