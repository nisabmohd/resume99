import React, { } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Stepperc } from '../components/Stepperc';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
export const Edit = () => {

  const navigate = useNavigate();
  const [showerr, setShowerr] = useState(false)
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [overview, setOver] = useState('')
  const [edu1, setEdu1] = useState('')
  const [edu2, setEdu2] = useState('')
  const [exp1, setExp1] = useState('')
  const [exp2, setExp2] = useState('')
  const [aw1, setAw1] = useState('')
  const [aw2, setAw2] = useState('')
  const[textareacount,setTextAreaCount]=useState(0)
  // const [age,setAge]=useState('')
  const [loading, setLoading] = useState(false)
  const [imagefile, setImagefile] = useState(null)
  const [alertabove, setAlertabove] = useState("")
  const [step, setStep] = useState("1")
  function handleImageUpload(e) {
    const image = e.target.files[0];
    if (image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png') {
      setImagefile(image)
      setShowerr(false)
    }
    else {
      setAlertabove("Invalid image extension")
      setShowerr(true)
      window.scrollTo(0, 0)
    }
  }
  async function upload(file) {
    setShowerr(false)
    const storageRef = ref(storage, 'profilephoto/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

      },
      (error) => {
        console.log(error)
        setAlertabove("Failed to upload image")
        setShowerr(true)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          sessionStorage.setItem('imageurl', downloadURL)
          return;
        });
      }
    );
  }
  function onTextarea(e){
    setTextAreaCount(e.target.value.split(' ').length);
    setOver(e.target.value)
  }
  async function handleSubmit() {
    if (fname === '' || lname === '' || phone === '' || email === '' || city === '' || street === '' || overview === '' || edu1 === '' || exp1 === '' || exp2 === '' || edu2 === '' || aw1 === '' || aw2 === '') {
      setAlertabove(" Please fill all the Credintials ...")
      setShowerr(true)
      window.scrollTo(0, 0)
      return
    }
    else {
      setLoading(true)
      setStep("2")
      // const personage=new Date().getFullYear()-age
      // sessionStorage.setItem('age',personage)
      sessionStorage.setItem('fname', fname)
      sessionStorage.setItem('lname', lname)
      sessionStorage.setItem('phone', phone)
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('city', city)
      sessionStorage.setItem('street', street)
      sessionStorage.setItem('overview', overview)
      sessionStorage.setItem('edu1', edu1)
      sessionStorage.setItem('edu2', edu2)
      sessionStorage.setItem('exp1', exp1)
      sessionStorage.setItem('exp2', exp2)
      sessionStorage.setItem('aw1', aw1)
      sessionStorage.setItem('aw2', aw2)
      if (imagefile) {
        await upload(imagefile)
      }
      setTimeout(() => {
        navigate("/prev")
      }, 4200)
    }
  }
  const style = {
    backgroundColor: 'transparent', fontSize: '16px', fontFamily: 'Roboto', padding: '9px 6px', outline: 'none', border: '1.25px solid #a4a4a4', borderRadius: '5px'
  }
  return <div className='editpage'>
    {
      showerr ? (<Alert severity="error" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span>{alertabove}</span>
      </Alert>) : (<>
        {/* <Alert severity="info" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <italic style={{ marginTop: '3px' }}>Fill all the Credintials</italic>
        </Alert> */}
      </>
      )
    }

    <div className="salutations">
      <p style={{ fontWeight: 'bold', fontSize: '20px' }}>Welcome <span style={{ fontSize: '40px' }}> 👋</span></p>
      <h2 style={{ marginBottom: '35px' }}>Start building your new resume</h2>
    </div>
    <Box sx={{ width: '57%', margin: 'auto', marginTop: '19px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
      <Stepperc step={step} />
    </Box>
    {
      loading ? (<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: '79px', flexDirection: 'column' }}>
        <CircularProgress size={65} sx={{ margin: '29px auto' }} />
        <span style={{ color: 'black', fontFamily: 'Roboto', fontSize: '15px', fontWeight: '500' }}>Hang on ! Generating your resume ...</span>
      </Box>) : (<>


        <Box sx={{ width: '44%', margin: 'auto', marginTop: '19px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <h3>Personal Details :</h3>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">First Name </InputLabel>
            <Input value={fname} onChange={(e) => { setFname(e.target.value) }} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">Last Name </InputLabel>
            <Input value={lname} onChange={(e) => { setLname(e.target.value) }} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">Phone No.</InputLabel>
            <Input value={phone} onChange={(e) => { setPhone(e.target.value) }} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">Email Address</InputLabel>
            <Input value={email} onChange={(e) => { setEmail(e.target.value) }} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '67.5%', margin: 'auto', marginTop: '49px', marginBottom: '19px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <Alert severity="info" sx={{ borderRadius: '9px', margin: '9px 0', backgroundColor: 'transparent' }}>
            <strong>Optional / A proffesional image is recommended (*jpg, *png)</strong>
          </Alert>
          <div className="input">
            <label htmlFor="inputfile">
              <input type="file" id="inputfile" hidden onChange={handleImageUpload} />
              <Button variant="outlined" component="span" sx={{ border: "1.25px solid gray", color: 'gray' }}>
                Upload an image
                <PhotoCamera variant="primary" sx={{ marginLeft: '9px' }} />
              </Button>
            </label>
          </div>
        </Box>
        {/* 
        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <input type="date" style={{ width: '100%',backgroundColor:'transparent',height:'49px',border:'none',outline:'none',fontSize:'16px',fontFamily:'Roboto',color:'#636363',borderBottom:'1px solid gray' }} onChange={(e)=>setAge(e.target.value.split('-')[0])} name="" id="" />
        </Box> */}

        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <h3>Contact Address :</h3>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">City / Town</InputLabel>
            <Input value={city} onChange={(e) => setCity(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">Street / House No.</InputLabel>
            <Input value={street} onChange={(e) => setStreet(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>


        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <h3>Overview :</h3>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            {/* <InputLabel htmlFor="component-simple">Street/House No.</InputLabel> */}
            <Alert severity="info" sx={{ borderRadius: '9px', margin: '9px 0', backgroundColor: 'transparent' }}>
              <strong>Tip : Being discriptive and precise would be great </strong><span style={{ fontSize: '12px', color: 'gray', fontWeight: 'bold', marginLeft: '6px' }}>({textareacount}/140) </span>
            </Alert>
            <textarea value={overview} id="txtarea" onChange={(e) => onTextarea(e)} onMouseOver={() => document.getElementById('txtarea').style.border = "2px solid #191919"} onMouseLeave={() => document.getElementById('txtarea').style.border = "2px solid #a4a4a4"} onFocus={() => document.getElementById('txtarea').style.border = "2px solid rgb(25,118,210)"} style={style} placeholder="About Yourself .." rows="10" />
          </FormControl>
        </Box>


        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <h3>Education :</h3>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">School Name</InputLabel>
            <Input value={edu1} onChange={(e) => setEdu1(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">Degree/Majors</InputLabel>
            <Input value={edu2} onChange={(e) => setEdu2(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <Button variant="outlined" size="small" style={{ display: 'flex', alignItems: 'center' }} sx={{  border: '1px solid gray',color:'#636363' }}>
            {/* <AddIcon style={{ width: '16px', marginRight: '4px' }} /> */}
            Add feild
          </Button>
        </Box>

        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <h3>Experience :</h3>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">Job Title</InputLabel>
            <Input value={exp1} onChange={(e) => setExp1(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">....</InputLabel>
            <Input value={exp2} onChange={(e) => setExp2(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <Button variant="outlined" size="small" style={{ display: 'flex', alignItems: 'center' }} sx={{  border: '1px solid gray',color:'#636363' }}>
            {/* <AddIcon style={{ width: '16px', marginRight: '4px' }} /> */}
            Add feild
          </Button>
        </Box>
       

        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <h3>Awards/Acknowledgements :</h3>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">List The Acknowledgments</InputLabel>
            <Input value={aw1} onChange={(e) => setAw1(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '80%', margin: 'auto', marginTop: '19px', marginBottom: '19px' }}>
          <FormControl sx={{ width: '55%', minWidth: '320px', margin: 'auto', marginTop: '9px', marginBottom: '9px' }} variant="standard">
            <InputLabel htmlFor="component-simple">....</InputLabel>
            <Input value={aw2} onChange={(e) => setAw2(e.target.value)} id="component-simple" />
          </FormControl>
        </Box>
        <Box sx={{ width: '44%', margin: 'auto', marginTop: '29px', marginBottom: '19px', display: 'flex', alignItems: 'left' }}>
          <Button variant="outlined" size="small" style={{ display: 'flex', alignItems: 'center' }} sx={{  border: '1px solid gray',color:'#636363' }}>
            {/* <AddIcon style={{ width: '16px', marginRight: '4px' }} /> */}
            Add feild
          </Button>
        </Box>

        {/* <Box sx={{ width: '80%', margin: 'auto', marginTop: '49px', marginBottom: '19px',display:'flex',flexDirection:'row',alignItems:'center' }}>
      <InputLabel htmlFor="chbx">English</InputLabel>
      <Checkbox id="chbx"/>
      </Box> */}

        <Box sx={{ width: '80%', margin: 'auto', marginTop: '49px', marginBottom: '19px' }}>
          <Button onClick={(e) => { e.preventDefault(); handleSubmit() }} variant="outlined">Preview </Button>
        </Box>

      </>)
    }



  </div >;
};
