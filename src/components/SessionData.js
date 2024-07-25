// TODO: flesh out activities list

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

export const SessionData = () => {
  // Handle user selection for treatment AREA
  const [area, setArea] = useState('');
  const handleArea = (event) => {
    setArea(event.target.value);
  };

  // Handle user selection for TARGET (receptive/expressive/both)
  const [target, setTarget] = useState('');
  const handleTarget = (event) => {
    setTarget(event.target.value);
  };

  // Handle user selection for PHASE
  const [phase, setPhase] = useState('');
  const handlePhase = (event) => {
    setPhase(event.target.value);
  };

  // Handle user selection for ACTIVITY
  const [activity, setActivity] = useState('');
  const handleActivity = (event) => {
    setActivity(event.target.value);
  };

  // Handle user selection for data FORMAT
  const [format, setFormat] = useState('');
  const handleFormat = (event) => {
    setFormat(event.target.value);
  };

  // Handle user input for INDEPENDENT accuracy
  const [independent, setIndependent] = useState('');
  const handleIndependent = (event) => {
    setIndependent(event.target.value);
  };

  //TODO: Handle user input for SUPPORTED accuracy

  //   Handle user input for scaffold QUANTITY
  const [modality, setModality] = useState('');
  const handleModality = (event) => {
    setModality(event.target.value);
  };

 //   Handle user input for scaffold MODALITY
 const [quantity, setQuantity] = useState('');
 const handleQuantity = (event) => {
   setQuantity(event.target.value);
 };

  // Handle user input for scaffold TYPE
  const [type, setType] = useState('');
  const handleType = (event) => {
    setType(event.target.value);
  };
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
          value={area}
          label='Goal Area'
          onChange={handleArea}
        >
          <MenuItem value={'artic/phono'}>Articulation/Phonology</MenuItem>
          <MenuItem value={'semantics'}>Semantics</MenuItem>
          <MenuItem value={'morphology'}>Morphology</MenuItem>
          <MenuItem value={'syntax'}>Syntax</MenuItem>
          <MenuItem value={'pragmatics'}>Pragmatics</MenuItem>
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
          value={target}
          label='Target'
          onChange={handleTarget}
        >
          <MenuItem value={'comprehension'}>Comprehension</MenuItem>
          <MenuItem value={'expression'}>Expression</MenuItem>
          <MenuItem value={'both comprehension and expression'}>Both</MenuItem>
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
          value={phase}
          label='Phase'
          onChange={handlePhase}
        >
          <MenuItem value={'awareness'}>Awareness</MenuItem>
          <MenuItem value={'learning'}>Learning</MenuItem>
          <MenuItem value={'practice'}>Practice</MenuItem>
          <MenuItem value={'automaticity'}>Automaticity</MenuItem>
          <MenuItem value={'generalization'}>Generalization</MenuItem>
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
          value={activity}
          label='Activity'
          onChange={handleActivity}
        >
          <MenuItem value={'picture book'}>Picture book</MenuItem>
          <MenuItem value={'cause-effect'}>Cause-Effect</MenuItem>
          <MenuItem value={'picture cards'}>Picture cards</MenuItem>
          <MenuItem value={'story cards'}>Story cards</MenuItem>
          <MenuItem value={'boardgame'}>Board game</MenuItem>
          <MenuItem value={'video clip'}>Video clip</MenuItem>
          <MenuItem value={'play-based'}>Play-based</MenuItem>
          <MenuItem value={'trivia-style game'}>Trivia-style game</MenuItem>
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
          value={format}
          label='Data Format'
          onChange={handleFormat}
        >
          <MenuItem value={'percentage'}>Percentage</MenuItem>
          <MenuItem value={'fraction'}>Fraction</MenuItem>
          <MenuItem value={'time'}>Time-based</MenuItem>
        </Select>
      </FormControl>

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

      <Typography>Supported Accuracy</Typography>

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

      <FormControl
        required
        sx={{ m: 1, minWidth: 240 }}
      >
        <InputLabel id='select-quantity-label'>Quantity</InputLabel>
        <Select
          labelId='select-quantity-label'
          id='select-quantity'
          value={quantity}
          label='Quantity'
          onChange={handleQuantity}
        >
          <MenuItem value={'min'}>1-2</MenuItem>
          <MenuItem value={'mod'}>3-4</MenuItem>
          <MenuItem value={'max'}>5+</MenuItem>
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
          value={modality}
          label='Modality'
          onChange={handleModality}
        >
          <MenuItem value={'visual'}>Visual</MenuItem>
          <MenuItem value={'verbal'}>Verbal</MenuItem>
          <MenuItem value={'tactile'}>Tactile</MenuItem>
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
          value={type}
          label='Type'
          onChange={handleType}
        >
          <MenuItem value={'cues'}>Cues</MenuItem>
          <MenuItem value={'prompts'}>Prompts</MenuItem>
          <MenuItem value={'models'}>Models</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <FormControlLabel
          control={<Checkbox onChange={toggleAddTarget} />}
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
