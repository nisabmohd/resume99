import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  return (
    <Card sx={{ width: 505,margin:'19px 19px',borderRadius:'9px' }}>
      <CardMedia
        component="img"
        width="inherit"
        height="690"
        image={props.image}
        alt="img"
      />
      {/* <CardActions>
        <Button size="small" sx={{margin:'auto'}}>Get Started with this template</Button>
      </CardActions> */}
    </Card>
  );
}