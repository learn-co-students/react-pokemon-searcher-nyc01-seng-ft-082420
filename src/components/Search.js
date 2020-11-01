import React from 'react'

const Search = props => {
  return (
    <div className="ui search" onChange={props.searchHandler}>
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
