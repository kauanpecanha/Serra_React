import React from "react";
import './Content.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Dia1 from '../Pages/Dia1'

export default function Content(){
    return(
        <main className="Content">
            <Routes>
                <Route path = "/" exact element = {<Home />}/>
                <Route path = "/dia1" element = {<Dia1 />}/>
            </Routes>            
        </main>
    )
}