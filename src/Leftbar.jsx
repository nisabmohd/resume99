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

export const Leftbar = () => {

  const headerStyle =
  {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', marginLeft: '49px'
  }
  return (
    <div style={{ height: 'inherit', overflowX: 'scroll', paddingTop: '8px' }}>
      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <PersonIcon></PersonIcon>
          <h3 style={{ marginLeft: '8px' }}>Basics</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <div className="userbox1" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '9px 0' }}>
            <Avatar sx={{ width: '125px', height: '125px' }}></Avatar>
          </div>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Full Name" variant="outlined" />
          <TextField sx={{ width: '395px', marginTop: '12px', fontSize: '9px' }} id="outlined-basic" label="Email Address" variant="outlined" />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField sx={{ width: '199px', marginTop: '6px', fontSize: '9px' }} id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField sx={{ width: '187px', marginTop: '6px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Website" variant="outlined" />
          </div>
        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '22px' }} id="outlined-basic" label="Headline" variant="outlined" />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField
              style={{ width: '395px', marginTop: '11px' }}
              id="outlined-multiline-static"
              label="Summary"
              multiline
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
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Address" variant="outlined" />
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField sx={{ width: '199px', marginTop: '6px', fontSize: '9px' }} id="outlined-basic" label="City" variant="outlined" />
            <TextField sx={{ width: '187px', marginTop: '6px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Region" variant="outlined" />
          </div>
          <div className="box2" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '9px 0' }}>
            <TextField sx={{ width: '199px', marginTop: '-4px', fontSize: '9px' }} id="outlined-basic" label="Country" variant="outlined" />
            <TextField sx={{ width: '187px', marginTop: '-4px', marginLeft: '9px', fontSize: '9px' }} id="outlined-basic" label="Postal Code" variant="outlined" />
          </div>
        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <LinkedInIcon></LinkedInIcon>
          <h3 style={{ marginLeft: '8px' }}>Profiles</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="LinkedIn" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Instagram" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Twitter" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Facebook" variant="outlined" />

        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <SchoolIcon></SchoolIcon>
          <h3 style={{ marginLeft: '8px' }}>Education</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField
            style={{ width: '395px', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Degree followed by start and end year"
            multiline
            rows={3}
          />
          <TextField
            style={{ width: '395px', marginTop: '14px' }}
            id="outlined-multiline-static"
            label="School followed by start and end year"
            multiline
            rows={3}
          />

        </div>
      </div>

      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <EmojiEventsIcon></EmojiEventsIcon>
          <h3 style={{ marginLeft: '8px' }}>Awards</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Award Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Award Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <BadgeIcon />
          <h3 style={{ marginLeft: '8px' }}>Certificates</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Certificate Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Certificate Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Certificate Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="header" style={headerStyle}>
          <HardwareIcon />
          <h3 style={{ marginLeft: '8px' }}>Projects</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField
            style={{ width: '395px', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            rows={3}
          />
          <TextField
            style={{ width: '395px', marginTop: '11px' }}
            id="outlined-multiline-static"
            label="Project title and description"
            multiline
            rows={3}
          />
          <TextField
            style={{ width: '395px', marginTop: '11px' }}
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
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Language Title" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Language Title" variant="outlined" />
        </div>
      </div>


      <div className="basics" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',marginBottom:'19px' }}>
        <div className="header" style={headerStyle}>
          <HowToRegIcon />
          <h3 style={{ marginLeft: '8px' }}>Skills</h3>
        </div>
        <div className="inputsbasic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '19px' }}>
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" />
          <TextField size="normal" type="text" sx={{ width: '395px', marginLeft: '0px', fontSize: '6px', marginTop: '16px' }} id="outlined-basic" label="Skill title followed by proficiency" variant="outlined" />
        </div>
      </div>



    </div >
  )
}
