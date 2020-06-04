import * as axios from 'axios';

const instance = axios.create({
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
  },
}

