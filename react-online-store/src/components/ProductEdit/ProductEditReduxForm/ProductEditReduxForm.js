import React from 'react';
import styles from './ProductEditReduxForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator, minValue } from '../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/FormsControls';
import { Button } from 'react-bootstrap';

const maxLength200 = maxLengthCreator(200);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);
const minValue0 = minValue(0);
const minValue1 = minValue(1);

export const ProductEditForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Pruduct id:</div>
        <Field
          disabled
          className={styles.field}
          name="productId"
          component={Input}
          type="text"
          validate={[required, maxLength50]}
          placeholder="product id" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Photo Link:</div>
        <Field
          className={styles.field}
          name="pictureUrl"
          component={Input}
          type="text"
          validate={[required, maxLength200]}
          placeholder="photo link" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Price:</div>
        <Field
          className={styles.field}
          name="productPrice"
          component={Input}
          type="number"
          validate={[required, maxLength20, minValue1]}
          placeholder="price" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Description:</div>
        <Field
          className={styles.field}
          name="productDescription"
          component={Input}
          type="text"
          validate={[required, maxLength200]}
          placeholder="description" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Material:</div>
        <Field
          className={styles.field}
          name="productMaterial"
          component={Input}
          type="text"
          validate={[required, maxLength50]}
          placeholder="material" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Stock:</div>
        <Field
          className={styles.field}
          name="productStock"
          component={Input}
          type="number"
          validate={[required, minValue0]}
          placeholder="stock" />
      </div>
      <div>
        <Button type='submit'>Редактировать товар</Button>
      </div>
    </form>
  );
}

export const ProductEditReduxForm = reduxForm({ form: 'productEdit' })(ProductEditForm);