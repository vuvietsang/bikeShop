import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productApi from '../../../../api/productApi';
import Pagination from '../../../../Components/Pagination';
import { increase } from '../../../Cart/cartSlice';
import Bike from '../../components/Bikes';
import Filter from '../../components/Filter';
ListBike.propTypes = {

};
const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',

    },
    right: {
        flex: '1 1 0'
    }
}));
const initialValues = [
    {
        id: 1,
        name: 'Trek 820 - 2016',
        brand: 9,
        categoryId: 6,
        model_year: 2016,
        price: 379.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2021/04/xe-dap-gap-dahon-archer-p8-kbc083-cam1-200x150.jpg'
    },
    {
        id: 2,
        name: 'Ritchey Timberwolf Frameset - 2016',
        brand: 5,
        categoryId: 6,
        model_year: 2016,
        price: 749.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2021/04/xe-dap-dia-hinh-nhat-maruishi-fuji-pro-sram-NX-11-201x150.jpg'
    },
    {
        id: 3,
        name: 'Surly Wednesday Frameset - 2016',
        brand: 8,
        categoryId: 6,
        model_year: 2016,
        price: 999.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2020/05/xe-dap-the-thao-fortina-ft7007-dendo-219x150.jpg'
    },
    {
        id: 4,
        name: 'Trek Fuel EX 8 29 - 2016',
        brand: 9,
        categoryId: 6,
        model_year: 2016,
        price: 2899.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2021/04/xe-dap-merida-crossway-90-trang-1-202x150.jpg'
    },
    {
        id: 5,
        name: 'Heller Shagamaw Frame - 2016',
        brand: 3,
        categoryId: 6,
        model_year: 2016,
        price: 1320.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2021/01/xe-dap-the-thao-TrinX-M136-2021-den-do-200x150.jpg'
    },
    {
        id: 6,
        name: 'Surly Ice Cream Truck Frameset - 2016',
        brand: 8,
        categoryId: 6,
        model_year: 2016,
        price: 469.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2019/07/xe-dap-giant-escape-2-city-2020-xanh-217x150.jpg'
    },
    {
        id: 7,
        name: 'Trek Slash 8 27.5 - 2016',
        brand: 9,
        categoryId: 6,
        model_year: 2016,
        price: 3999.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2020/11/xe-dap-the-thao-giant-xtc-800-2019-den-227x148.jpg'
    },
    {
        id: 8,
        name: 'Trek Remedy 29 Carbon Frameset - 2016',
        brand: 9,
        categoryId: 6,
        model_year: 2016,
        price: 1799.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2020/05/xe-dap-gap-Dahon-Kone-fka092-ghi-vang-200x150.jpg'
    },
    {
        id: 9,
        name: 'Trek Conduit+ - 2016',
        brand: 9,
        categoryId: 5,
        model_year: 2016,
        price: 2999.99,
        img: 'https://xedap24h.vn/wp-content/uploads/2019/09/xe-dap-tro-luc-giant-expedition-e-den-225x150.jpg'
    },
    {
        id: 10,
        name: 'Surly Straggler - 2016',
        brand: 8,
        categoryId: 4,
        model_year: 2016,
        price: 1549.00,
        img: 'https://xedap24h.vn/wp-content/uploads/2019/07/xe-dap-giant-escape-1-2020-ghi-219x150.jpg'
    }

];
function ListBike(props) {

    const [num, setNum] = useState(0);

    const [filter, setFilter] = useState({
        _page: 1
        , _limit: 10,
        _searchByPrice: {
            min: 0,
            max: 0,
        }
    });

    const [pagination, setPagination] = useState({});

    useEffect(() => {
        var params;
        var count = 0;
        const fetchProduct = async () => {
            var isFiltered = filter._searchByPrice.max !== 0;
            if (!isFiltered) {
                console.log(filter._limit);
                params = {
                    _limit: filter._limit,
                    _page: filter._page,
                }
            }
            else {
                params = {
                    _limit: 120
                    , _page: 1
                }
            }
            const productList = await productApi.getAll(params);
            const newProlist = [];

            const start = !params._page || params._page <= 1
                ? 0 : (params._page - 1) * (params._limit || 50);

            productList.data.data.forEach(element => {
                element = {
                    id: element.id,
                    name: element.name,
                    brand: 8,
                    categoryId: 4,
                    model_year: 2016,
                    price: 1549.00,
                    img: 'https://xedap24h.vn/wp-content/uploads/2019/07/xe-dap-giant-escape-1-2020-ghi-219x150.jpg'
                }
                if (isFiltered && element.price >= filter._searchByPrice.min &&
                    element.price <= filter._searchByPrice.max) {
                    if ((count >= start && count <= start + 9)) {
                        newProlist.push(element);
                    }
                    count++;
                }
                if (!isFiltered) {
                    newProlist.push(element);
                }
            });
            console.log(newProlist);
            var paginationtmp = {};
            paginationtmp = productList.pagination;
            if (isFiltered) {
                paginationtmp = {
                    _limit: 10,
                    _page: 1,
                    total: count,
                }
            }
            setPagination(paginationtmp);
            setListBike(newProlist)
        }
        fetchProduct();
    }, [filter])

    const dispatch = useDispatch();

    const searchValue = useSelector(state => state.search);


    if (JSON.parse(localStorage.getItem('cart')) !== null) {
        var cartInitial = JSON.parse(localStorage.getItem('cart'));
    } else {
        cartInitial = [];
    }

    const [cart, setCart] = useState(cartInitial);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    const handleAddtoCart = (bike) => {
        const newCart = [...cart];
        const index = cart.findIndex(x => x.bike.id === bike.id);
        if (index >= 0) {
            const quantity = newCart[index].quantity + 1;
            newCart[index] = { ...newCart[index], quantity: quantity }
        }
        else {
            newCart.push(
                {
                    bike: bike,
                    quantity: 1,
                }
            );
        }
        dispatch(increase());
        setCart(newCart);

    };
    const classes = useStyles();

    const [listBike, setListBike] = useState(initialValues);

    useEffect(() => {
        const newList = [];
        initialValues.forEach(bike => {
            if (bike.name.includes(searchValue.searchByName)) {
                newList.push(bike);
            }
        });
        setListBike(newList);
    }, [searchValue])



    const handlePagination = (values) => {
        setFilter({ ...filter, _page: values });
    }

    const filerByPrice = (values) => {
        setFilter({
            ...filter, _searchByPrice: values
        })
    }
    return (
        <Box>
            <h1>Shop's Products</h1>
            <Container>
                <Grid container spacing={1} >
                    <Grid item className={classes.left}>
                        <Filter filterByPrice={filerByPrice} />
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={1} >
                            <Bike listbike={listBike} handleAdd={handleAddtoCart} />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item className={classes.down}>
                    <Pagination pagination={pagination} handPagin={handlePagination} />
                </Grid>
            </Container>
        </Box >

    );
}

export default ListBike;