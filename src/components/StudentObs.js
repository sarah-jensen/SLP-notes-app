import React, {useState} from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';

const initialValues = {
  focus: '',
  engagement: '',
  other: '',
};

export const StudentObs = () => {
  const [observations, setObservations] = useState(initialValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setObservations({
      ...observations,
      [e.target.name]: value,
    });
  };
  console.log(observations);

  return (
    <div>
     <Typography>Observation of Student</Typography>
      
      <FormControl sx={{ m: 1, minWidth: 240 }} required>
        <InputLabel id='focus-label'>Focus</InputLabel>
        <Select
          labelId='focus-label'
          id='focus'
          name='focus'
          value={observations.focus}
          label='Focus'
          defaultValue=''
          onChange={handleInputChange}
        >
          <MenuItem value='typical focus'>Typical</MenuItem>
          <MenuItem value='less focus than usual'>Less than usual</MenuItem>
          <MenuItem value='more focus than usual'>More than usual</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, minWidth: 240 }} required>
        <InputLabel id='engagement-label'>Engagement</InputLabel>
        <Select
          labelId='engagement-label'
          id='engagement'
          name='engagement'
          value={observations.engagement}
          label='Engagement'
          defaultValue=''
          onChange={handleInputChange}
        >
          <MenuItem value='typical engagement'>Typical</MenuItem>
          <MenuItem value='less engagement than usual'>Less than usual</MenuItem>
          <MenuItem value='more engagement than usual'>More than usual</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 240 }}>
      <TextField
        id='other-observation'
        label='Other'
        name='Other'
        multiline
        defaultValue=''
        onChange={handleInputChange}
      />
    </FormControl>
    </div>
  );
};