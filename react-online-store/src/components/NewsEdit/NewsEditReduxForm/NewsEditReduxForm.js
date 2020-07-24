import React from 'react';
import styles from './NewsEditReduxForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Input, Textarea } from '../../../common/FormsControls/FormsControls';
import { Button } from 'react-bootstrap';

const maxLength1000 = maxLengthCreator(1000);
const maxLength255 = maxLengthCreator(255);

export const NewsEditForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Photo Link:</div>
        <Field
          className={styles.field}
          name="mainPictureUrl"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="photo link" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Photo Link2:</div>
        <Field
          className={styles.field}
          name="pictureUrl2"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="photo link2" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Photo Link3:</div>
        <Field
          className={styles.field}
          name="pictureUrl3"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="photo link3" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Photo Link4:</div>
        <Field
          className={styles.field}
          name="pictureUrl4"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="photo link4" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Photo Link5:</div>
        <Field
          className={styles.field}
          name="pictureUrl5"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="photo link5" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Title:</div>
        <Field
          className={styles.field}
          name="title"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
          placeholder="title" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Subtitle:</div>
        <Field
          className={styles.field}
          name="subtitle"
          component={Textarea}
          type="text"
          validate={[required, maxLength255]}
          placeholder="subtitle" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Text:</div>
        <Field
          className={styles.field}
          name="text"
          component={Textarea}
          type="text"
          validate={[required, maxLength1000]}
          placeholder="text" />
      </div>
      <div>
        <Button type='submit'>Редактировать товар</Button>
      </div>
    </form>
  );
}

export const NewsEditReduxForm = reduxForm({ form: 'newsEdit' })(NewsEditForm);