import React from 'react';
import "./BusinessList.css";
import Business from '../Business/Business.tsx';

export default function BusinessList(){
    const list=new Array(10).fill(4);
    return (
        <main className="listContainer">
            {
                list.map((item,i)=><Business key={i}/>)
            }
        </main>
    );
}