import { Component} from 'react'

class CardList extends Component {

  render() {

    const {monsters} = this.props

    const renderedMonsters = monsters.map((monster) => {
      return <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    })

    return (
      <div>
        {renderedMonsters}
      </div>
    )
  }
}

export default CardList;