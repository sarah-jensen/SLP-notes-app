// TODO: flesh out activities list

import React, { useState } from 'react';

import { Percentage } from './Percentage.js';

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

const initialValues = {
  area: '',
  target: '',
  phase: '',
  activity: '',
  format: '',
  modality: '',
  quantity: '',
  type: '',
};
export const SessionData = () => {
  const [data, setData] = useState(initialValues);
  // Update state with user selections
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  console.log(data);
 
  // Handle user selection for ADDITIONAL TARGET
  const [addTarget, setAddTarget] = useState(false);
  const toggleAddTarget = () => {
    setAddTarget((state) => !state);
    console.log(addTarget);
  };
  return (
    <div>
      <Typography>Treatment Target</Typography>
      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-area-label'>Goal Area</InputLabel>
        <Select
          labelId='select-area-label'
          id='select-area'
          name='area'
          value={data.area}
          label='Goal Area'
          onChange={handleInputChange}
        >
          <MenuItem value='artic/phono'>Articulation/Phonology</MenuItem>
          <MenuItem value='semantics'>Semantics</MenuItem>
          <MenuItem value='morphology'>Morphology</MenuItem>
          <MenuItem value='syntax'>Syntax</MenuItem>
          <MenuItem value='pragmatics'>Pragmatics</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-target-label'>Target</InputLabel>
        <Select
          labelId='select-target-label'
          id='select-target'
          name='target'
          value={data.target}
          label='Target'
          onChange={handleInputChange}
        >
          <MenuItem value='comprehension'>Comprehension</MenuItem>
          <MenuItem value='expression'>Expression</MenuItem>
          <MenuItem value='comprehension and expression'>Both</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-phase-label'>Phase</InputLabel>
        <Select
          labelId='select-phase-label'
          id='select-phase'
          name='phase'
          value={data.phase}
          label='Phase'
          onChange={handleInputChange}
        >
          <MenuItem value='awareness'>Awareness</MenuItem>
          <MenuItem value='learning'>Learning</MenuItem>
          <MenuItem value='practice'>Practice</MenuItem>
          <MenuItem value='automaticity'>Automaticity</MenuItem>
          <MenuItem value='generalization'>Generalization</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-activity-label'>Activity</InputLabel>
        <Select
          labelId='select-activity-label'
          id='select-activity'
          name='activity'
          value={data.activity}
          label='Activity'
          onChange={handleInputChange}
        >
          <MenuItem value='picture book'>Picture book</MenuItem>
          <MenuItem value='cause-effect'>Cause-Effect</MenuItem>
          <MenuItem value='picture cards'>Picture cards</MenuItem>
          <MenuItem value='story cards'>Story cards</MenuItem>
          <MenuItem value='boardgame'>Board game</MenuItem>
          <MenuItem value='video clip'>Video clip</MenuItem>
          <MenuItem value='play-based'>Play-based</MenuItem>
          <MenuItem value='trivia-style game'>Trivia-style game</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-format-label'>Data Format</InputLabel>
        <Select
          labelId='select-format-label'
          id='select-format'
          name='format'
          value={data.format}
          label='Data Format'
          onChange={handleInputChange}
        >
          <MenuItem value='percentage'>Percentage</MenuItem>
          <MenuItem value='fraction'>Fraction</MenuItem>
          <MenuItem value='time'>Time-based</MenuItem>
        </Select>
      </FormControl>

      <Percentage></Percentage>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-quantity-label'>Quantity</InputLabel>
        <Select
          labelId='select-quantity-label'
          id='select-quantity'
          name='quantity'
          value={data.quantity}
          label='Quantity'
          onChange={handleInputChange}
        >
          <MenuItem value='min'>1-2</MenuItem>
          <MenuItem value='mod'>3-4</MenuItem>
          <MenuItem value='max'>5+</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-modality-label'>Modality</InputLabel>
        <Select
          labelId='select-modality-label'
          id='select-modality'
          name='modality'
          value={data.modality}
          label='Modality'
          onChange={handleInputChange}
        >
          <MenuItem value='visual'>Visual</MenuItem>
          <MenuItem value='verbal'>Verbal</MenuItem>
          <MenuItem value='tactile'>Tactile</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-type-label'>Type</InputLabel>
        <Select
          labelId='select-type-label'
          id='select-type'
          name='type'
          value={data.type}
          label='Type'
          onChange={handleInputChange}
        >
          <MenuItem value='cues'>Cues</MenuItem>
          <MenuItem value='prompts'>Prompts</MenuItem>
          <MenuItem value='models'>Models</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormControlLabel
          control={
            <Checkbox
              id='add-target'
              onChange={toggleAddTarget}
            />
          }
          label='Add another treatment target'
        />
      </FormControl>
    </div>
  );
};

// TODO: add logic for additional targets and/or treatment areas
/* TODO: create component with list of activities*/
/* TODO: insert function to display list of specific skills/components based upon which treatment area was selected*/
// TODO: add logic to enter x times in y minutes
/* TODO: add function for entry format based on format selected */
// TODO: add button and function to generate note
