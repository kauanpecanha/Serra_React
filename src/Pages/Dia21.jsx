import React from 'react'
import '../Pages/styles/Dia21.css'
import D21_square from '../Components/D21_square/D21_square'

export default function Dia21(){
    return(
        <div className="dia21">
            <div className="D21_title">
                    <h1>Serra Calculator</h1>
            </div>
            <div className="D21_squares_area">
                <D21_square title = "Soma" code = {1}/>
                <D21_square title = "Subtração" code = {2}/>
                <D21_square title = "Multiplicação" code = {3}/>
                <D21_square title = "Divisão" code = {4}/>
            </div>
        </div>
    )
}