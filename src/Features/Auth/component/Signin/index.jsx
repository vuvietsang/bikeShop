import { unwrapResult } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import { useSnackbar } from 'notistack';
import SigninForm from '../SigninForm';
import PropTypes from 'prop-types';

Signin.propTypes = {
    onclose: PropTypes.func.isRequired,
};

function Signin({ onclose }) {
    const close = () => {
        if (onclose) {
            onclose();
        }
    }
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar()
    const handleSubmit = async (values) => {
        try {
            //auto set username = email
            values.identifier = values.email;

            console.log(values);
            // console.log('Form Submit : ', values);
            const action = login(values);

            const resultAction = await dispatch(action);

            const user = unwrapResult(resultAction);


            enqueueSnackbar('Login successfully', { variant: 'success' });
            close();
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <SigninForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Signin;