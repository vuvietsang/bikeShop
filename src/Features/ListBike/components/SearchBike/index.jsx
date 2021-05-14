import { fade, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import SearchField from '../../../../Components/form-controls/SearchField';

SearchBike.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        marginRight: theme.spacing(50),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: '40%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
function SearchBike(props) {
    const form = useForm({
        defaultValues: {
            searchByName: '',
        }
    })
    const classes = useStyles();
    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            onSubmit(values)
        }
    }
    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <SearchField
                        name='searchByName'
                        form={form}
                        placeholder="Search by name"
                    />
                </form>
            </div>
        </>
    );
}

export default SearchBike;