import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

interface Props {
    filterByPrice: (values:object) => void
}
const Filter: React.FC<Props> = (props) => {
    const { filterByPrice } = props;

    const filerByPrice = (values: object) => {
        filterByPrice(values);
    }
    return (
        <div>
            PRICE
            <br />
            <br />
            <button onClick={() => filerByPrice({ min: 0, max: 1000 })}>Less than 1000$</button>
            <br />
            <button onClick={() => filerByPrice({ min: 1000, max: 2000 })}>From 1000$ to 2000$</button>
            <br />
            <button onClick={() => filerByPrice({ min: 2000, max: 3000 })}>From 2000$ to 3000$</button>
            <br />
            <button onClick={() => filerByPrice({ min: 3000, max: 100000 })}>Greater than 3000$</button>
            <br />
        </div >
    );
}

export default Filter;