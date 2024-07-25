import React, {useState} from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';



export const StudentObs = () => {
    // Handle use selection for FOCUS
  const [focus, setFocus] = useState('');
  const handleFocus = (event) => {
    setFocus(document.getElementById('focus').value);
  };

  // Handle use selection for ENGAGEMENT
  const [engagement, setEngagement] = useState('');
  const handleEngagement = (event) => {
    setEngagement(document.getElementById('engagement').value);
  };

  return (
    <div>
     <Typography>Observation of Student</Typography>
      
      <FormControl sx={{ m: 1, minWidth: 240 }} required>
        <InputLabel id='focus-label'>Focus</InputLabel>
        <Select
          labelId='focus-label'
          id='focus'
          value={focus}
          label='Focus'
          onChange={handleFocus}
        >
          {/* Student displayed ___ */}
          <MenuItem value={'typical focus'}>Typical</MenuItem>
          <MenuItem value={'less focus than usual'}>Less than usual</MenuItem>
          <MenuItem value={'more focus than usual'}>More than usual</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 240 }} required>
        <InputLabel id='engagement-label'>Engagement</InputLabel>
        <Select
          labelId='engagement-label'
          id='engagement'
          value={engagement}
          label='Engagement'
          onChange={handleEngagement}
        >
          {/* and was ___ */}
          <MenuItem value={'typical engagement'}>Typical</MenuItem>
          <MenuItem value={'less engagement than usual'}>Less than usual</MenuItem>
          <MenuItem value={'more engagement than usual'}>More than usual</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 240 }}>
      <TextField
        id="other-observation"
        label="Other"
        multiline
        defaultValue=""
      />
    </FormControl>
    </div>
  );
};