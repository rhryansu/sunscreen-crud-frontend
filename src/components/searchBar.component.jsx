import '../styles/searchBar.style.css';

export default function SearchBar({ className, placeholder, onChangeHandler }) {

  return (
    <input className={className} type='search' placeholder={placeholder} onChange={onChangeHandler} />
  )

}
