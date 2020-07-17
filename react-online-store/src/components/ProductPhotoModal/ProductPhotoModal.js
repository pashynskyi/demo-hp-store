import React from 'react';
import { Image, Modal, Icon } from 'semantic-ui-react';
import styles from './ProductPhotoModal.module.css';

const ProductPhotoModal = ({pictureUrl}) => (
  <Modal className={styles.modalContainer} size="tiny" trigger={<Icon className={styles.zoomIcon} name="zoom-in" size="huge"/>}>
    <Modal.Content image>
      <Image wrapped size='big' src={pictureUrl} />
    </Modal.Content>
  </Modal>
)

export default ProductPhotoModal;
