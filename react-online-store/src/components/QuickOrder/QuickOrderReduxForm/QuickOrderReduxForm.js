import React from "react";
import styles from "./QuickOrderReduxForm.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator, phoneNumber } from "../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";
import { Button } from "react-bootstrap";

const maxLength100 = maxLengthCreator(100);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);

const QuickOrderForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Эл. почта:</div>
        <Field
          className={styles.field}
          name="email"
          component={Input}
          type="email"
          validate={[required, maxLength50,]}
          placeholder="Эл. почта" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Имя и фамилия:</div>
        <Field
          className={styles.field}
          name="name"
          component={Input}
          type="text"
          validate={[required, maxLength100,]}
          placeholder="Имя и фамилия" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Мобильный телефон:</div>
        <Field
          className={styles.field}
          name="phone"
          component={Input}
          type="text"
          validate={[required, maxLength20, phoneNumber]}
          placeholder="Мобильный телефон" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Город:</div>
        <Field
          className={styles.field}
          name="city"
          component={Input}
          type="text"
          validate={[required, maxLength50,]}
          placeholder='Город' />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Адрес:</div>
        <Field
          className={styles.field}
          name="address"
          component={Input}
          type="text"
          validate={[required, maxLength50,]}
          placeholder='Адрес' />
      </div>
      <div>
      <Button variant='success' type='submit'>Отправить заказ</Button>
      </div>
    </form>
  );
}

export const QuickOrderReduxForm = reduxForm({ form: 'order' })(QuickOrderForm)