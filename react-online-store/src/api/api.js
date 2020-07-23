import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8000/'
  // baseURL: 'https://hp-store-api.herokuapp.com/'
  // baseURL: 'https://hp-store-test.herokuapp.com/'
})

const principal = (token) => {
  return { headers: { "Authorization": `Bearer ${token}` } }
}


export const productsAPI = {
  getProducts(categoryType, productType, currentPage, pageSize, sortBy) {
    return instance.get(`collection/${categoryType}/${productType}?page=${currentPage}&size=${pageSize}&sort=${sortBy}`)
      .then(response => {
        return response.data;
      });
  },
  getSelectedProduct(productId) {
    return instance.get(`collection/product/${productId}`)
      .then(response => {
        return response.data;
      });
  }
}

export const authAPI = {
  login(email, password, rememberMe) {
    return instance.post('login', { email, password, rememberMe })
      .then(response => {
        return response.data
      })
  }
}

export const cartAPI = {
  postToCart(productId, productSize, token) {
    return instance.post('cart/add', { productId, productSize, quantity: 1 }, principal(token))
      .then(response => {
        return response.data;
      });
  },
  deleteFromCart(productId, token) {
    return instance.delete(`cart/${productId}`, principal(token))
      .then(response => {
        return response.data;
      });
  },
  getCart(token) {
    return instance.get('cart', principal(token))
      .then(response => {
        return response.data;
      })
  },
  putCurrentQuantity(productId, quantity, token) {
    return instance.put(`cart/${productId}`, { quantity }, principal(token))
      .then(response => {
        return response.data;
      })
  },
}

export const profileAPI = {
  getProfile(email, token) {
    return instance.get(`profile/${email}`, principal(token))
      .then(response => {
        return response.data;
      });
  },
  editProfile(profileEditData, token) {
    return instance.put('profile', { ...profileEditData }, principal(token))
      .then(response => {
        return response.data;
      })
  },
  getOrders(token) {
    return instance.get('order', principal(token))
      .then(response => {
        console.log(response.data.content)
        return response.data.content;
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
        return response.data;
      });
  },
  postCheckout(token) {
    return instance.post('cart/checkout', {}, principal(token))
      .then(response => {
        return response.data;
      })
  },
}

export const adminAPI = {
  postProduct(product, token) {
    const productStatus = 1;
    return instance.post('admin/product/new', { ...product, productStatus }, principal(token))
      .then(response => {
        return response;
      });
  },
  putProduct(product, token) {
    return instance.put(`admin/product/${product.productId}/edit`, { ...product }, principal(token))
      .then(response => {
        return response;
      });
  },
  deleteProduct(productId, token) {
    return instance.delete(`admin/product/${productId}/delete`, principal(token))
      .then(response => {
        return response;
      });
  },
  postNews(news, token) {
    return instance.post('admin/news/new', { ...news }, principal(token))
      .then(response => {
        return response;
      });
  },
  putNews(news, token) {
    return instance.put(`admin/news/${news.newsId}/edit`, { ...news }, principal(token))
      .then(response => {
        return response;
      });
  },
  deleteNews(newsId, token) {
    return instance.delete(`admin/news/${newsId}/delete`, principal(token))
      .then(response => {
        return response;
      });
  },
}

export const newsAPI = {
  getNews() {
    return instance.get('news')
      .then(response => {
        return response.data;
      });
  },
  getSelectedNews(newsId) {
    return instance.get(`news/${newsId}`)
      .then(response => {
        return response.data;
      });
  }
}

