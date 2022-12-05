import React from 'react'
import './D21_square.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function D21_square(props) {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [result, setResult] = useState(0)

    function operators(n1, n2, code) {
        if (code === 1) {
            const num1 = parseInt(n1);
            const num2 = parseInt(n2);

            return (num1 + num2)
        }
        if (code === 2) {
            const num1 = parseInt(n1);
            const num2 = parseInt(n2);

            return (num1 - num2)
        }
        if (code === 3) {
            const num1 = parseInt(n1);
            const num2 = parseInt(n2);

            return (num1 * num2)
        }
        else {
            const num1 = parseInt(n1);
            const num2 = parseInt(n2);

            return (n1 / n2)
        }
    }

    useEffect(function () {
        setResult(operators(n1, n2, props.code))
    }, [n1, n2])


    const titulo = props.title;

    
    return (
        <div className="square">
            <h3>{titulo}</h3>
            <div className="square_content">
                <div className="square_content_data">
                    <span>Número 1</span>
                    <input type={"number"} value={n1} onChange={e => setN1(e.target.value)}></input>
                </div>
                <div className="square_content_data">
                    <span>Número 2</span>
                    <input type={"number"} value={n2} onChange={e => setN2(e.target.value)}></input>
                </div>
                <div className="square_content_data">
                    <span>Resultado</span>
                    <div className="resultado">{result}</div>
                </div>
            </div>
        </div>
    )
}