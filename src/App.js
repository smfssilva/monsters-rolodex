import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  const fetchMonsters = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setMonsters(data)
  }

  useEffect(() => {
    fetchMonsters();
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField);
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField]);

  const onChangeHandle = (e) => {
    setSearchField(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      < SearchBox
        className="monster-search-box"
        onChangeHandle={onChangeHandle}
        placeholder='search monster'
      />
      <CardList monsters={filteredMonsters} />
    </div >
  )

}

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   fetchMonsters = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     this.setState(() => {
//       return { monsters: data }
//     }, () => {
//     })
//   }

// componentDidMount() {
//   this.fetchMonsters()
// }
//   onChangeHandle = (e) => {
//     const searchField = e.target.value.toLowerCase();
//     this.setState({ searchField })
//   }

//   componentDidMount() {
//     this.fetchMonsters()
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onChangeHandle } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name.toLowerCase().includes(searchField);
//     })


//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         < SearchBox
//           className="monster-search-box"
//           onChangeHandle={onChangeHandle}
//           placeholder='search monster'
//         />
//         <CardList monsters={filteredMonsters} />
//       </div >
//     )
//   }
// }

export default App;
