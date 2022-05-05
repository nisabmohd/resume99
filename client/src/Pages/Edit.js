import React, { useEffect, useState } from 'react'
import { Right } from '../Right'
import { Preview } from '../Preview'
import { Leftbar } from '../Leftbar'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../config';
import { LeftNav } from '../Component/LeftNav'
import '../Resp.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { setDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'


export const Edit = (props) => {
    const navigate = useNavigate();
    let params = useParams();
    const [dbresume, setdbresume] = useState(null)
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
    const [education1, setEducation1] = useState('')
    const [education2, setEducation2] = useState('')
    const [education3, setEducation3] = useState('')
    const [award1, setAward1] = useState('')
    const [award2, setAward2] = useState('')
    const [cert1, setCert1] = useState('')
    const [cert2, setCert2] = useState('')
    const [cert3, setCert3] = useState('')
    const [project1, setProject1] = useState('')
    const [project2, setProject2] = useState('')
    const [project3, setProject3] = useState('')
    const [lang1, setLang1] = useState('')
    const [lang2, setLang2] = useState('')
    const [skill1, setSkill1] = useState('')
    const [skill2, setSkill2] = useState('')
    const [skill3, setSkill3] = useState('')
    const [skill4, setSkill4] = useState('')
    const [photo, setPhoto] = useState(null)
    // const [showRight,setShowRight]=useState(true)
    // const [showLeft,setShowLeft]=useState(true)
    useEffect(() => {
        const fetchdata = async () => {
            const docRef = doc(db, "resumes", params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {

                const obj = JSON.parse(docSnap.data().resumedata);
                // console.log(obj);
                setdbresume(docSnap.data());
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
                setAward1(obj.sections.awards.items.award1)
                setAward2(obj.sections.awards.items.award2)
                setCert1(obj.sections.certifications.items.certificate1)
                setCert2(obj.sections.certifications.items.certificate2)
                setCert3(obj.sections.certifications.items.certificate3)
                setProject1(obj.sections.projects.items.project1)
                setProject2(obj.sections.projects.items.project2)
                setProject3(obj.sections.projects.items.project3)
                setLang1(obj.sections.languages.items.lang1)
                setLang2(obj.sections.languages.items.lang2)
                setSkill1(obj.sections.skills.items.skill1)
                setSkill2(obj.sections.skills.items.skill2)
                setSkill3(obj.sections.skills.items.skill3)
                setSkill4(obj.sections.skills.items.skill4)
                setPhoto(obj.basics.photourl)


            } else {
                console.log("No such document!");
            }
        }
        fetchdata();
    }, [])
    const deleteresume = async () => {
        await deleteDoc(doc(db, "resumes", params.id));
        navigate("/")
    }

    const backendprint=async()=>{
        const resp= await fetch("http://localhost:5000/oKYOr1bnyte6xa1yrs3h&1")
        console.log(resp);
        window.open("http://localhost:5000/download/oKYOr1bnyte6xa1yrs3h&1",'_blank')
    }
    const backendjsonget=async()=>{
        window.open("http://localhost:5000/json/oKYOr1bnyte6xa1yrs3h&1",'_blank')
    }

    const uploaddata = async () => {
        await setDoc(doc(db, "resumes", params.id),
            {
                resumedata: JSON.stringify({
                    "basics": {
                        "name": fullname,
                        "email": email,
                        "phone": phone,
                        "photourl": photo,
                        "summary": summary,
                        "website": website,
                        "headline": headline,
                        "location": {
                            "city": city,
                            "region": region,
                            "address": address,
                            "country": country,
                            "postalCode": postal
                        },
                        "profiles": {
                            "twitter": twitter,
                            "instagram": instagram,
                            "linkedin": linkedin,
                            "facebook": facebook
                        }
                    },
                    "sections": {
                        "work": {
                            "items": []
                        },
                        "awards": {
                            "items": {
                                "award1": award1,
                                "award2": award2
                            }
                        },
                        "skills": {
                            "items": {
                                "skill1": skill1,
                                "skill2": skill2,
                                "skill3": skill3,
                                "skill4": skill4
                            }
                        },
                        "projects": {
                            "items": {
                                "project1": project1,
                                "project2": project2,
                                "project3": project3
                            }
                        },
                        "education": {
                            "items": {
                                "institution1": education1,
                                "institution2": education2,
                                "institution3": education3
                            }
                        },
                        "languages": {
                            "items": {
                                "lang1": lang1,
                                "lang2": lang2
                            }
                        },
                        "certifications": {
                            "items": {
                                "certificate1": cert1,
                                "certificate2": cert2,
                                "certificate3": cert3
                            }
                        }
                    }
                }),
                resumename: dbresume.resumename,
                userid: JSON.parse(localStorage.getItem('user')).uid
            }
        );
        toast.success('Saved your resume', {
            duration: 2000,
            position: 'top-center',
            style: {
                fontFamily: 'Poppins',
                fontSize: '11px'
            },
        });
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', position: 'relative' }}>
            {/* <LoggedNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL}></LoggedNav> */}
            <LeftNav setuser={props.setuser} userimg={JSON.parse(localStorage.getItem('user')).photoURL} ></LeftNav>
            <button style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'transparent', outline: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><ChevronRightIcon className='rightbtn'></ChevronRightIcon></button>
            <button style={{ width: 'fit-content', height: 'fit-content', backgroundColor: 'transparent', outline: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><ChevronLeftIcon className='leftbtn'></ChevronLeftIcon></button>
            <div className="threebox">
                <div className="leftbar">
                    <Leftbar fullname={fullname} email={email} phone={phone} website={website} headline={headline} summary={summary} address={address} region={region} city={city} postal={postal} country={country} facebook={facebook} instagram={instagram} twitter={twitter} linkedin={linkedin} education1={education1} education2={education2} education3={education3}
                        award1={award1} award2={award2} cert1={cert1} cert2={cert2} cert3={cert3} project1={project1} project2={project2} project3={project3}
                        lang1={lang1} lang2={lang2} skill1={skill1} skill2={skill2} skill3={skill3} skill4={skill4} photo={photo}

                        setfullname={setFullName}
                        setEmail={setEmail}
                        setphone={setPhone}
                        setWebsite={setWebsite}
                        setHeadline={setHeadline}
                        setSummary={setSummary}
                        setAddress={setAddress}
                        setRegion={setRegion}
                        setCity={setCity}
                        setPostal={setPostal}
                        setCountry={setCountry}
                        setFacebook={setFacebook}
                        setLinkedin={setLinkedin}
                        setTwitter={setTwitter}
                        setInstagram={setInstagram}
                        setEducation1={setEducation1}
                        setEducation2={setEducation2}
                        setEducation3={setEducation3}
                        setAward1={setAward1}
                        setAward2={setAward2}
                        setCert1={setCert1}
                        setCert2={setCert2}
                        setCert3={setCert3}
                        setProject1={setProject1}
                        setProject2={setProject2}
                        setProject3={setProject3}
                        setLang1={setLang1}
                        setLang2={setLang2}
                        setSkill1={setSkill1}
                        setSkill2={setSkill2}
                        setSkill3={setSkill3}
                        setSkill4={setSkill4}
                        setPhoto={setPhoto}


                    ></Leftbar>
                </div>
                <div className="previewbar" >
                    <Preview rid={params.id}></Preview>
                </div>
                <div className="rightbar">
                    <Right backendjsonget={backendjsonget} backendprint={backendprint} delete={deleteresume} uploaddata={uploaddata} ></Right>
                </div>
            </div>
        </div>
    )
}
