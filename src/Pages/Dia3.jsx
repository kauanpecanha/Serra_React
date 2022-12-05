import React from "react"
import Header from "../Components/Header/Header"
import Footer from "../Components/Footer/Footer"
import Card from "../Components/D3_Card/Card"


import "./styles/Dia3.css"

const Dia3 = () => {
    return(
        <div className="Dia3">
            <Header title="Então" back="#A50010" color="white"></Header>

            <div className="cardAreas">
                <Card title="Kauan" age={18} team="Flamengo" lastName = "Peçanha"/> 
                <Card title="Davi" age={19} team="Fluminense" lastName = "Mathias"/> 
                <Card title="Victor" age={19} team="Vasco" lastName = "Antunes"/> 
            </div>
            <Footer title="Serra Jr. Engenharia - Copyright All Rights Reserved" back="#A50010" color="white"></Footer>
        </div>
    )
}

export default Dia3;