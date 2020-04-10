import React from 'react';
import './Filters.css';

const Filters = () => {
    // const printTypeOptions = {

    // }

    return (
        <div className='filters'>
            <label htmlFor='print-type'>Print Type:</label>
            <select name='print-type' id='print-type'>
                <option value=''>All</option>
                {/* { printTypeOptions } */}
            </select>
            <label htmlFor='book-type'>Book Type:</label>
            <select name='book-type' id='book-type'>
                <option value=''>No Filter</option>
            </select>
        </div>
    );
};

export default Filters;