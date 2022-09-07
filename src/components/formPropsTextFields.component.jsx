import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/formPropsTextFields.style.css'
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  return (
    <Box 
      component="form"
      display="flex"
      justifyContent={'center'}
      alignItems={'center'}
      sx={{
        p: '50px',
        '& .MuiTextField-root': { my: 'auto', mx: 'auto', width: '45ch', p: '5px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div sx={{mx: 'auto', my: 'auto'}}>
      <TextField
        id="sunscreen-id"
        label="ID"
        // FIXME: `defaultValue` should be a number that inherits from the last ID in the database`
        defaultValue=""
        InputProps={{
          readOnly: true,
        }}
        InputLabelProps={{
          shrink: false,
        }}
        variant="standard"
      />
        <TextField
          required
          id="sunscreen-name"
          label="Name"
          defaultValue=""
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
        />
        <TextField
          id="sunscreen-price"
          label="Price(A$)"
          type="number"
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
        />
        <TextField
          id="sunscreen-spf"
          label="SPF"
          type="number"
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
        />
        <TextField
          required
          id="sunscreen-description"
          label="Description"
          defaultValue=""
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
        />
        <TextField
          required
          id="sunscreen-imageLink"
          label="ImageLink"
          defaultValue=""
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
        />
        <TextField
          required
          id="sunscreen-reviewLink"
          label="ReviewLink"
          defaultValue=""
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
        />
      </div>
          <Button variant="contained" color="primary" sx={{my: 'auto', mx: 'auto', py: '0.3vw', px: '2vw'}}>Submit</Button>
    </Box>
  );
}
