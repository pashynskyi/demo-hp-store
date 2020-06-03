import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/'
})

export const productsAPI = {
  getMenTShirts() {
    return instance.get('collection/men-home/t-shirts')
      .then(response => {
        return response.data;
      });
  },
  getMenShirts() {
    return instance.get('collection/men-home/shirts')
      .then(response => {
        return response.data;
      });
  }
}

