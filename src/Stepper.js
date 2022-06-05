import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './styles/Stepper.css';

const steps = [
  {
    label: 'Choose a package',
    description: `Choose from our Essentials & Enhanced Packages, 
    based on your requirments.`,
  },
  {
    label: 'Select Options & Grant Access',
    description:
      'Follow our onboarding & grant us access your analytics and platforms.',
  },
  {
    label: 'Analytics Set Up',
    description: `Our developers will get to work setting up GA4, enhanced analytics 
    & e-commerce tracking.`,
  },
  {
    label: 'Testing & Activation.',
    description: `We'll run diagnostics and tests to ensure everything is running smoothly, before making live.`,
  },
];

export default function VerticalLinearStepper() {

  return (
    <div>
      <center><h2 className="orangeText">How it Works<span style={{color:'black'}}>.</span></h2></center>
      <Box sx={{ maxWidth: 500 }} style={{margin:'auto'}}>
        <Stepper activeStep={-1} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <div className='astep'>
                <h3><strong>{step.label}</strong></h3>
                {step.description}
                </div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
