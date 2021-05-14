import { Badge, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Register from '../../Features/Auth/component/Register';
import Signin from '../../Features/Auth/component/Signin';
import SearchBike from '../../Features/ListBike/components/SearchBike';
import { search } from '../../Features/ListBike/searchSlice';
import './styles.scss';
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
}));


export default function Header() {
    const dispatch = useDispatch();
    const [action, setAction] = useState('');

    const handleNameSubmit = (values) => {
        dispatch(search(values));
    }
    const numPros = useSelector(state => state.cart);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        setAction('register');
    };
    const handleClickSignin = () => {
        setOpen(true);
        setAction('signin');
    }

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.link} to="/home">Hana Shop</Link>
                    </Typography>
                    <SearchBike onSubmit={handleNameSubmit} />
                    <NavLink className={classes.link} to="/cart">
                        <IconButton aria-label="show  new notifications" color="inherit">
                            <Badge badgeContent={numPros} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </NavLink>
                    <Button color="inherit" onClick={handleClickSignin} >Sign in</Button>
                    <Button color="inherit" onClick={handleClickOpen} >Register</Button>
                </Toolbar>
            </AppBar>

            <Dialog disableEscapeKeyDown disableBackdropClick open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                    {action === 'register' ? <Register onclose={handleClose} /> : <Signin onclose={handleClose} />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
