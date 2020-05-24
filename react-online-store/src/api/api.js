import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/'
})

export const productsAPI = {
  getProducts() {
    return instance.get(`collection`)
      .then(response => {
        return response.data;
      });
  },
}