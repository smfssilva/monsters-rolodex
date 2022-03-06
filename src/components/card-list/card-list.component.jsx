import { Component} from 'react'

import './card-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {

  render() {

    const {monsters} = this.props

    const renderedMonsters = monsters.map((monster) => {
      const {id, name, email} = monster
      return <Card id={id} name={name} email={email}/>
    })

    return (
      <div className="card-list">
        {renderedMonsters}
      </div>
    )
  }
}

export default CardList;