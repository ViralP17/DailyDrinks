import {
    GET_ORDERS,
    ADD_ORDER,
    EDIT_ORDER,
    DELETE_ORDER,
  } from '../actions/type';
  import { v4 as uuidv4 } from 'uuid';
  
  const initialState = {
    orders: [
        { id: uuidv4(), name: 'Milk', price: 20, notes: 'This is Sample note.' },
        { id: uuidv4(), name: 'Water', price: 10, notes: 'This is Sample note.' },
        { id: uuidv4(), name: 'Wine', price: 50, notes: 'This is Sample note.' },
        { id: uuidv4(), name: 'Coke', price: 30, notes: 'This is Sample note.' }
    ],
    loading: false
  };

  
  export default function OrderReducer(state= initialState, action) {
    switch (action.type) {
      case GET_ORDERS:
        return {
          ...state,
          orders: action.payload,
          loading: false
        };
      case DELETE_ORDER:
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload)
        };
      case ADD_ORDER:
        return {
          ...state,
          orders: [...state.orders,action.payload]
        };
        case EDIT_ORDER: {
          state.orders[action.payload.id] = action.payload.order

          return { ...state, orders: [...state.orders] }
      }
      default:
        return state;
    }
  }
  