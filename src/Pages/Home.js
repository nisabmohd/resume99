import React from 'react'
import { AutBtn } from '../Components/AutBtn'
import { HomeSection } from '../Components/HomeSection'
import { Navbar } from '../Components/Navbar'
import github from '../asset/github.png'
import google from '../asset/search.png'
import bg from '../asset/bg.png'
import { getAuth, signInWithPopup } from "firebase/auth";
import { googleprovider } from '../config'
import { githubprovider } from '../config'



export const Home = (props) => {
    const auth = getAuth();
   async function googleLogin() {
        const user=await signInWithPopup(auth, googleprovider)
        console.log(user.user);
        localStorage.setItem('user',JSON.stringify(user.user))
        props.setuser(user)
    }
    async function githubLogin() {
        const user=await signInWithPopup(auth, githubprovider)
        console.log(user);
        props.setuser(user)
    }
    return (
        <div>
            <Navbar></Navbar>
            <HomeSection></HomeSection>
            <div className="btns" style={{ width: 'fit-content', display: 'flex', flexDirection: 'row', margin: 'auto', marginTop: '45px' }}>
                <AutBtn name="Login via Google" img={google} col="white" onc={googleLogin}></AutBtn>
                <AutBtn name="Login via Github" img={github} col="rgb(143 138 138)" textcol="white" onc={githubLogin}></AutBtn>
            </div>
            <div className="image" style={{width:"100%",display:'flex',justifyContent:'center'}}>
            <img style={{ width: '620px', margin:'auto',marginTop:'-52px'}} src={bg} alt="" />
            </div>
        </div>
    )
}
