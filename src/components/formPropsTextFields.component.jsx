import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../styles/formPropsTextFields.style.css'
import SubmitButton from './submitButton.component';

export default function FormPropsTextFields() {

  const [data, setData] = React.useState({});

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
          required
          id="sunscreen-name"
          label="Name"
          defaultValue=""
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
          onChange={(e) => setData({...data, name: e.target.value})}
          />
        <TextField
          required
          id="sunscreen-price"
          label="Price(A$)"
          type="number"
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
          onChange={(e) => setData({...data, price: e.target.value})}
        />
        <TextField
          required
          id="sunscreen-spf"
          label="SPF"
          type="number"
          InputLabelProps={{
            shrink: false,
          }}
          variant="standard"
          onChange={(e) => setData({...data, spf: e.target.value})}
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
          onChange={(e) => setData({...data, description: e.target.value})}
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
          onChange={(e) => setData({...data, imageLink: e.target.value})}
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
          onChange={(e) => setData({...data, reviewLink: e.target.value})}
        />
      </div>
          <SubmitButton data={data}/>
    </Box>
  );
}
