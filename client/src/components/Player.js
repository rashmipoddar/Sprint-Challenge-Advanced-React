import React from 'react';

const Player = props => {
  return (
    <div>
      <h1>Player: {props.player.name}</h1>
      <h2>Country: {props.player.country}</h2>
      <h3>Searches: {props.player.searches}</h3>  
    </div>
  )
}

export default Player;