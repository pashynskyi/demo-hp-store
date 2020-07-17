import React from 'react';
import styles from './RevealProductPhoto.module.css';
import { Image, Reveal } from 'semantic-ui-react';

const RevealProductPhoto = ({ pictureUrl, pictureUrl2 }) => (
  <Reveal className={styles.photoContainer} animated='move down' >
    <Reveal.Content visible>
      <Image className={styles.productPhoto} src={pictureUrl} size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image className={styles.productPhoto} src={pictureUrl2} size='small' centered />
    </Reveal.Content>
  </Reveal>
)

export default RevealProductPhoto;