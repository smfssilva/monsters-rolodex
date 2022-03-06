import { Component} from 'react'

import './card-styles.css';

class Card extends Component {

  render() {
    const {id, name, email} = this.props.monster;
    return (
      <div key={id}>
        <div className="card-container">
          <img src={`https://robohash.org/${id}?/set=set2/&size=180x180`} alt={`monster ${name}`} />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}

export default Card;