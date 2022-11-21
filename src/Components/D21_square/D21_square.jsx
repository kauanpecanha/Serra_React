import React from 'react'
import './D21_square.css'

export default function D21_square(){
    return(
        <div className="square">
            <h3>Título</h3>
            <div className="square_content">
                <div className="square_content_data">
                    <span>Número 1</span>
                    <input></input>
                </div>
                <div className="square_content_data">
                    <span>Número 2</span>
                    <input></input>
                </div>
                <div className="square_content_data">
                    <span>Resultado</span>
                    <div className="resultado"></div>
                </div>
            </div>
        </div>
    )
}