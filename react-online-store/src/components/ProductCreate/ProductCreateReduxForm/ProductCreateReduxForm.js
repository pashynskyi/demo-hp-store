import React from 'react';
import styles from './ProductCreateReduxForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator, minValue, maxValue } from '../../../utils/validators/validators';
import { Input, Select } from '../../../common/FormsControls/FormsControls';
import { Button } from 'react-bootstrap';

const maxLength1000 = maxLengthCreator(1000);
const maxLength255 = maxLengthCreator(255);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);
const minValue0 = minValue(0);
const minValue1 = minValue(1);
const maxValue100 = maxValue(100);

export const ProductCreateForm = ({ handleSubmit, productCreate }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Pruduct id:</div>
        <Field
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
        <div className={styles.titleField}>Category type:</div>
        <Field
          className={styles.field}
          name="categoryType"
          component={Select}
          validate={[required]} >
          <option value="">Select type</option>
          <option value="men-home">Man</option>
          <option value="women-home">Woman</option>
        </Field>
      </div>
      {!productCreate ? undefined
        : !productCreate.values ? undefined
          : productCreate.values.categoryType === "men-home" ?
            <div className={styles.fieldContainer}>
              <div className={styles.titleField}>Product type:</div>
              <Field
                className={styles.field}
                name="productType"
                component={Select}
                validate={[required]} >
                <option value="">Select type</option>
                <option value="t-shirts">T-shirt</option>
                <option value="shirts">Shirt</option>
                <option value="jeans">Jeans</option>
                <option value="shorts">Short</option>
                <option value="jackets">Jacket</option>
              </Field>
            </div>
            : productCreate.values.categoryType === "women-home" ?
              <div className={styles.fieldContainer}>
                <div className={styles.titleField}>Product type:</div>
                <Field
                  className={styles.field}
                  name="productType"
                  component={Select}
                  validate={[required]} >
                  <option value="">Select type</option>
                  <option value="t-shirts">T-shirt</option>
                  <option value="shorts">Short</option>
                  <option value="hoodies">Hoodie</option>
                  <option value="skirts">Skirt</option>
                  <option value="dresses">Dress</option>
                </Field>
              </div>
              : undefined}
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Description:</div>
        <Field
          className={styles.field}
          name="productDescription"
          component={Input}
          type="text"
          validate={[required, maxLength255]}
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
        <div className={styles.titleField}>Short Information:</div>
        <Field
          className={styles.field}
          name="productShortInformation"
          component={Input}
          type="text"
          validate={[required, maxLength1000]}
          placeholder="short information" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Sizes:</div>
        <Field
          className={styles.field}
          name="productSizes"
          component={Input}
          type="text"
          validate={[required, maxLength20]}
          placeholder="S, M, L, XL" />
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
        <div className={styles.titleField}>Discount:</div>
        <Field
          className={styles.field}
          name="productDiscount"
          component={Input}
          type="number"
          validate={[required, maxLength20, minValue0, maxValue100]}
          placeholder="discount" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Stock:</div>
        <Field
          className={styles.field}
          name="productStock"
          component={Input}
          type="number"
          validate={[required, minValue1]}
          placeholder="stock" />
      </div>
      <div>
        <Button type='submit'>Create product</Button>
      </div>
    </form>
  );
}

export const ProductCreateReduxForm = reduxForm({ form: 'productCreate' })(ProductCreateForm);