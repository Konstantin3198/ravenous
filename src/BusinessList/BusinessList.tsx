import React from 'react';
import "./BusinessList.css";
import Business from '../Business/Business.tsx';

export default function BusinessList({data,error}:{
    data:any[],
    error:{code:string,description:string}|null
}){

    if(!error && data?.length!==0){
    return (
        <main className="listContainer">
            {
                data?.map(restaurant=>(
                   <Business 
                    key={restaurant.id}
                    name={restaurant.name}
                    image_url={restaurant.image_url}
                    rating={restaurant.rating}
                    reviews={restaurant.review_count}
                    category={restaurant.categories[0]['title']}
                    address={restaurant.location['display_address']}/>
                ))
            }
        </main>
    );
  }
  else{
    return (
        <main className="errorContainer">
           <p>{error?.code}</p>
           <p>{error?.description}</p>
        </main>
    );
  }
}