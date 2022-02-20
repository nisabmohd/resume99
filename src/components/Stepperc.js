import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select a template',
  'Fill your details',
  'Print your resume',
];
  
export const Stepperc=(props)=>{
    return (
      <Box sx={{ width: '100%',margin:'19px 0' }}>
        <Stepper activeStep={parseInt(props.step)} alternativeLabel>
          {steps.map((label) => (
            <Step key={label} variant="primary">
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    );
  }