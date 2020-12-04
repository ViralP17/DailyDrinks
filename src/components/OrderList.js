import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrders, deleteOrder  } from '../actions/orderAction';
import { Link } from 'react-router-dom'


const OrderList = ({
    getOrders,
    order,
    deleteOrder
  }) => {
    useEffect(() => {
        getOrders();
    }, [getOrders]);

const handleDelete = (id) => {
    if(window.confirm("Are you sure want to delete?")) {
      deleteOrder(id);
    }
  };


  const { orders } = order;
  return (
    <div className="container">
    <div className="py-4">
    <Link to="/add">
            <button className="new-order-btn btn">Add Order</button>
        </Link>
      <h1>Home Page</h1>
      <table className="table border shadow OrderTable">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Drink Name</th>
            <th scope="col">Price</th>
            <th scope="col">Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? <tr> <td colSpan="5" className="no-record"> No records found. </td> </tr> : 
          orders.map((order, index) => (
            <tr key={index + 1}>
              <th scope="row" className="order-id">{index + 1}</th>
              <td className="order-name">{order.name}</td>
              <td className="order-price">{order.price}</td>
              <td className="order-notes" title={order.notes}>{order.notes}</td>
              <td className="order-action">
              <Link key={index} to={`/edit/${index}`} className="order">
              <i className="fa fa-pencil-square-o" aria-hidden="true" title="Edit"></i>
              </Link>&nbsp;&nbsp;
              <i className="fa fa-trash-o delete" aria-hidden="true" title="Delete" onClick={() => handleDelete(order.id)} ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};


const mapStateToProps = (state) => ({
  order: state.order
});

export default connect(mapStateToProps, { getOrders, deleteOrder })(OrderList);