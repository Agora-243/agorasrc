import { CHANGE_KEYWORD, CHANGE_PROVIDER_FILTER, 
    REQUEST_PRODUCTS_FAILED, REQUEST_PRODUCTS_PENDING, 
    REQUEST_PRODUCTS_SUCCESS, ADD_CART_ITEM } from './constant.js'
const initialStateKeyword = {
    keyword : "Iphone",
    providerFilter : "Tout",
    indexOfProductsPage : 1
    
}

export const searchTerms = (state  = initialStateKeyword, action= {}) => {
    switch (action.type){
        case CHANGE_KEYWORD:
            return {...state, keyword : action.payload } ;
        case CHANGE_PROVIDER_FILTER :
            return {...state, providerFilter : action.payload}
        default :
            return state;
    }
}
const initialStateRequest = {
    productsData : null,
    url : 'https://ali-express1.p.rapidapi.com/search?query=Mackbook&page=1', 
    isPending : false,
    error : ''
}
export const requestProducts = (state = initialStateRequest, action = {}) => {
    switch (action.type){
        case REQUEST_PRODUCTS_PENDING :
            return {...state, isPending : true}
        case REQUEST_PRODUCTS_SUCCESS :
            return {...state, isPending : false, productsData : action.payload}
        case REQUEST_PRODUCTS_FAILED :
            return {...state, isPending: false, error : action.payload }
        default :
            return state; 
    }
}
const initialStateSession = {
    cart : [],
}

export const sessionManager = (state = initialStateSession, action = {}) => {
    switch (action.type){
        case ADD_CART_ITEM:
            return {...state, cart : state.cart.concat([action.payload])}
        default :
            return state
    }
}