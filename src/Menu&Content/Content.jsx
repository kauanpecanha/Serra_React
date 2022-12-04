import React from "react";
import './Content.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Dia1 from '../Pages/Dia1'
import Dia11 from '../Pages/Dia11'
import Dia2 from '../Pages/Dia2'
import Dia21 from '../Pages/Dia21'
import Dia3 from '../Pages/Dia3'
import Dia31 from '../Pages/Dia31'

export default function Content(){
    return(
        <main className="Content">
            <Routes>
                <Route path = "/" exact element = {<Home />}/>
                <Route path = "/dia1" element = {<Dia1 />}/>

                <Route path = "/dia11" element = {<Dia11 />}/>

                <Route path = "/dia2" element = {<Dia2 />}/>

                <Route path = "/dia21" element = {<Dia21 />}/>
                
                <Route path = "/dia3" element = {<Dia3 />}/>
            </Routes>            
        </main>
    )
}