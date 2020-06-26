import React from "react";
import styles from "./ProfileEditReduxForm.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";
import { Button } from "react-bootstrap";

const maxLength100 = maxLengthCreator(100);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);

export const ProfileEditForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Логин:</div>
        <Field
          disabled
          className={styles.field}
          name="email"
          component={Input}
          type="text"
          validate={[required, maxLength50]}
          placeholder="Логин" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Имя и фамилия:</div>
        <Field
          className={styles.field}
          name="name"
          component={Input}
          type="text"
          validate={[required, maxLength50]}
          placeholder="Имя и фамилия" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Мобильный телефон:</div>
        <Field
          className={styles.field}
          name="phone"
          component={Input}
          type="text"
          validate={[required, maxLength20,]}
          placeholder="Телефон" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Город:</div>
        <Field
          className={styles.field}
          name="city"
          component={Input}
          type="text"
          validate={[required, maxLength50]}
          placeholder="Город" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Адрес:</div>
        <Field
          className={styles.field}
          name="address"
          component={Input}
          type="text"
          validate={[required, maxLength50]}
          placeholder="Адрес" />
      </div>
      <div>
        <Button type='submit'>Обновить профиль</Button>
      </div>
    </form>
  );
}

export const ProfileEditReduxForm = reduxForm({ form: 'profileEdit' })(ProfileEditForm);