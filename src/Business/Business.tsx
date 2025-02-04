import React from 'react';
import  './business.css';


export default function Business({name,image_url,rating,reviews,category,address}:{
    name:string,
    image_url:string,
    rating:number,
    reviews:number,
    category:string,
    address:string[] 
}){
  return (
    <div className="businessCard">
        <div className="ImgContainer">
            <img src={image_url||null} alt={name}/>
        </div>
        <div className="Info">
            <h3 className="name">{name}</h3>
            <span className="infoSection">
                <p>{address[0]}</p><h4 className="emphasis">{category}</h4>
            </span>
            <span className="infoSection">
                <p>{address[1]}</p><h4 className="emphasis">{rating} stars</h4>
            </span>
            <span className="infoSection">
                <p>{reviews} reviewers</p>
            </span>
        </div>
    </div>
  );
}