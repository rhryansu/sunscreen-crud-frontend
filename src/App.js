import './App.css';
import ResponsiveAppBar from './components/responsiveAppBar.component';
import CustomizedTables from './components/customizedTables.component';
import { useEffect, useState } from 'react';
import SearchBar from './components/searchBar.component';


function App() {

  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [matchedProducts, setMatchedProducts] = useState([]);

  const onSearchChange = (event) => {
    const searchFieldLocal = event.target.value.toLocaleLowerCase();
    console.log(event.target.value);
    setSearchField(searchFieldLocal);
  }

  useEffect(() => {
    fetch('http://localhost:8080/sunscreen/getAll')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  
  useEffect(() => {
    const matchedProductList = data.filter(product => product.name.toLocaleLowerCase().includes(searchField));
    setMatchedProducts(matchedProductList);
  }, [data, searchField]);

  

  return (
    <div className="App">
      <ResponsiveAppBar />
      <span></span>
      <SearchBar 
        className={'searchBar'}
        placeholder={'Search by name'}
        onChangeHandler={onSearchChange}
      />
      <CustomizedTables data={matchedProducts} />
    </div>
  );

}

export default App;
