import React from 'react';
import { Fragment } from 'react'
import { GoSearch } from 'react-icons/go';

function SearchField (props){
    const {onProviderFilterChange, onRequestProducts, onSearchFieldChange, url} = props;
    return (
            <Fragment>
                <select name="trie" id="trie" onChange = {onProviderFilterChange}>
                    <option value="Tout">Tout</option>
                    <option value="prototype">prototype</option>
                </select>
                <input id="search-bar" type="text" onChange={onSearchFieldChange}/>
                <div id="search-icon">
                    <GoSearch style={{ fontSize: 20 }} onClick = {onRequestProducts} />
                </div>
            </Fragment>    
    )
}

export default SearchField ;