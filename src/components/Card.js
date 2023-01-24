import React from "react";
import BMW from "../images/bmw.jpg"

function Card(props) {
    return (
        <div className="card" onClick={() => props.func(props.title)}>
            <img src={require(`../images/${props.title}.jpg`)} alt={props.altText}></img>
            <p>{props.title}</p>
        </div>
    )
}

export default Card