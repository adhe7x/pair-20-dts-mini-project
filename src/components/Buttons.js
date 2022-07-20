import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Buttons() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Sign In</Button>
      <Button>Sign Out</Button>
    </ButtonGroup>
  );
}

export default Buttons;
