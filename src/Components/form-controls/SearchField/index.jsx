import { InputBase, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
SearchField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};
const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '55ch',
        },
    },
}));
function SearchField(props) {
    const { form, name, disabled, placeholder } = props;
    const classes = useStyles();

    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) =>
                <InputBase
                    {...field}
                    placeholder={placeholder}
                    disabled={disabled}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                />}
        />
    );
}
export default SearchField;