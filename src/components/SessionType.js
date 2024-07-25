import React, {useState} from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

export const SessionType = () => {
  // Handle user selection for SETTING
  const [setting, setSetting] = useState('');
  const handleSetting = (event) => {
    setSetting(event.target.value);
  };

  // Handle user selection for LOCATION
  const [location, setLocation] = useState('');
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };
  // Handle user selection for MAKEUP
  const [makeup, setMakeup] = useState(false);
  const toggleMakeup = () => {
    setMakeup(state => !state);
    console.log(makeup)
  };

  return (
    <div>
      <Typography>Session Type</Typography>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='setting-label'>Setting</InputLabel>
        <Select
          labelId='setting-label'
          id='setting'
          value={setting}
          label='Setting'
          onChange={handleSetting}
        >
          <MenuItem value={'group'}>Group</MenuItem>
          <MenuItem value={'individual'}>Individual</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='location-label'>Location</InputLabel>
        <Select
          labelId='location-label'
          id='location'
          value={location}
          label='Location'
          onChange={handleLocation}
        >
          <MenuItem value={'pull-out'}>Pull-out</MenuItem>
          <MenuItem value={'push-in'}>Push-in</MenuItem>
        </Select>
      </FormControl>
     
      <FormControl sx={{ m: 1, minWidth: 120 }}>
      <FormControlLabel control={
        <Checkbox 
          onChange={toggleMakeup}
          />} label="Makeup" />      
    </FormControl>

    </div>
  );
};
