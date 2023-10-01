import React from 'react'
import "./Card.css";
export default function Cards(props) 
{
    const p_name = props.name;
    const p_department = props.department;
    const p_year = props.year;
    return (   
    <div id="container">	
        <div className="product-details">   
            <h1>{p_name}</h1>
            <div className='details'>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{p_name}</li>
                    <li className="list-group-item">{p_department}</li>
                    <li className="list-group-item">{p_year} </li>
                </ul>   
            </div>
            {/* <div className="control">   
                <button className="cardbtn">       
                    <span className="buy">View</span>
                </button>
                <button className="cardbtn">
                    <span className="buy">More..</span>
                </button>
            </div>   */}
        </div>
    </div>
  )
}
