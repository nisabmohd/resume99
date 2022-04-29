import React from 'react'
import CategoryIcon from '@mui/icons-material/Category';
import t1 from './asset/t1.png'
// import t2 from './asset/t2.png'
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GradeIcon from '@mui/icons-material/Grade';

export const Right = (props) => {
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
        <img src={t1} style={{ width: '139px', margin: '0 12px', borderRadius: '6px' }} alt="" />
        <img src={t1} style={{ width: '139px', margin: '0 12px', borderRadius: '6px' }} alt="" />
      </div>

      <div className="header" style={headerStyle}>
        <SaveIcon></SaveIcon>
        <h3 style={{ marginLeft: '8px' }}>Save Resume</h3>

      </div>
      <div className="butoonsave" style={{ marginTop: '13px', display: 'flex', flexDirection: 'column' }}>
        <Button variant="outlined" size="medium" style={{ fontFamily: 'PT Sans', border: '1.992px solid rgb(53 52 52)', color: 'white', margin: '9px 12px', fontWeight: 'bold', padding: '10px 12px',fontSize:'12px'  }}>
          <PictureAsPdfIcon style={{ width: '22px', marginRight: '6px' }} />
          Save as PDF
        </Button>
        <Button variant="outlined" size="medium" style={{ fontFamily: 'PT Sans', border: '1.992px solid rgb(53 52 52)', color: 'white', margin: '9px 12px', fontWeight: 'bold', padding: '10px 12px',fontSize:'12px'  }}>
          <DataObjectIcon style={{ width: '20.85px', marginRight: '6px', marginTop: "-1px" }} />
          Save as JSON
        </Button>

        <div className="dbbtns">
          <Button variant="outlined" size="medium" style={{ fontFamily: 'PT Sans', border: '1.992px solid rgb(53 52 52)', color: 'white', margin: '9px 7px', fontWeight: 'bold', padding: '10px 19px',width:'157px',fontSize:'12px' }} onClick={() => props.uploaddata()}>
           <GradeIcon style={{marginRight:'6px',width:'19px'}}></GradeIcon> Save
          </Button>
          <Button variant="outlined" size="medium" style={{ fontFamily: 'PT Sans', border: '1.992px solid rgb(53 52 52)', color: 'white', margin: '9px 6px', fontWeight: 'bold', padding: '10px 12px' ,width:'157px',fontSize:'12px' }} onClick={() => props.delete()}>
           <DeleteOutlineIcon style={{marginRight:'6px',width:'19px'}}></DeleteOutlineIcon> Delete
          </Button>
        </div>
      </div>


    </div>
  )
}
