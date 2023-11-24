import React from 'react'
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
                    <li className="list-group-item"><strong>Name:</strong> {p_name}</li>
                    <li className="list-group-item"><strong>Department:</strong> {p_department}</li>
                    <li className="list-group-item"><strong>Year:</strong> {p_year}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}