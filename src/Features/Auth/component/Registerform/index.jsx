import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../Components/form-controls/InputField';
import PasswordField from '../../../../Components/form-controls/PassWordField';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
function RegisterForm(props) {
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Plss enter you fullName')
            .test('Should has two words', 'Please enter at least two words', (values) => {
                return values.split(' ').length >= 2;
            })
        ,
        email: yup.string().required('Please enter your email!').email('You have to write email correctly'),
        password: yup.string().required().min(6, 'At least 6 characters'),
        retypePassword: yup.string().required('Retype password').oneOf([yup.ref('password')], 'Password does not match'),

    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
            form.reset();
        }
    }
    const { isSubmitting } = form.formState;

    return (
        <div>
            {isSubmitting && <LinearProgress />}
            <Avatar>
                <CodeIcon>
                </CodeIcon>
            </Avatar>
            <Typography component='h3' variant='h5'>
                Create an account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' label='FullName' form={form} />
                <InputField name='email' label='Email' form={form} />
                <PasswordField name='password' label='Password' form={form} />
                <PasswordField name='retypePassword' label='Retype Password' form={form} />
                <Button disabled={isSubmitting} variant="contained" color="primary" disableElevation type='submit' >
                    Create an account
                </Button>
            </form>

        </div>

    );
}

export default RegisterForm;