import React from 'react';
import  "./searchBar.css";

export default function SearchBar({queries,handleChange,handleSubmit,sort,handleClick}:{
  queries:any,
  handleChange:(e:React.HandleEvent<HTMLInputElement>)=>void,
  handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void,
  sort:string,
  handleClick:(e:React.ButtonEvent<HTMLButtonElement>)=>void
}){

  const toggleFocus=(sortMethod:string,buttonValue:string)=>{
    if(sortMethod===buttonValue){
      return 'focusedButton';
    }
    return '';
  }

  return (
    <header className="Header">
      <section className="title">
        <h1>ravenous</h1>
      </section>
      <section className="searchArea">
        <div className="buttonArea">
          <button 
            className={`filterButton ${toggleFocus(sort,'best_match')}`} 
            value="best_match" onClick={handleClick}>
            Best <br/> Match
          </button>
          <button 
            className={`filterButton ${toggleFocus(sort,'highest_rated')}`} 
            value="highest_rated" onClick={handleClick}>
            Highest <br/> Rated
          </button>
          <button 
            className={`filterButton ${toggleFocus(sort,'most_reviewed')}`} 
            value="most_reviewed" onClick={handleClick}>
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