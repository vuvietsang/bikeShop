import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PropTypes from 'prop-types';
import { default as React, useState } from 'react';
import { Controller } from 'react-hook-form';
PasswordField.propTypes = {

    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const { formState } = form;
    const hasError = formState.errors[name] && formState.touchedFields[name];

    const [showPassWord, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(x => !x);
    }
    return (
        <div>

            <Controller
                name={name}
                control={form.control}
                render={({ field }) =>
                    <FormControl fullWidth variant="outlined" margin='normal' >
                        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                        <OutlinedInput
                            {...field}
                            id={name}
                            type={showPassWord ? 'text' : 'password'}
                            label={label}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={toggleShowPassword}
                                        edge="end"
                                    >
                                        {showPassWord ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            disabled={disabled}
                            error={hasError}
                            variant="outlined"
                        />
                        <FormHelperText error id={name} >
                            {formState.errors[name]?.message}
                        </FormHelperText>
                    </FormControl>
                }
            />
        </div>
    );
}
export default PasswordField;