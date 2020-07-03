import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const MainHeader = (props) => {
  return (
    <div className={styles.mainHeader}>
      <NavLink to="/">
        <div className={styles.logoContainer}>
          <img className={styles.logo}
            src="https://dcassetcdn.com/design_img/3573933/657184/657184_19570102_3573933_d2726753_image.jpg"
            alt="" />
        </div>
      </NavLink>
      <div className={styles.title}>
        <h2>This is the main header!</h2>
      </div>
      <div className={styles.contacts}>
        <div><Icon name='phone' />+380804626648</div>
        <div><Icon name='phone' />+380804626659</div>
      </div>
      <div className={styles.userIconContainer}>
        <NavLink to="/profile">
          <Icon name='user circle' size='big' />
          {!props.isAuth &&
            <span>Client account</span>
          }
          {props.isAuth &&
            <span>{props.userName}</span>
          }
        </NavLink>
      </div>
      <div className={styles.cartIconContainer}>
        <NavLink to="/cart">
          <Icon name='cart' size='big' />
          {props.totalCount >= 1 &&
            <span className={styles.count}>{props.totalCount}</span>
          }
        </NavLink>
      </div>
    </div>
  );
}

export default MainHeader;