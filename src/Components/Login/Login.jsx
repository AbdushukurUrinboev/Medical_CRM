import React from "react";
import { Link, useNavigate } from 'react-router-dom'


import './CSS/login.css'

export default function Login() {

    const navigate = useNavigate();

    return (
        <div className="loginBg">
            <div className="login">
                <h1>Войти как:</h1>
                <button className="hvr-float-shadow" onClick={() => navigate('/registrate')}>Пациент</button>
                <button className="hvr-float-shadow" onClick={() => navigate('/doctorLogin')}>Врач</button>
                <button className="continue hvr-float-shadow" onClick={() => navigate('/')}>назад</button>
                <h3>© 2023 All rights reserved</h3>
            </div>
        </div>
    )
}