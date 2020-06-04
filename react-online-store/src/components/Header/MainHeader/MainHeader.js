import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';

const MainHeader = (props) => {
    return (
        <div className={styles.mainHeader}>
            <NavLink to="/">
                <img className={styles.logo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcNurU9q7WboAKBkKiBTcFbP2yv3Lgo3VBe7POHzhI1uWoqIJ2&usqp=CAU"
                    alt="" />
            </NavLink>
            <h3>This is the main header!</h3>
            <NavLink to="/client-account/login">
                <span>Client Account</span>
            </NavLink>
            <NavLink to="/cart">
                <h3>Cart <span className={styles.count}>{props.totalCount}</span></h3>
                
            </NavLink>
        </div>
    );
}

export default MainHeader;