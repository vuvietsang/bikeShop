import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './styles.scss';
BikeDetails.propTypes = {
    bike: PropTypes.object,
};
BikeDetails.defaultPropTypes = {
    bike: null,
}

function BikeDetails({ bike }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='item'>
            <img src={bike.img} alt="x" onClick={handleClickOpen} /><br />
            <br />
            {bike.name}<br />
            <br />
            <p className='price'>
                Price : {bike.price}$
             </p>
            <br />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    <img src={bike.img} alt={bike.name} />
                    <p>Name: {bike.name}</p>
                    <p>Price: {bike.price}</p>
                    <p>Brand: {bike.brand}</p>
                    <p>Category: {bike.categoryId}</p>
                    <p>Model Year: {bike.model_year}</p>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default BikeDetails;