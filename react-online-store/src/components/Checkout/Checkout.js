import React from "react";
import { reduxForm, Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100);
const maxLength50 = maxLengthCreator(50);
const maxLength20 = maxLengthCreator(20);

const CheckoutForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>Имя и фамилия:
        <Field name="fullName"
          component={Input}
          type="text"
          validate={[ required, maxLength100,]}
          placeholder="Имя и фамилия" />
      </div>
      <div>Мобильный телефон:
        <Field name="phone"
          component={Input}
          type="text"
          validate={[ required, maxLength20,]}
          placeholder="Мобильный телефон" />
      </div>
      <div>Эл. почта:
        <Field name="email"
          component={Input}
          type="email"
          validate={[ required, maxLength50,]}
          placeholder="Эл. почта" />
      </div>
      <div>Город:
        <Field name="city"
          component={Input}
          type="text"
          validate={[ required, maxLength50,]}
          placeholder="Город" />
      </div>
      <div> Адрес:
        <Field name="street"
          component={Input}
          type="text"
          validate={[ required, maxLength50,]}
          placeholder="Улица" />
        <Field name="house"
          component={Input}
          type="text"
          validate={[ required, maxLength20,]}
          placeholder="Дом" />
        <Field name="apartment"
          component={Input}
          type="text"
          validate={[ required, maxLength20,]}
          placeholder="Квартира" />
      </div>
      <div>
        <button>Отправить заказ</button>
      </div>
    </form>
  );
}

const CheckoutReduxForm = reduxForm({ form: 'order' })(CheckoutForm)

const Checkout = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <div>
      <h1>Оформление заказа</h1>
      <CheckoutReduxForm onSubmit={onSubmit} />
    </div>
  );
}

export default Checkout;