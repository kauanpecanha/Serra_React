import React from "react";
import './Menu.css'

export default function Menu(){
    return(
        <aside className="Menu">
            <nav>
                <ul className="list">
                    <li className = "element"><a href = "/">Home</a></li>
                    <li className = "element"><a href = "/dia1">Dia 1.0</a></li>
                    <li className = "element"><a href = "/dia11">Dia 1.1</a></li>
                    <li className = "element"><a href = "/dia2">Dia 2.0</a></li>
                    <li className = "element"><a href = "/dia21">Dia 2.1</a></li>
                    <li className = "element"><a href = "/dia3">Dia 3.1</a></li>
                    <li className = "element"><a href = "/dia4">Dia 4.0</a></li>
                    <li className = "element"><a href = "/dia6">Dia 6.0</a></li>
                </ul>
            </nav>
        </aside>
    )
}