import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Paper } from '@material-ui/core';
Checkout.propTypes = {
    cart: PropTypes.array.isRequired,
};

function Checkout({ cart }) {
    var sum = 0;
    // sum = cart.reduce((total, { quantity, bike.price }) => total + quantity * price, 0);
    cart.forEach(item => {
        sum += item.quantity * item.bike.price;
    });
    return (
        <>
            <Paper elevation={1} >
                <div className="box" >
                    <div className="prices">
                        <p className="prices__total">
                            <span className="prices__text">Thành tiền</span>
                            <span className="prices__value prices__value--final">{sum} <i>(Đã bao gồm VAT nếu có)</i>
                            </span>
                        </p>
                    </div>
                </div>
            </Paper>
            <button type="button" className="cart__submit">Tiến hành đặt hàng</button>
        </>
    );
}

export default Checkout;