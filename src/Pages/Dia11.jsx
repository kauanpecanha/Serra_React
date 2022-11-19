import React from 'react'
import './styles/Dia11.css'
export default function Dia11(){
    let numero = 0;
    
    return(
        <div className="Dia11">
            <div className="D11_square">
                <span>Integrantes totais no squad:</span>
                <span>{numero}</span>
                <div className="D11_button_area">
                    <button>Adicionar</button>
                </div>
            </div>
        </div>
    )
}