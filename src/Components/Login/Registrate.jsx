import React from "react";
import './CSS/login.css'

<style>{{"backgroundColor" : 'red'}}</style>


export default function Registrate() {
    return (
        <div className="loginBg">
            <div className="registrate">
                <h1>Регистрация</h1>
                <span>Фамилию</span>
                <input className="w-100 mb-2 " placeholder="Введите Фамилию" type="text" />
                <br />
                <span>Имя</span>
                <input className="w-100 mb-2 " placeholder="Введите Имя" type="text" />
                <br />
                <span>Отчество</span>
                <input className="w-100 mb-2 " placeholder="Введите Отчество" type="text" />
                <br />
                <span>Дата рождения</span>
                <input className="w-100 mb-2 " placeholder="Введите дата рождения" type="date" />
                <br />
                <span>Номер телефона</span>
                <input className="w-100 mb-2 " placeholder="Введите номер телефона" type="text" />
                <br />
                <span>Электроной почты</span>
                <input className="w-100 mb-2 " placeholder="Введите аддрес электроной почты" type="text" />
                <br />
                <span>Пароль</span>
                <input className="w-100 mb-2 " placeholder="Введите Пароль" type="text" />
                <br />
                <span>Повторите пароль </span>
                <input className="w-100 mb-2 " placeholder="Введите пароль повторно" type="text" />

                <h5>Выберите пол:</h5>
                <input className="form-check-input m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    Мужчина
                </label>

                <input className="form-check-input m-1" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                <label className="form-check-label" for="flexRadioDefault2">
                    Женщина
                </label>

                <button className="continue hvr-float-shadow">продолжить</button>
            </div>
        </div>
    )
}