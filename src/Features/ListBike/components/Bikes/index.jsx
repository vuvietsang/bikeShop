
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import BikeDetails from '../BikeDetails';
import './styles.scss';
Bike.propTypes = {
    listbike: PropTypes.array,
    handleAdd: PropTypes.func,
    handleViewDetails: PropTypes.func,
};
Bike.defaultPropTypes = {
    listbike: [],
    handleAdd: null,
    handleViewDetails: null,
}

function Bike(props) {
    const { listbike, handleAdd } = props;
    const handleAddToCartclick = (bike) => {
        if (handleAdd) {
            handleAdd(bike);
        }
    }
    return (
        <ul className='item-list'>
            {listbike.map((bike) => (
                <li key={bike.id}  >
                    <Box padding={2}  >
                        <BikeDetails bike={bike} />
                        <button onClick={() => handleAddToCartclick(bike)} > Add To Cart</button>
                    </Box>
                </li>
            ))
            }
        </ul >
    );
}

export default Bike;