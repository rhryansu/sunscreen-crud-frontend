import './App.css';
import ResponsiveAppBar from './components/responsiveAppBar.component';
import CustomizedTables from './components/customizedTables.component';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://192.168.1.103:8080/sunscreen/getAll')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);


  return (
    <div className="App">
      <ResponsiveAppBar />
      <span></span>
      <CustomizedTables data={data}/>
    </div>
  );
}

export default App;
