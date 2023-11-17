//import React, { useState, useEffect } from 'react';
import "./styles/header.css";
import { NavLink } from "react-router-dom";
//import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="name">
                <h2>Generador de rutas</h2>
                <h4>App IoT</h4>
            </div>
            <nav className="headerMenu">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/mapa">Mapa</NavLink>
                <NavLink to="/rutas">Rutas</NavLink>
            </nav>
            <div className="buttonMenu" />
        </header>
    )
}