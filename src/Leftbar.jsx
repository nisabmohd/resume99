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


export const Leftbar = (props) => {

  const headerStyle =
  {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', marginLeft: '49px'
  }

  return (
    <div style={{ height: 'inherit', overflowX: 'scroll', paddingTop: '8px', width: 'inherit', margin: 'auto', position: 'absolute' }}>
      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'fit-content', padding: '0 0px', justifyContent: 'center', margin: 'auto' }}>
        <div className="header" style={headerStyle}>
          <PersonIcon style={{ marginLeft: '-9px' }}></PersonIcon>
          <h3 style={{ marginLeft: '8px' }}>Basics</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <div className="userbox1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '9px 0' }}>
            <Avatar sx={{ width: '125px', height: '125px' }}></Avatar>
          </div>
          <TextField size="normal" type="text" sx={{ width: '100%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" value={props.fullname} onChange={(e)=>{props.setfullname(e.target.value)}} label="Full Name" variant="outlined" />
          <TextField value={props.email} sx={{ width: '100%', marginTop: '12px', fontSize: '9px' }} id="outlined-basic" label="Email Address" variant="outlined" />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField value={props.phone} sx={{ width: '154px', marginTop: '6px', fontSize: '9px' }} id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField sx={{ width: '167px', marginTop: '6px', marginLeft: '13px', fontSize: '9px' }} id="outlined-basic" label="Website" value={props.website} variant="outlined" />
          </div>
        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField size="normal" type="text" sx={{ width: '93%', marginLeft: '0px', fontSize: '6px', marginTop: '22px' }} id="outlined-basic" label="Headline" value={props.headline} variant="outlined" />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0', width: '100%' }}>
            <TextField
              style={{ width: '93%', marginTop: '11px' }}
              id="outlined-multiline-static"
              label="Summary"
              multiline
              value={props.summary}
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
          <TextField size="normal" type="text" sx={{ width: '92%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Address" value={props.address} variant="outlined" />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField sx={{ width: '140.5px', marginTop: '6px', fontSize: '9px' }} id="outlined-basic" label="City" value={props.city} variant="outlined" />
            <TextField sx={{ width: '182px', marginTop: '6px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Region" value={props.region} variant="outlined" />
          </div>
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField sx={{ width: '140.5px', marginTop: '-4px', fontSize: '9px' }} id="outlined-basic" value={props.country} label="Country" variant="outlined" />
            <TextField sx={{ width: '182px', marginTop: '-4px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Postal Code" value={props.postal} variant="outlined" />
          </div>
        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <LinkedInIcon></LinkedInIcon>
          <h3 style={{ marginLeft: '8px' }}>Profiles</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="LinkedIn" value={props.linkedin} variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Instagram" value={props.instagram} variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Twitter" value={props.twitter} variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Facebook" value={props.facebook} variant="outlined" />

        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <SchoolIcon></SchoolIcon>
          <h3 style={{ marginLeft: '8px' }}>Education</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Degree followed by start and end year"
            multiline
            rows={3}
            value={props.education1}
          />
          <TextField
            style={{ width: '96%', marginTop: '14px' }}
            id="outlined-multiline-static"
            label="Intermediate followed by start and end year"
            multiline
            rows={3}
            value={props.education2}
          />
            <TextField
            style={{ width: '96%', marginTop: '14px' }}
            id="outlined-multiline-static"
            label="School followed by start and end year"
            multiline
            rows={3}
            value={props.education3}
          />

        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <EmojiEventsIcon></EmojiEventsIcon>
          <h3 style={{ marginLeft: '8px' }}>Awards</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Award Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Award Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <BadgeIcon />
          <h3 style={{ marginLeft: '8px' }}>Certificates</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Certificate Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Certificate Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Certificate Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <HardwareIcon />
          <h3 style={{ marginLeft: '8px' }}>Projects</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            rows={3}
          />
          <TextField
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            rows={3}
          />
          <TextField
            style={{ width: '96%', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
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
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Language Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Language Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '19px' }}>
        <div className="header" style={headerStyle}>
          <HowToRegIcon />
          <h3 style={{ marginLeft: '8px' }}>Skills</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px', width: '100%' }}>
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '96%', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" />
        </div>
      </div>



    </div >
  )
}
