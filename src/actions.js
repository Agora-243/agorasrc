import { CHANGE_KEYWORD, CHANGE_PROVIDER_FILTER, 
    REQUEST_PRODUCTS_FAILED, REQUEST_PRODUCTS_PENDING,
REQUEST_PRODUCTS_SUCCESS, ADD_CART_ITEM } from './constant.js';


export const setSearchField = (text) => ({
    type : CHANGE_KEYWORD,
    payload : text 
})

export const setProviderFilter = (text) => ({
    type : CHANGE_PROVIDER_FILTER,
    payload : text,
})

export const requestProducts = (url) => {
    console.log('action :' + url);
    return (dispatch) => {
    dispatch({type : REQUEST_PRODUCTS_PENDING});
    fetch(url , {
        method : 'GET',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'x-rapidapi-key': 'c2d1db1d94msh3794ee68657eb86p1d7f60jsn95359e62701f',
            'x-rapidapi-host': 'ali-express1.p.rapidapi.com'
        }
    })
    .then(result => result.json())
    .then(response => 
        {
            return dispatch({
            type : REQUEST_PRODUCTS_SUCCESS,        
            //payload : response.data.searchResult.mods.itemList.content
            payload : response.data
            })                    
        }
    )
    .catch(error => dispatch({type : REQUEST_PRODUCTS_FAILED, payload : error}))       
    }
}

export const addCartItem = (newItem) => (
    {
        type : ADD_CART_ITEM,
        payload : newItem
    }
)
