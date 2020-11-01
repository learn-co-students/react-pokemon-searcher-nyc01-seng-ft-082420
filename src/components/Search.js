import React from 'react'

const Search = props => {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" placeholder="Search Pokedex" value={props.searchValue} onChange={props.searchHandler}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
