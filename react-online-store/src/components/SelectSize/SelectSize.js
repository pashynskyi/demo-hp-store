import React from 'react';
import { Menu } from 'semantic-ui-react';
import styles from './SelectSize.module.css';


const SelectSize = (props) => {
  let newProductSizes = props.splitProductSizes.map((item, index) => (
    <Menu className={styles.listSize} style={{ margin: 0 }} secondary key={index}>
      <Menu.Item
        active={props.productSize === item}
        onClick={props.setSize.bind(this, item)}>{item}</Menu.Item>
    </Menu>
  ));

  return (
    <>
      {newProductSizes}
    </>
  )
}

export default SelectSize;