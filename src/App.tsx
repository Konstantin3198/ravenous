import React,{useState} from 'react';
import './App.css';
import BusinessList from './BusinessList/BusinessList.tsx';
import SearchBar from './SearchBar/SearchBar.tsx';
import Conclusion from './Conclusion/Conclusion.tsx';
import fetchData from './api/api.tsx';

function App() {
  const [queries,setQueries]=useState({});
  const [data,setData]=useState([]);
  const [error,setError]=useState(null);
  
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

  return (
    <>
      <SearchBar queries={queries} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <BusinessList data={data} error={error}/>
      <Conclusion/>
    </>
  );
}

export default App;
