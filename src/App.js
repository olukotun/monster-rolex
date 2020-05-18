import React, { Component } from 'react';
import{CardList} from './components/card-list/card-list.component'
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      monsters:[],
      searchField: ''
    }

    //this.handleChange = this.handleChange.bind(this)
  }
  // methods which get called at different stages when the component renders
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data => this.setState({monsters: data}) )
    
  }
  handleChange=(event)=>{
    this.setState({searchField: event.target.value

    })
  }


  render(){
    const {monsters, searchField} = this.state;
    // const monsters = this.state.monsters
    // const searchfield = this.state.searchfield
   const filteredMonsters = monsters.filter(monster =>
   monster.name.toLowerCase().includes(searchField.toLowerCase()))


   
   
  return (
    
    <div className="App">
     <h1>Monster Rolex</h1>
     <SearchBox placeholder='search monster' handleChange= {this.handleChange}/>
      <CardList monsters={filteredMonsters} ></CardList>
    </div>
  );
  }
}

export default App;
