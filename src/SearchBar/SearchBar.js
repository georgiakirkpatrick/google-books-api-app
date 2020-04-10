import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search-bar'>
            <label htmlFor="search">Search: </label>
            <input type="text" name="search" id="search"></input>
            <button className='search-bar__button' type='submit'>Search</button>
        </div>
    );
};

export default SearchBar;