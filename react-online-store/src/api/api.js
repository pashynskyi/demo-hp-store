import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/'
})

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
  },
}

export const profileAPI = {
  getProfile(email, token) {
    return instance.get(`profile/${email}`, { headers: { "Authorization": `Bearer ${token}` } })
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
    return instance.post('quickOrder', { products, quickOrderForm, totalPrice })
      .then(response => {
        return response;
      });
  }
}

