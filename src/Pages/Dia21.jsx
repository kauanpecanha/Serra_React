import React from 'react'
import '../Pages/styles/Dia21.css'
import D21_square from '../Components/D21_square/D21_square'

export default function Dia21(){
    return(
        <div className="dia21">
            <div className="D21_title">
                    <h2>Serra Calculator</h2>
            </div>
            <div className="D21_squares_area">
                <D21_square />
            </div>
        </div>
    )
}