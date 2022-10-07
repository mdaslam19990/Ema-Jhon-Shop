import React from 'react';
import "./ReviewItems.css";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItems = ({ product, handleDeleteSingleProduct }) => {
    const {name, img, quantity, price, id, shipping} = product;
    return (
        <div className='review-item'> 
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>Name: {name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="review-delete">
                    <button onClick={() => handleDeleteSingleProduct(id)} className='delete-btn'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;