import React from 'react'
import ChoiceCard from './ChoiceCard'

class ChoiceModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "J'ai envie d'air pur",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 1
        },
        {
          title: "Je veux me déplacer en vélo",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'test',
          checked: false,
          id: 2
        },
        {
          title: "J'aime sortir le soir",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 3
        },
        {
          title: "Je veux prendre le métro",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'test',
          checked: false,
          id: 4
        },
        {
          title: "Je veux de l'action",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'test',
          checked: false,
          id: 5
        },
        {
          title: "Je veux être proche de la nature",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 6
        },
      ]
    };

    this.handleCardClick = this.handleCardClick.bind(this)
  }

  
  render() {
    return (
      <div className="choice-modal">
        <h1> Que cherchez-vous à Paris ?</h1>
        <div className="cards">
          {this.state.cards.map(card => {
            return (
              <ChoiceCard onClick={() => this.handleCardClick(card.id) } card={card} key={card.id} />
            )
          })}
        </div>
      </div>

    );
  }

  handleCardClick(cardId) {
    this.setState(prevState => ({
      cards: prevState.cards.map(card => card.id === cardId ? {...card, checked: !card.checked} : card)
    }))
  }
}

export default ChoiceModal