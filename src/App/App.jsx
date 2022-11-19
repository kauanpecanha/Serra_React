import React from "react";
import Menu from '../Menu&Content/Menu'
import Content from '../Menu&Content/Content'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "../Pages/Home";

export default function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Menu />
                <Content />
            </BrowserRouter>
        </div>
    )
}