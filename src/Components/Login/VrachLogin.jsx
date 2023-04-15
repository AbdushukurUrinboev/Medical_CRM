import React from "react";
import { Link, useNavigate } from 'react-router-dom'


import './CSS/login.css'

export default function DoctorLogin() {

    const navigate = useNavigate();

    return (
        <div className="loginBg">
            <div className="login">
                <h1>Введите пароль:</h1>
                <input type="password" className="form-control mt-0 mb-5" placeholder="password"/>
                <h5>Введите пароль котроый вам предаставить глав.врач больницы</h5>
                <button className="hvr-float-shadow mt-5 mb-1" onClick={() => navigate('/registrate')}>Продолжить</button>
                <button className="continue hvr-float-shadow" onClick={() => navigate('/login')}>назад</button>
                <h3>© 2023 All rights reserved</h3>
            </div>
        </div>
    )
}