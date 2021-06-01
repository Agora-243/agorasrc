import { CHANGE_SEARCH_FIELD} from './constant.js'
const initialState = {
    searchField : ''
}

export const searchProduct = (state  = initialState, action= {}) => {
    switch (action.type){
        case CHANGE_SEARCH_FIELD :
            return Object.assign({}, state, {searchField : action.payload});
        default :
            return state;
    }
    
}