import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SingleActivityItem.css';

const SingleActivityItem = (props) => {
  return (
    <div className="activity-item-container">
      <div className="activity-item-row">
        <div className="host-column">
          <img className="host-img" src="../../build/images/stick-figure-dude.png"></img>
          <h5 className="host-name">(Username goes here)</h5>
        </div>
        <div className="description-column">
          <h3 className="description-item">{props.title}</h3>
          <h4 className="description-item">{props.location}</h4>
          <h4 className="description-item"><i>{props.start}</i></h4>
          <p className="description-item">{props.description}</p>
        </div>
        <button 
          onClick={(e) => {
            props.viewActivity(e)
            props.viewActivityPage()
          }} 
          id={props.id}
          className="details-button"
        >View</button>
      </div>
    </div>
  )
}

export default SingleActivityItem;