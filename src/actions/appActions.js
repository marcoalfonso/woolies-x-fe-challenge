import api from '../apiClient'
import {
  SENDING_REQUEST,
  SET_PRODUCTS,
  SET_PRODUCT_IN_CART
} from '../constants/constants'
import { toast } from 'react-toastify'

export const sendingRequest = loading => ({ type: SENDING_REQUEST, loading })

export const getProducts = () => dispatch => {
  return api({ 
    method: 'GET',
    url: `https://wooliesxfechallenge.azurewebsites.net/api/v1/resources/products?token=${process.env.REACT_APP_TOKEN}`
  })
  .then(response => {
    dispatch(setProducts(response.data))
  })
}

export const setProducts = products => ({ type: SET_PRODUCTS, products })

export const addToCart = product => ({ type: SET_PRODUCT_IN_CART, product })

export const checkout = (cart) => dispatch => {
  return api({ 
    method: 'POST',
    url: `https://wooliesxfechallenge.azurewebsites.net/api/v1/resources/checkout?token=${process.env.REACT_APP_TOKEN}`,
    data: JSON.stringify(cart)
  })
  .then(response => {
    if (response.data === 'OK') {
      toast.success('Checkout was successful')
    } else {
      toast.error('There was a problem and checkout could not be completed')
    }
    return response
  })
}