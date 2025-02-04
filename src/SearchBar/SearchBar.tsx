import React from 'react';
import  "./searchBar.css";

export default function SearchBar({queries,handleChange,handleSubmit}:{
  queries:any,
  handleChange:(e:React.HandleEvent<HTMLInputElement>)=>void
  handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}){

  return (
    <header className="Header">
      <section className="title">
        <h1>ravenous</h1>
      </section>
      <section className="searchArea">
        <div className="buttonArea">
          <button className="filterButton">
            Best <br/> Match
          </button>
          <button className="filterButton">
            Highest <br/> Rated
          </button>
          <button className="filterButton">
            Most <br/> Reviewed
          </button>
        </div>
        <form onSubmit={handleSubmit} className="Form">
          <div className="inputArea">
            <input 
              className="inputBar"
              type="text" 
              name="category" 
              value={queries['category']}
              onChange={handleChange}
              required
              placeholder="Search Businesses"/>
            <input 
              className="inputBar"
              type="text"
              name="location"
              value={queries['location']}
              onChange={handleChange}
              required
              placeholder="Where?"/>
          </div>
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
      </section>
    </header>
  );
}