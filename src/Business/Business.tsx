import React from 'react';
import  './business.css';


export default function Business(){
  return (
    <div className="businessCard">
        <div className="ImgContainer">
            <img src="" alt=""/>
        </div>
        <div className="Info">
            <h3 className="name">MarginOtto Pizzeria</h3>
            <span className="infoSection">
                <p>1010 Pandington Way</p><h3 className="emphasis">Italian</h3>
            </span>
            <span className="infoSection">
                <p>BorderTown</p><h4 className="emphasis">4.5 stars</h4>
            </span>
            <span className="infoSection">
                <p>NY 1010</p><p>90 reviewers</p>
            </span>
        </div>
    </div>
  );
}