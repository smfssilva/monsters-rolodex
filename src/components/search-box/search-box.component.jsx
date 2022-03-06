import { Component} from 'react'

class SearchBox extends Component {

  render() {

    const {onChangeHandle, placeholder, className} = this.props
    return (
      <div>
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandle}
        />
      </div>
    )
  }
}

export default SearchBox;