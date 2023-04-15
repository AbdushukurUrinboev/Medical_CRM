import React from "react";
import {Link} from 'react-router-dom'


import './CSS/login.css'

export default function Login() {
    return (
        <div className="loginBg">
            <div className="login">
                <h1>Войти как:</h1>
                <Link to='/registrate'><button>Пациент</button></Link>
                <button>Врач</button>
                <h3>© 2023 All rights reserved</h3>
            </div>
        </div>
    )
}