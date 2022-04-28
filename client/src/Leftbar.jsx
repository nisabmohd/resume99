import React from 'react'
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BadgeIcon from '@mui/icons-material/Badge';
import TranslateIcon from '@mui/icons-material/Translate';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HardwareIcon from '@mui/icons-material/Hardware';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from './config';
import toast, { Toaster } from 'react-hot-toast';

export const Leftbar = (props) => {
  const headerStyle =
  {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', marginLeft: '49px'
  }
  const upload = (file) => {
    const storageRef = ref(storage, 'photos/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    toast.loading('uploading...', {
      duration: 3000
    });
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
       
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          props.setPhoto(downloadURL)
        });
      }
    );

  }
  const handleUpload=(e)=>{
    const data = e.target.files[0]
    if (data.type === "image/png" || data.type === "image/jpg" || data.type === "image/jpeg" ||  data.type === "image/gif") {
        upload(data)
    }
    else {
        toast.error('Not a valid extension', {
            duration: 2000,
            position: 'top-center',
            style: {
                fontFamily: 'Poppins',
                fontSize: '11px'
            },
        });
    }
  }

  return (
    <div style={{ height: 'inherit', overflowX: 'scroll', paddingTop: '8px', width: 'inherit', margin: 'auto', position: 'absolute' }}>
       <Toaster />
      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', padding: '0 0px', justifyContent: 'center', margin: 'auto' }}>
        <div className="header" style={headerStyle}>
          <PersonIcon style={{ marginLeft: '-9px' }}></PersonIcon>
          <h3 style={{ marginLeft: '8px' }}>Basics</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <div className="userbox1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '9px 0' }}>
            <input onChange={handleUpload} type="file" hidden id="inputfile" />
            <label htmlFor="inputfile">
            <Avatar src={props.photo} sx={{ width: '125px', height: '125px',cursor:'pointer' }}></Avatar>
            </label>
          </div>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '100%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" value={props.fullname} onChange={(e) => { props.setfullname(e.target.value) }} label="Full Name" variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}value={props.email} sx={{ width: '100%', marginTop: '12px', fontSize: '9px' }} id="outlined-basic" label="Email Address" variant="outlined" onChange={(e) => { props.setEmail(e.target.value) }} />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}value={props.phone} onChange={(e) => { props.setphone(e.target.value) }} sx={{ width: '154px', marginTop: '6px', fontSize: '9px' }} id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}onChange={(e) => { props.setWebsite(e.target.value) }} sx={{ width: '167px', marginTop: '6px', marginLeft: '13px', fontSize: '9px' }} id="outlined-basic" label="Website" value={props.website} variant="outlined" />
          </div>
        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '93%', marginLeft: '0px', fontSize: '6px', marginTop: '22px' }} id="outlined-basic" label="Headline" value={props.headline} variant="outlined" onChange={(e) => { props.setHeadline(e.target.value) }} />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0', width: '100%' }}>
            <TextField
            InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
              style={{ width: '93%', marginTop: '11px' }}
              id="outlined-multiline-static"
              label="Summary"
              multiline
              value={props.summary}
              onChange={(e) => { props.setSummary(e.target.value) }}
              rows={4}
            />
          </div>
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <MapIcon></MapIcon>
          <h3 style={{ marginLeft: '8px' }}>Location</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '92%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Address" value={props.address} variant="outlined" onChange={(e) => { props.setAddress(e.target.value) }} />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}sx={{ width: '140.5px', marginTop: '6px', fontSize: '9px' }} id="outlined-basic" label="City" value={props.city} onChange={(e) => { props.setCity(e.target.value) }} variant="outlined" />
            <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}sx={{ width: '182px', marginTop: '6px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Region" value={props.region} onChange={(e) => { props.setRegion(e.target.value) }} variant="outlined" />
          </div>
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}sx={{ width: '140.5px', marginTop: '-4px', fontSize: '9px' }} id="outlined-basic" value={props.country} onChange={(e) => { props.setCountry(e.target.value) }} label="Country" variant="outlined" />
            <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}sx={{ width: '182px', marginTop: '-4px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Postal Code" value={props.postal} onChange={(e) => { props.setPostal(e.target.value) }} variant="outlined" />
          </div>
        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <LinkedInIcon></LinkedInIcon>
          <h3 style={{ marginLeft: '8px' }}>Profiles</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="LinkedIn" value={props.linkedin} onChange={(e) => { props.setLinkedin(e.target.value) }} variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Instagram" onChange={(e) => { props.setInstagram(e.target.value) }} value={props.instagram} variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} onChange={(e) => { props.setTwitter(e.target.value) }} id="outlined-basic" label="Twitter" value={props.twitter} variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Facebook" value={props.facebook} variant="outlined" onChange={(e) => { props.setFacebook(e.target.value) }} />

        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <SchoolIcon></SchoolIcon>
          <h3 style={{ marginLeft: '8px' }}>Education</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField
          InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Degree followed by start and end year"
            multiline
            rows={3}
            value={props.education1}
            onChange={(e) => { props.setEducation1(e.target.value) }}
          />
          <TextField
          InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
            style={{ width: '96%', marginTop: '14px' }}
            id="outlined-multiline-static"
            label="Intermediate followed by start and end year"
            multiline
            rows={3}
            value={props.education2}
            onChange={(e) => { props.setEducation2(e.target.value) }}
          />
          <TextField
          InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
            style={{ width: '96%', marginTop: '14px' }}
            id="outlined-multiline-static"
            label="School followed by start and end year"
            multiline
            rows={3}
            value={props.education3}
            onChange={(e) => { props.setEducation3(e.target.value) }}
          />

        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <EmojiEventsIcon></EmojiEventsIcon>
          <h3 style={{ marginLeft: '8px' }}>Awards</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} value={props.award1} onChange={(e) => { props.setAward1(e.target.value) }} id="outlined-basic" label="Award Title" variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} value={props.award2} onChange={(e) => { props.setAward2(e.target.value) }} id="outlined-basic" label="Award Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <BadgeIcon />
          <h3 style={{ marginLeft: '8px' }}>Certificates</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} value={props.cert1} onChange={(e) => { props.setCert1(e.target.value) }} id="outlined-basic" label="Certificate Title" variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} value={props.cert2} onChange={(e) => { props.setCert2(e.target.value) }} id="outlined-basic" label="Certificate Title" variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} value={props.cert3} onChange={(e) => { props.setCert3(e.target.value) }} id="outlined-basic" label="Certificate Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <HardwareIcon />
          <h3 style={{ marginLeft: '8px' }}>Projects</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField
          InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            value={props.project1} onChange={(e) => { props.setProject1(e.target.value) }}
            rows={3}
          />
          <TextField
          InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            value={props.project2} onChange={(e) => { props.setProject2(e.target.value) }}
            rows={3}
          />
          <TextField
          InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            value={props.project3} onChange={(e) => { props.setProject3(e.target.value) }}
            rows={3}
          />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          < TranslateIcon />
          <h3 style={{ marginLeft: '8px' }}>Languages</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} value={props.lang1} onChange={(e) => { props.setLang1(e.target.value) }} id="outlined-basic" label="Language Title" variant="outlined" />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Language Title" variant="outlined" value={props.lang2} onChange={(e) => { props.setLang2(e.target.value) }} />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '19px' }}>
        <div className="header" style={headerStyle}>
          <HowToRegIcon />
          <h3 style={{ marginLeft: '8px' }}>Skills</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" value={props.skill1} onChange={(e) => { props.setSkill1(e.target.value) }} />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" value={props.skill2} onChange={(e) => { props.setSkill2(e.target.value) }} />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" value={props.skill3} onChange={(e) => { props.setSkill3(e.target.value) }} />
          <TextField InputProps={{ style: {fontSize: 13} }}InputLabelProps={{style: { fontSize: 13 } }}size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" value={props.skill4} onChange={(e) => { props.setSkill4(e.target.value) }} />
        </div>
      </div>



    </div >
  )
}
