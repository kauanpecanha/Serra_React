import React from "react";
import "./Card.css"

const Card = props =>{
    return(
        <div className="card">
            <div className="card-title">
                <h3>{props.title}</h3>
            </div>
            <div className="card-content">
                <p>Idade: {props.age}</p>
                <p>Time: {props.team}</p>
                <p>Sobrenome: {props.lastName}</p>
            </div>
        </div>
    )
}

export default Card;