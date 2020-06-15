import React from "react";
import styles from "./LoginReduxForm.module.css";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Логин:</div>
        <Field
          className={styles.field}
          name="username"
          component={Input}
          type="email"
          validate={[required, maxLength50]}
          placeholder="Эл. почта" />
      </div>
      <div className={styles.fieldContainer}>
        <div className={styles.titleField}>Пароль:</div>
        <Field
          className={styles.field}
          name="password"
          component={Input}
          type="password"
          validate={[required, maxLength50]}
          placeholder="Пароль" />
      </div>
      <div>
        <button>Авторизироваться</button>
      </div>
    </form>
  );
}

export const LoginReduxForm = reduxForm({ form: 'order' })(LoginForm);