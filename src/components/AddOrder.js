import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '../actions/orderAction';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'

const AddOrder = () => {
  const [order, setOrder] = useState({
      name: '',
      price: 0,
      notes:''
  });
  let history = useHistory();
  const  dispatch = useDispatch()

  const handleChange = (e) => setOrder({...order, [e.target.name]: e.target.value});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    history.push("/");
    const newOrder = {
        name : order.name,
        price : order.price,
        notes: order.notes
    }
    // Add item via addItem action
    dispatch(addOrder(newOrder));
    setOrder(order)
  };

  const cancel = (e) => {
    e.preventDefault()
    history.push('/');
  }

  return (
    <div className="container">
    <div className="py-4">
    <h1>Add Order</h1>
     
     <form className="order-detail" onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name:</label><br />
            <input type="text" name="name" onChange={handleChange} value={order.name} required autoFocus /><br />
            <label htmlFor="price">Price:</label><br />
            <input type="number" name="price" onChange={handleChange} value={order.price} min="0" required /><br />
            <label htmlFor="notes">Notes:</label><br />
            <textarea type="textarea" wrap="hard" rows="3" name="notes" onChange={handleChange} value={order.notes} />
            <div className="button-group">
                <button type="submit" className="btn ok">Add</button>
                <button className="cancel btn" onClick={cancel}>Cancel</button>
            </div>
        </form>
    </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order
});

export default connect(mapStateToProps, { addOrder })(AddOrder);
