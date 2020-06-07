import React from 'react';
import styles from './DropDownMenu.module.css';
import { NavLink } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import MenDropMenu from './MenDropMenu/MenDropMenu';
import WomenDropMenu from './WomenDropMenu/WomenDropMenu';

const DropDownMenu = (props) => {
  return (
    <li className={styles.dropDownMenu}>
      <Icon name='angle double down' />&nbsp;Каталог товаров
      <ul>
        <MenDropMenu className={styles.item} />
        <WomenDropMenu className={styles.item} />
        <li className={styles.item}>
          <NavLink to="/kids-home" activeClassName={styles.activeLink}>Детям</NavLink>
        </li>
      </ul>
    </li>
  );
}

export default DropDownMenu;