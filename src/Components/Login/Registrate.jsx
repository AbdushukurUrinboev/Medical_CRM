import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mijos } from "../Mijozlar";

import './CSS/login.css'

export default function Registrate() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [gmail, setGmail] = useState('');
    const [passwrod, setPassword] = useState('');
    const [repeatPas, setRepeatPas] = useState('')
    const [gender, setGender] = useState('')

    function saveInfo() {
        mijos.push({
            id: 1,
            username,
            name,
            lastName,
            date,
            phone,
            gmail,
            passwrod,
            repeatPas,
            gender
        })
    }

    return (
        <div className="loginBg">
            <div className="registrate">
                <h1>Регистрация</h1>
                <span>Фамилию</span>
                <input className="w-100 mb-2 " onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Введите Фамилию" type="text" />
                <br />
                <span>Имя</span>
                <input className="w-100 mb-2 " onChange={(e) => setName(e.target.value)} value={name} placeholder="Введите Имя" type="text" />
                <br />
                <span>Отчество</span>
                <input className="w-100 mb-2 " onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Введите Отчество" type="text" />
                <br />
                <span>Дата рождения</span>
                <input className="w-100 mb-2 " onChange={(e) => setDate(e.target.value)} value={date} placeholder="Введите дата рождения" type="date" />
                <br />
                <span>Номер телефона</span>
                <input className="w-100 mb-2 " onChange={(e) => setPhone(e.target.value)} value={phone} placeholder="Введите номер телефона" type="number" />
                <br />
                <span>Электроной почты</span>
                <input className="w-100 mb-2 " onChange={(e) => setGmail(e.target.value)} value={gmail} placeholder="Введите аддрес электроной почты" type="text" />
                <br />
                <span>Пароль</span>
                <input className="w-100 mb-2 " onChange={(e) => setPassword(e.target.value)} value={passwrod} placeholder="Введите Пароль" type="text" />
                <br />
                <span>Повторите пароль </span>
                <input className="w-100 mb-2 " onChange={(e) => setRepeatPas(e.target.value)} value={repeatPas} placeholder="Введите пароль повторно" type="text" />

                <h5>Выберите пол:</h5>
                <input onClick={() => setGender('Мужчина')} className="form-check-input m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Мужчина
                </label>

                <input onClick={() => setGender('Женщина')} className="form-check-input m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Женщина
                </label>

                <div style={{ textAlign: 'end' }}>
                    <button className="continue hvr-float-shadow" onClick={() => navigate('/login')}>назад</button>
                    <button className="continue hvr-float-shadow" onClick={() => saveInfo()}>продолжить</button>
                </div>
            </div>
        </div>
    )
}