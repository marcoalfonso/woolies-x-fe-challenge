/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import {
  SENDING_REQUEST,
  SET_PRODUCTS,
  SET_PRODUCT_IN_CART
} from '../constants/constants'

// The initial application state
const initialState = {
  loading: false,
  products: [],
  cart: []
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENDING_REQUEST:
      return {
        ...state,
        loading: action.loading
      }

    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products
      }

    case SET_PRODUCT_IN_CART:
      return {
        ...state,
        cart: [...state.cart, action.product]
      }

    default:
      return state
  }
}

export default appReducer
