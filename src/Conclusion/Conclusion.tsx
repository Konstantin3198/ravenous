import React from 'react';
import "./conclusion.css";
import {ReactComponent as YelpIcon} from './icon/yelp-icon.svg';


export default function Conclusion(){
  return (
    <footer className="Footer">
      <p>
        A React app that use an external api
        to search restaurants with respect to locations.
      </p>
      <p className="lastParagraph">
        <strong>Powered</strong>by<strong>Yelp</strong> 
          <YelpIcon width={30} height={30}/>
         api.
      </p>   
    </footer>
  );
}