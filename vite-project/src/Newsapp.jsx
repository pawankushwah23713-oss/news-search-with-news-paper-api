import React, { useEffect } from 'react';
import './App.css';
import Card from './Card.jsx';
import { useState } from 'react';

function Newsapp() {
    const API_KEY = "0f10414b4912473899398ac7554a8493";
    const [newsData,setNewsData] = useState(null);
    const [search,setSearch] = useState("india");
    const getData = async ()=>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
        
    }
    useEffect(()=>{
        getData()
    },[])
    const handleInput = (e)=>{
        console.log(e.target.value);
        setSearch(e.target.value);
    }
    const userInput = (event)=>{
       setSearch(event.target.value);
    }
   
  return (
    
    <div>
        <nav>
            <div>
                <h1>Trendy News</h1>
            </div>
            <ul> 

                <a>All News</a>
                <a>Trending</a>
            </ul>
            
            <div className = 'searchBar'>
                <input type = 'text' placeholder='Search News' value = {search} onChange={handleInput}  />
                <button onClick = {getData}>Search</button>
            </div>
        </nav>
        <div>
                <p className = 'head'>Stay update with TrendyNews</p>
            </div>
        <div className='categoryBtn'>
            <button onClick={userInput} value = "sports">Sports</button>
            <button onClick = {userInput} value = "Politics">Politics</button>
            <button onClick = {userInput} value = "EnterTainment">Entertainment</button>
            <button onClick = {userInput} value = "Health">Health</button>
            <button onClick = {userInput} value = "Fitness">Fitness</button>
        </div>
        <div>
            {
                newsData?<Card data= {newsData} /> : null
            }
            
        </div>
        
    </div>
  )
}

export default Newsapp