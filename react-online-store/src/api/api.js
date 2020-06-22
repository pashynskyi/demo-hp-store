import * as axios from 'axios';
import { forEach } from 'lodash';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/'
})

const principal = (token) => {
  return { headers: { "Authorization": `Bearer ${token}` } }
}


export const productsAPI = {
  getMenProducts(type) {
    return instance.get(`collection/men-home/${type}`)
      .then(response => {
        return response.data;
      });
  },
  getWomenProducts(type) {
    return instance.get(`collection/women-home/${type}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  login(email, password, rememberMe) {
    return instance.post('login', { email, password, rememberMe })
  }
}

export const cartAPI = {
  postToCart(productId, productSize, token) {
    return instance.post('cart/add', { productId, productSize, quantity: 1 }, principal(token))
      .then(response => {
        return response.data;
      });
  },
  getCart(token) {
    return instance.get('cart', principal(token))
      .then(response => {
      response.data.products.forEach(element => console.log(element.productId, element.productPrice))
        return response.data;
      })
  },
  putCurrentQuantity(productId, quantity, token) {
    return instance.put(`cart/${productId}`, { quantity }, principal(token))
  }
}

export const profileAPI = {
  getProfile(email, token) {
    return instance.get(`profile/${email}`, principal(token))
      .then(response => {
        return response.data;
      });
  }
}

export const registerAPI = {
  register(registerData) {
    let active = true;
    let role = "ROLE_CUSTOMER";
    return instance.post(`register`, { ...registerData, active, role })
      .then(response => {
        return response;
      });
  }
}

export const orderAPI = {
  postQuickOrder(products, quickOrderForm, totalPrice) {
    return instance.post('quickOrder', { products, ...quickOrderForm, totalPrice })
      .then(response => {
        return response;
      });
  }
}


