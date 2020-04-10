import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Filters from '../Filters/Filters';

const SearchForm = () => {
    return (
        <form className="search-form">
            <SearchBar />
            <Filters />
        </form>
    );
};

export default SearchForm;