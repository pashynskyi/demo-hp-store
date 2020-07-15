import React from 'react';
import styles from './LoginReduxForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators/validators';
import { Input } from '../../../common/FormsControls/FormsControls';
import { Button } from 'react-bootstrap';

const maxLength50 = maxLengthCreator(50);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.fieldContainer}>
        <span className={styles.titleField}>Логин:</span>
        <Field
          className={styles.field}
          name="email"
          component={Input}
          type="email"
          validate={[required, maxLength50]}
          placeholder="Эл. почта" />
      </div>
      <div className={styles.fieldContainer}>
        <span className={styles.titleField}>Пароль:</span>
        <Field
          className={styles.field}
          name="password"
          component={Input}
          type="password"
          validate={[required, maxLength50]}
          placeholder="Пароль" />
      </div>
      <div className={`${styles.fieldContainer} ${styles.checkboxContainer}`}>
        <label>
          <Field name="rememberMe" component={"input"} type={"checkbox"} />
          <span>&nbsp;Запомнить меня</span>
        </label>
      </div>
      <div>
        <Button type='submit'>Авторизироваться</Button>
      </div>
    </form>
  );
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);