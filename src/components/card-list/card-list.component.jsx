import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({monsters}) => {

  const renderedMonsters = monsters.map((monster) => {
    return <Card key={monster.id} monster={monster}/>
  })

  return (
    <div className="card-list">
      {renderedMonsters}
    </div>
  )

}

export default CardList;