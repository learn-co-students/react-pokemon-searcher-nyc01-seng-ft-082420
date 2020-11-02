import React from 'react'

class Search extends React.Component {
  
  state = {
    search: ""
  }

  searchHandler = e => {
    this.setState( { search: e.target.value })
    this.props.filter(e.target.value)
  }

  render() {

    return (
      <div className="ui search">
        <div className="ui icon input">
          <input onChange={this.searchHandler} className="prompt" value={this.state.search}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
