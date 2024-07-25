import React, { useState } from 'react';

import { Stack, Button } from '@mui/material';

export const Buttons = () => {
  return (
    <div>
      <Stack
        spacing={2}
        direction='row'
      >
        <Button variant='contained'>Generate Note</Button>
        <Button variant='text'>Reset</Button>
      </Stack>
    </div>
  );
};