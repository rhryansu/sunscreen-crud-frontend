import ResponsiveAppBar from '../components/responsiveAppBar.component';
import FormPropsTextFields from '../components/formPropsTextFields.component';
import { Container } from '@mui/system';
import Paper from '@mui/material/Paper';

export default function Add() {

  return (
    <div className="add"> 
      <ResponsiveAppBar/>
      <span></span>
      <Container sx={{my: '200px'}}>
        <Paper elevation={2}>
          <FormPropsTextFields/>
        </Paper>
      </Container>
      
    </div>
    );
}