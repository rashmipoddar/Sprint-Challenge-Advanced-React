import React from 'react';

const Player = props => {
  return (
    <div>
      <h1>{props.player.name}</h1>
      <h2>{props.player.country}</h2>
      <h3>{props.player.searches}</h3>  
    </div>
  )
}

export default Player;