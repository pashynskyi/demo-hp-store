import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);

const CheckoutForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>Эл. почта:
        <Field name="email"
          component={Input}
          type="email"
          validate={[required, maxLength50,]}
          placeholder="Эл. почта" />
      </div>
      <div>Имя и фамилия:
        <Field name="name"
          component={Input}
          type="text"
          validate={[required, maxLength100,]}
          placeholder="Имя и фамилия" />
      </div>
      <div>Мобильный телефон:
        <Field name="phone"
          component={Input}
          type="text"
          validate={[required, maxLength20,]}
          placeholder="Мобильный телефон" />
      </div>
      <div> Адрес:
        <Field name="address"
          component={Input}
          type="text"
          validate={[required, maxLength50,]}
          placeholder='Город, № отделение "Нова пошта"' />
      </div>
      <div>
        <button>Отправить заказ</button>
      </div>
    </form>
  );
}

export const CheckoutReduxForm = reduxForm({ form: 'order' })(CheckoutForm)