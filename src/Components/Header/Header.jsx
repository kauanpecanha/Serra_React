import React from "react"
import "./Header.css"

export default function Header(props){
    
    const style = {
        backgroundColor: props.back,
        color: props.color,
    }
    
    return(
        <div className="header" style={style}>
            <h1>{props.title}</h1>
        </div>
    )
}