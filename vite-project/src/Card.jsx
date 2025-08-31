import React from 'react';
import './App.css';

function Card({data}) {
    const i = 0;
   const readMore = (url)=>{

    window.open(url);
   }

console.log(data);
  return (
    
     
    
    <div className  = 'cardContainer'>
        {data.map((curItem,index)=>{
        
            if(!curItem.urlToImage){
                return null
            }
            else {
                return< div className='card'>
                   
                <img src = {curItem.urlToImage} />
                <div className = 'content'>
                    <a className='title' >{curItem.title}</a>
                    <p>{curItem.description}</p>
                    <button >
                        Read more
                    </button>
                </div>
                </div>
            }
            
        })}
    </div>
    
  )
}

export default Card;