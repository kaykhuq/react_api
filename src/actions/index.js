import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        });
    };
}

export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProducts(id));
        });
    };
}

export const actDeleteProducts = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductsRequest = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProducts(res.data));
        });
    };
}

export const actAddProducts = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}

export const actUpdateProductsRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProducts(res.data));
        });
    };
}

export const actUpdateProducts = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

export const actGetProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProducts(res.data));
        });
    };
}

export const actGetProducts = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}