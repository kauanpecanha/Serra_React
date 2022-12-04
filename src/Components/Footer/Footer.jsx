import React from "react"
import "./Footer.css"

export default function Footer(props){
    
    const style = {
        backgroundColor: props.back,
        color: props.color,
    }
    
    return(
        <div className="footer" style={style}>
            <h1>{props.title}</h1>
        </div>
    )
}