import React from "react";
import './Menu.css'

export default function Menu(){
    return(
        <aside className="Menu">
            <nav>
                <ul className="list">
                    <li className = "element"><a href = "/">Home</a></li>
                    <li className = "element"><a href = "/dia1">Dia 1.0</a></li>
                    <li className = "element"><a href = "/dia11">Dia 2.0</a></li>
                    <li className = "element"><a href = "/dia2">Dia 3.0</a></li>
                    <li className = "element"><a href = "/dia21">Dia 4.0</a></li>
                    <li className = "element"><a href = "/dia3">Dia 5.0</a></li>
                    <li className = "element"><a href = "/dia31">Dia 6.0</a></li>
                    <li className = "element"><a href = "/dia4">Dia 7.0</a></li>
                    <li className = "element"><a href = "/dia6">Dia 8.0</a></li>
                </ul>
            </nav>
        </aside>
    )
}