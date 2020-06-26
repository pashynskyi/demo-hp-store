import React from "react";
import styles from "./ProfileInfo.module.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const ProfileInfo = ({ userProfile, resetUser, clearUserProfile }) => {

  const onResetUser = () => {
    resetUser();
    clearUserProfile();
    delete localStorage.rememberMe;
    delete localStorage.email;
    delete localStorage.password;
  }

  return (
    <div>
      <div>
        <div>Имя и фамилия:&nbsp;<span>{userProfile.name}</span></div>
        <div>Логин:&nbsp;<span>{userProfile.email}</span></div>
        <div>Мобильный телефон:&nbsp;<span>{userProfile.phone}</span></div>
        <div>Город:&nbsp;<span>{userProfile.city}</span></div>
        <div>Адрес:&nbsp;<span>{userProfile.address}</span></div>
      </div>
      <div>
        <NavLink to='/profileEdit'>
          <Button variant="secondary">Редактировать профиль</Button>
        </NavLink>
      </div>
      <div>
        <Button variant="danger" onClick={onResetUser}>Выйти из профиля</Button>
      </div>
    </div>

  );
}

export default ProfileInfo;