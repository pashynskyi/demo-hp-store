const SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    products: [
        {
            id: 1, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '499 грн',
            firm: 'Pal Lizeri', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 2, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '599 грн',
            firm: 'Pal Lizeri', type: 'Футболка', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 3, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '699 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 4, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '399 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 5, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '499 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 6, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '599 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 7, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '699 грн',
            firm: 'Random', type: 'Поло', material: 'Хлопок - 100%',
            sizes: { size1: '48/50', size2: '50/52', size3: '52/54', size4: '54/56' }
        },
        {
            id: 8, photoUrl: '../../../assets/images/manTShirt_01_1.png', price: '499 грн',
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