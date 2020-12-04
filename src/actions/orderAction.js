
import { GET_ORDERS, ADD_ORDER, EDIT_ORDER, DELETE_ORDER } from './type';

export const getOrders = () => (dispatch) => {
  return {
      type : GET_ORDERS
  };
};

export const addOrder = (Order) =>  {
    return {
        type : ADD_ORDER,
        payload: Order
    };
};

export const editOrder = (id, order) => {
  return {
      type: EDIT_ORDER,
      payload: {
          id,
          order
      }
  }
}

export const deleteOrder = id => {
    return {
        type : DELETE_ORDER,
        payload: id
    };
};

