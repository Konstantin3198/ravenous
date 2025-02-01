import React from 'react';
import './App.css';
import BusinessList from './BusinessList/BusinessList.tsx';
import SearchBar from './SearchBar/SearchBar.tsx';
import Conclusion from './Conclusion/Conclusion.tsx';

function App() {
  return (
    <>
      <SearchBar/>
      <BusinessList/>
      <Conclusion/>
    </>
  );
}

export default App;
