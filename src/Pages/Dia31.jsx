import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import "../Pages/styles/Dia31.css"

import { useState } from "react"

const Dia31 = () => {
    
    const [vis, setVis] = useState(true);

    function visibility(){
        setVis(!vis);
    }
    
    return (
        <div className="Dia31">
            <Header title="Então" back="#A50010" color="white"></Header>

            <div className="content">
                { vis?
                    <div className="top-card">
                        <h3>Serra Jr. Engenharia</h3>
                        <img src={require("../Assets/serraLogo.png")}></img>
                    </div>
                    :
                    <div className="top-card" style={{opacity: 0}}>
                        <h3>Serra Jr. Engenharia</h3>
                        <img src={require("../Assets/serraLogo.png")}></img>
                    </div>
                }
                <button onClick={() => {visibility()}}>Revelar/Esconder logo</button>
            </div>

            <Footer title="Serra Jr. Engenharia - Copyright All Rights Reserved" back="#A50010" color="white"></Footer>
        </div>
    )
}

export default Dia31;