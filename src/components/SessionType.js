import React, { useState } from 'react';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const initialValues = {
  setting: '',
  location: '',
};
export const SessionType = () => {
  const [session, setSession] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSession({
      ...session,
      [e.target.name]: value,
    });
  };
  console.log(session);
  // // Handle user selection for SETTING
  // const [setting, setSetting] = useState('');
  // const handleSetting = (event) => {
  //   setSetting(event.target.value);
  // };

  // // Handle user selection for LOCATION
  // const [location, setLocation] = useState('');
  // const handleLocation = (event) => {
  //   setLocation(event.target.value);
  // };
  // Handle user selection for MAKEUP
  const [makeup, setMakeup] = useState(false);
  const toggleMakeup = () => {
    setMakeup((state) => !state);
  };
  console.log(makeup);

  return (
    <div>
      <Typography>Session Type</Typography>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id='setting-label'>Setting</InputLabel>
        <Select
          labelId='setting-label'
          id='setting'
          name='setting'
          value={session.setting}
          label='Setting'
          onChange={handleInputChange}
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
          name='location'
          value={session.location}
          label='Location'
          onChange={handleInputChange}
        >
          <MenuItem value={'pull-out'}>Pull-out</MenuItem>
          <MenuItem value={'push-in'}>Push-in</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormControlLabel
          control={
            <Checkbox
              id='makeup'
              name='makeup'
              onChange={toggleMakeup}
            />
          }
          label='Makeup'
        />
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 240 }}>
      <TextField
        id='makeup-date'
        label='Date of Missed Session'
        name='makeup-date'
        multiline
        defaultValue=''
        onChange={handleInputChange}
      />
    </FormControl>
    </div>
  );
};
