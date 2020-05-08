import React from "react";
import styles from "./ClientAccount.module.css";
import { NavLink } from "react-router-dom";

const ClientAccount = () => {
    return (
        <div>
            <h1>Вход в кабинет покупателя</h1>
            <div>
                <input type="email" placeholder="Введите: E-mail" />
            </div>
            <div>
                <input type="password" placeholder="Введите: password" />
            </div>
            <div>
                <NavLink to="/client-account/register">Зарегистрироваться</NavLink>
            </div>
        </div>
    );
}

export default ClientAccount;