import React from 'react'
import {Link} from 'react-router-dom'
import "./Card.css";
export default function Cards(props) 
{
    const p_name = props.name;
    const p_department = props.department;
    const p_year = props.year;
    return (   
    <div id="container">	
        <div className="product-details" id="coursepage_card">
            <div className='left-column'>
                <h1>{p_name}</h1>
            </div>
            <div className='right-column'>
                <ul className="list-group list-group-flush">
                    <Link to="https://google.co.in" className="list-group-item">{p_name}</Link>
                    <Link to="https://google.co.in" className="list-group-item">{p_department}</Link>
                    <Link to="https://google.co.in" className="list-group-item">{p_year}</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}