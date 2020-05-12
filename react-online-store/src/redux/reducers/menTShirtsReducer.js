const SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    products: [
        {
            id: 1, photoUrl: 'https://a.lmcdn.ru/img600x866/C/E/CE007EMEEYI7_8127112_1_v45.jpg', price: '499 грн',
            firm: 'Pal Lizeri', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 2, photoUrl: 'https://a.lmcdn.ru/img600x866/M/P/MP002XM240OO_7673979_1_v1.jpeg', price: '599 грн',
            firm: 'Pal Lizeri', type: 'Футболка', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 3, photoUrl: 'https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg', price: '699 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 4, photoUrl: 'https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg', price: '399 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 5, photoUrl: 'https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg', price: '499 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 6, photoUrl: 'https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg', price: '599 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 7, photoUrl: 'https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg', price: '699 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 8, photoUrl: 'https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg', price: '499 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        }
    ],
};

const menTShirtsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return { ...state, products: [...state.products, ...action.products] }
        }
        default:
            return state;
    }
}

export const setProductsAC = (products) => ({ type: SET_PRODUCTS, products })

export default menTShirtsReducer;