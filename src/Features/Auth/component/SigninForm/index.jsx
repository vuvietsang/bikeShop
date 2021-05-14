import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../Components/form-controls/InputField';
import PasswordField from '../../../../Components/form-controls/PassWordField';
SigninForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

function SigninForm({ onSubmit }) {
    const schema = yup.object().shape({
        email: yup.string().required('Please enter your email!').email('You have to write email correctly'),
        password: yup.string().required().min(6, 'At least 6 characters'),
    })
    function handleSubmit(values) {
        if (onSubmit) {
            onSubmit(values);
        }
    }
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
        , resolver: yupResolver(schema)
    })
    return (
        <div>
            <Avatar>
                <CodeIcon>
                </CodeIcon>
            </Avatar>
            <Typography component='h3' variant='h5'>
                Sign in
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)} >
                <InputField name='email' label='Email' form={form} ></InputField>
                <PasswordField name='password' label='Password' form={form} ></PasswordField>
                <Button variant="contained" color="primary" disableElevation type='submit' >
                    Sign In
                </Button>
            </form>

        </div>
    );
}

export default SigninForm;