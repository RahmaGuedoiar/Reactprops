import React from 'react'
import Player from './Player';
import players from './players'
import './App.css'

const App = () => {
  return (
    // L'affichage de  tous les joueurs dans PlayerList.js, en cartographiant tous les éléments du tableau de joueurs
    <div  className='info'  >  { players.map(el => <Player     pr={el}  />)} </div>
  )
}
// Spécifie les valeurs par défaut des props
Player.defaultprops ={
    " id": null,
  "name":" inconnu",
  "team":"inconnu",
  "nationality": "inconnu",
  "jerseyNumber": null,
  "age": null,
  "imageUrl": null };
export default App