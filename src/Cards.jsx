import React from 'react';

function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} className="card_img"/>
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title"> {props.Sname}</h3>
          <a href="" target="_blank">
            <button id="ymn">Watch Now</button>
          </a>
          </div>
        </div>
      </div>
  </>
    )
  }
  export default Card;