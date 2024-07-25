import React, { useState } from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

export const Percentage = () => {

    // Handle user input for INDEPENDENT accuracy
  const [independent, setIndependent] = useState('');
  const handleIndependent = (event) => {
    setIndependent(document.getElementById('independent-input').value);
    console.log(independent);
  };

  // Handle user input for SCAFFOLDED accuracy
  const [scaffolded, setScaffolded] = useState('');
  const handleScaffolded = (event) => {
    setScaffolded(document.getElementById('scaffolded-input').value);
    console.log(scaffolded);
  };

  return (
    <div>
      <Typography>Independent Accuracy</Typography>

      <FormControl
        variant='standard'
        sx={{ m: 1, mt: 3, width: '25ch' }}
      >
        <Input
          id='independent-input'
          endAdornment={<InputAdornment position='end'>%</InputAdornment>}
          aria-describedby='independent-input-helper-text'
          inputProps={{
            'aria-label': 'independent-input',
          }}
        />
        <FormHelperText id='standard-weight-helper-text'>
          Independent Accuracy
        </FormHelperText>
      </FormControl>

      <Typography>Scaffolded Accuracy</Typography>

      <FormControl
        variant='standard'
        sx={{ m: 1, mt: 3, width: '25ch' }}
      >
        <Input
          id='scaffolded-input'
          endAdornment={<InputAdornment position='end'>%</InputAdornment>}
          aria-describedby='scaffolded-input-helper-text'
          inputProps={{
            'aria-label': 'scaffolded-input',
          }}
        />
        <FormHelperText id='standard-weight-helper-text'>
          Scaffolded Accuracy
        </FormHelperText>
      </FormControl>
    </div>
  );
};
