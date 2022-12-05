import React, { useState } from 'react'

import './styles/Dia11.css'
export default function Dia11(){
    
    const [number, setNumber] = useState(0);

    function addNumber(){
        return(
            setNumber(number+1)
        )
    }
    
    return(
        <div className="Dia11">
            <div className="D11_square">
                <span>Integrantes totais no squad:</span>
                <span>{number}</span>
                <div className="D11_button_area">
                    <button onClick={() => {addNumber()}}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}