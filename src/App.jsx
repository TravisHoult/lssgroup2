//import { useState } from 'react'
//import React from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from './components/Header';


function App() {
    return (
        <>
            <Router>
                <Header />
            </Router>
        </>
    );
}

export default App;