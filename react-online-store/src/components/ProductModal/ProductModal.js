import React from 'react';
import { Image, Modal, Icon } from 'semantic-ui-react';
import styles from './ProductModal.module.css';

const ProductModal = (props) => (
  <Modal className={styles.modalContainer} size="tiny" trigger={<Icon className={styles.zoomIcon} name="zoom-in" size="huge"/>}>
    <Modal.Content image>
      <Image wrapped size='big' src={props.pictureUrl} />
    </Modal.Content>
  </Modal>
)

export default ProductModal;
