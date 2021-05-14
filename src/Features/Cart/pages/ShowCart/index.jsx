import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../../cartSlice'
import Checkout from '../../components/Checkout';
ShowCart.propTypes = {

};
const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        flex: '1 1 0',
    },
}));
function ShowCart(props) {
    const dispatch = useDispatch();

    const classes = useStyles();


    if (JSON.parse(localStorage.getItem('cart')) !== null) {
        var cartInitial = JSON.parse(localStorage.getItem('cart'));
    } else {
        cartInitial = [];
    }

    const [cart, setCart] = useState(cartInitial);

    console.log(cart);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])
    const handleRemoveFromCart = (bike) => {
        const newCart = [...cart];

        let idx = -1;
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].bike.id === bike.id) {
                idx = index;
            }
        }
        if (idx >= 0) {
            const quantity = newCart[idx].quantity - 1;
            if (quantity === 0) {
                newCart.splice(idx, 1);
            } else {
                newCart[idx] = { ...newCart[idx], quantity: quantity }
            }
            dispatch(decrease());
            setCart(newCart);
        }
    }

    const handleAddtoCart = (bike) => {
        const newCart = [...cart];
        let idx = -1;
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].bike.id === bike.id) {
                idx = index;
            }
        }
        if (idx >= 0) {
            const quantity = newCart[idx].quantity + 1;
            newCart[idx] = { ...newCart[idx], quantity: quantity }
            dispatch(increase());
            setCart(newCart);
        }
    }
    return (
        <Box>
            <h1>Your Cart</h1>
            <Container>
                <Grid container spacing={1} >
                    <Grid item className={classes.left}>
                        <ul className='list-item' >
                            {cart.length !== 0 ? cart.map((item) => (
                                <li key={item.bike.id}  >
                                    <Paper elevation={1} className='paper'>
                                        <Box padding={2}  >
                                            <img src={item.bike.img} alt={item.bike.img} />
                                            <div className="Price">
                                                Price : {item.bike.price}
                                            </div>
                                            <div className='buttons'>
                                                <button onClick={() => handleRemoveFromCart(item.bike)} > - </button>
                                                <input value={item.quantity} readOnly="readOnly" >
                                                </input>
                                                <button onClick={() => handleAddtoCart(item.bike)} > + </button>
                                            </div>
                                            <br />
                                            {item.bike.name}
                                            <br />
                                        </Box>
                                    </Paper>
                                </li>
                            )) : <h2>You have not added anything to Cart</h2>
                            }
                        </ul >
                    </Grid>
                    <Grid item >
                        <Checkout cart={cart} />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default ShowCart;