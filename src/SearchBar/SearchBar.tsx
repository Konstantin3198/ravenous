import React from 'react';
import  "./searchBar.css";

export default function SearchBar(){
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
                <form className="Form">
                    <div className="inputArea">
                        <input 
                           className="inputBar"
                           type="text" 
                           name="business" 
                           placeholder="Search Businesses"/>
                        <input 
                           className="inputBar"
                           type="text"
                           name="location"
                           placeholder="Where?"/>
                    </div>
                    <button className="searchButton">
                       Search
                    </button>
                </form>
            </section>
        </header>
    );
}