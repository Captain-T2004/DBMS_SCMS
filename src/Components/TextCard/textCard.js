import React from 'react';
import './textCard.css';
import { Link } from "react-router-dom";
import Switch from "react-switch";
const TextCard = ({ title, content, status }) => {
  if(status == "show"){
    return (
      <div className="card">
          <h2 className="card-title">{title}</h2>
          {content.map((item)=><Link to="https://google.in"className="card-content">{item}</Link>)}
      </div>
    );
  }
  else{
    return (<></>);
  }
};

export default TextCard;