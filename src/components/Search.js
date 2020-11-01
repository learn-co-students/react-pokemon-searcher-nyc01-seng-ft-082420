import React from 'react'

const Search = props => {

  function filterByName(e){
    props.searchHandler(e)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchValue} onChange={filterByName}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search


