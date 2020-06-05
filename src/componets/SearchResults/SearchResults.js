import React from 'react';
import SearchFilter from './SearchFilter/SearchFilter';
import ResultItem from './ResultItem/ResultItem';

const SearchResults = () => {
    return (
        <div className="search-results my-4">
           <h4>Stay in Dhaka Division</h4> 
           <SearchFilter/>
           <div>
               <ResultItem/>
               <ResultItem/>
               <ResultItem/>
               <ResultItem/>
           </div>
        </div>
    );
};

export default SearchResults;