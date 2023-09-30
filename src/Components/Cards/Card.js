import React from 'react'
import info from "../Components/Cards/info";
export default function Cards() 
{
    return (
        
    <div id="container">	
        
        <div class="product-details">
            
        <h1>{info.name}</h1>
    <div className='details'>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">NAME: {info.name}</li>
            <li class="list-group-item">DEPARTMENT: {info.department}</li>
            <li class="list-group-item">YEAR:{info.year} </li>
        </ul>   
  </div>
    <div class="control">
        <br/>
        
    <button class="cardbtn">       
    <span class="buy">View</span>
    </button>
    <button class="cardbtn">
    <span class="buy">More..</span>
    </button>
        
    </div>
                
    </div>
        
    <div class="product-image">
        
        <img src="https://images.unsplash.com/photo-1606830733744-0ad778449672?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNocmlzdG1hcyUyMHRyZWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
    </div>

    </div>




  )
}
