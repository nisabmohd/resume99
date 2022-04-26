import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import t1 from './asset/t1.png'
// import t2 from './asset/t2.png'
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


export const Right = () => {
  const headerStyle =
  {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', marginLeft: '18px'
  }
  return (
    <div style={{ borderRight: '2px solid rgb(37 37 37)', height: 'inherit', overflowX: 'scroll', paddingTop: '8px' }}>
  

      <div className="header" style={headerStyle}>
        <CategoryIcon></CategoryIcon>
        <h3 style={{ marginLeft: '8px' }}>Templates</h3>
      </div>
      <div className="templates" style={{ borderBottom: '1px solid rgb(53 52 52)', paddingBottom: '22px' }}>
        <img src={t1} style={{ width: '159px', margin: '0 12px', borderRadius: '6px' }} alt="" />
        <img src={t1} style={{ width: '159px', margin: '0 12px', borderRadius: '6px' }} alt="" />
      </div>

      <div className="header" style={headerStyle}>
        <SaveIcon></SaveIcon>
        <h3 style={{ marginLeft: '8px' }}>Save Resume</h3>

      </div>
      <div className="butoonsave" style={{ marginTop: '13px' ,display:'flex',flexDirection:'column'}}>
        <Button variant="outlined" size="medium" style={{ border: '1.72px solid rgb(53 52 52)', color: 'white', margin: '9px 12px', fontWeight: 'bold', padding: '10px 12px' }}>
          <PictureAsPdfIcon style={{ width: '22px', marginRight: '6px' }} />
          Save as PDF
        </Button>
        <Button variant="outlined" size="medium" style={{ border: '1.72px solid rgb(53 52 52)', color: 'white', margin: '9px 12px', fontWeight: 'bold', padding: '10px 12px' }}>
          <CodeIcon style={{ width: '22px', marginRight: '6px',marginTop:"-3px" }} />
          Save as JSON
        </Button>

        <Button variant="outlined" size="medium" style={{ border: '1.72px solid rgb(53 52 52)', color: 'white', margin: '9px 12px', fontWeight: 'bold', padding: '10px 12px' }}>
         
          Save for further
        </Button>
      </div>


    </div>
  )
}
