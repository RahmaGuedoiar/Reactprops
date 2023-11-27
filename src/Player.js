
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './App.css';


const Player = (props) => {
    return (
        <div className='cont'>
           {/* importation du carte du bootstrap et l' affichera tous les attributs de chaque joueur définis dans le fichier Players.js dans un card .  */}
       
            <div className='TOS'>
          
              <Card   style={{ width: 300 }}>
                <Card.Img variant="top" src={props.pr.imageUrl} alt={props.pr.name} id='aa'/>
                <Card.Body style={{backgroundColor: 'rgb(121, 78, 27,0.2)'}} >
                    <Card.Title><h2>{props.pr.name}</h2></Card.Title>
                    <Card.Text>
                       <p>Équipe: {props.pr.team}</p>
                       <p>Nationalité: {props.pr.nationality}</p>
                       <p>Numéro de Maillot: {props.pr.jerseyNumber}</p>
                      <p>Âge: {props.pr.age}</p>
                  </Card.Text>
                </Card.Body>
               </Card>
           </div>
      
        </div> 
      
      )

      }
      
      
export default Player