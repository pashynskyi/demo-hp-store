import React from 'react';
import styles from './RevealProductPhoto.module.css';
import { Image, Reveal, Icon } from 'semantic-ui-react';

const RevealProductPhoto = ({ pictureUrl, pictureUrl2, productDiscount }) => (
  <React.Fragment>
    <Reveal className={styles.photoContainer} animated='move down' >
      <Reveal.Content visible>
        {productDiscount !== 0 &&
          <div className={styles.iconContainer}>
            <Icon name='certificate' size='huge' color='red' />
            <span className={styles.discountNumber}>{productDiscount}%</span>
          </div>
        }
        <Image className={styles.productPhoto} src={pictureUrl} size='small' />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image className={styles.productPhoto} src={pictureUrl2} size='small' centered />
      </Reveal.Content>
    </Reveal>
  </React.Fragment>
)

export default RevealProductPhoto;