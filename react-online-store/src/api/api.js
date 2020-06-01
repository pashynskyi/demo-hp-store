import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/'
})

export const productsAPI = {
  getMenTShirts() {
    return instance.get('collection/men-home/T-Shirts')
      .then(response => {
        return response.data;
      });
  }
}

