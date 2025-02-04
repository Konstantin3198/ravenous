import React,{useState} from 'react';
import './App.css';
import BusinessList from './BusinessList/BusinessList.tsx';
import SearchBar from './SearchBar/SearchBar.tsx';
import Conclusion from './Conclusion/Conclusion.tsx';
import fetchData from './api/api.tsx';
import sortBy from './utilities/utils.tsx';

function App() {
  const [queries,setQueries]=useState({});
  const [data,setData]=useState([]);
  const [error,setError]=useState(null);
  const [sort,setSort]=useState('best_match');
  
  const handleChange=(e:React.HandleEvent<HTMLInputElement>)=>{
    const name=e.target.name;
    setQueries({...queries,[name]:e.target.value});
  }

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const {category,location}=queries;
    const fetchedData= await fetchData(category,location);
    if(fetchedData.businesses){
      setData(fetchedData.businesses);
      setError(null);
    }else{
      setError(fetchedData.error);
      setData([]);
    }
    setQueries({category:'',location:''});
  }

  const handleClick=(e:React.ButtonEvent<HTMLButtonElement>)=>{
    setSort(e.target.value);
    setData(sortBy(data,e.target.value));
  }

  return (
    <>
      <SearchBar queries={queries} handleChange={handleChange} 
        handleSubmit={handleSubmit} sort={sort} handleClick={handleClick}/>
      <BusinessList data={data} error={error}/>
      <Conclusion/>
    </>
  );
}

export default App;
