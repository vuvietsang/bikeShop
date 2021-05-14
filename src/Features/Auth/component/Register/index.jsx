import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../Registerform';

Register.propTypes = {
    onclose: PropTypes.func.isRequired,
};
function Register({ onclose }) {
    const close = () => {
        if (onclose) {
            onclose();
        }
    }
    const { enqueueSnackbar } = useSnackbar()
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        try {
            //auto set username = email
            values.username = values.email;
            // console.log('Form Submit : ', values);
            const action = register(values);

            const resultAction = await dispatch(action);

            const user = unwrapResult(resultAction);


            enqueueSnackbar('Register successfully', { variant: 'success' });
            close();
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;