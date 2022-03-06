import { Component} from 'react'
import './search-box.styles.css'

class SearchBox extends Component {

  render() {

    const {onChangeHandle, placeholder, className} = this.props
    return (
      <div>
        <input
          type="search"
          className={`search-box ${className}`}
          placeholder={placeholder}
          onChange={onChangeHandle}
        />
      </div>
    )
  }
}

export default SearchBox;