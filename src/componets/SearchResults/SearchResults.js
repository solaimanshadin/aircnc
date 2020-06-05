import React from 'react';
import SearchFilter from './SearchFilter/SearchFilter';

const SearchResults = () => {
    return (
        <div className="container search-results">
           <h4>Stay in Dhaka Division</h4> 
           <SearchFilter/>
        </div>
    );
};

export default SearchResults;