import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';

export default function SubmitButton(props) {

  const data = props.data;

  const [loading, setLoading] = React.useState(false);

  function handleSubmit() {
    setLoading(true);
    fetch('http://localhost:8080/sunscreen/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        if (response.ok) {
          setTimeout(() => setLoading(false), 2000);
        }
      })
      .catch(err => console.log(err));
  }


  return (
    <LoadingButton
      sx={{my: 'auto', mx: 'auto', py: '0.3vw', px: '3vw'}}
          onClick={handleSubmit}
          loading={loading}
          variant="contained"
        >
          Submit
    </LoadingButton>
  );
}