import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
Pagination.propTypes = {
    handPagin: PropTypes.func,
    pagination: PropTypes.object,
};

function Pagination(props) {

    const { pagination, handPagin } = props;
    const totalPage = Math.ceil(pagination.total / pagination._limit);
    var page = pagination.page;

    const handleIndexClick = (index) => {
        if (handPagin) {
            handPagin(index);
        }
    }
    const item = [];

    for (let index = 1; index <= totalPage; index++) {
        item.push(<button onClick={() => handleIndexClick(index)} key={index} >{index}</button>)
    }
    return (
        <div className='paging-wrap'>
            <div className='paging-bar'>
                <button disabled={page <= 1} onClick={() => handleIndexClick(page - 1)}>&laquo;</button>
                {item}
                <button disabled={page >= totalPage} onClick={() => handleIndexClick(page + 1)}>&raquo;</button>
            </div>
        </div>
    );
}

export default Pagination;