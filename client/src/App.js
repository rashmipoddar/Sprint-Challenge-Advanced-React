import React from 'react';
import axios from 'axios';

import './App.css';
import Player from './components/Player';

class App extends React.Component {
  state = {
    players: []
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response);
        this.setState({
          players: response.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Player Ranks</h1>
        {this.state.players.map(player => {
          return (
            <Player key={player.id} player={player}/>
          )
        })} 
      </div>
    );
  }
}

export default App;
