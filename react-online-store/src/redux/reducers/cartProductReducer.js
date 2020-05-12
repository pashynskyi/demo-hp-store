const ADD_CART_PRODUCTS = 'ADD_CART_PRODUCTS';

let initialState = {
    cartProducts: [
        {
            id: 1, photoUrl: 'https://a.lmcdn.ru/img600x866/C/E/CE007EMEEYI7_8127112_1_v45.jpg', price: '499 грн',
            firm: 'Pal Lizeri', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
    ],
};

const cartProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CART_PRODUCTS: {
            return { ...state, cartProducts: [...state.cartProducts, ...action.cartProducts] }
        }
        default:
            return state;
    }
}

export const addCartProductsAC = (cartProducts) => ({ type: ADD_CART_PRODUCTS, cartProducts })

export default cartProductReducer;