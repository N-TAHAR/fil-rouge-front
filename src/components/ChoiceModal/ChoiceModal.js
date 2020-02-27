import React from 'react'
import ChoiceCard from './ChoiceCard'

class ChoiceModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        // {
        //   title: "J'ai envie d'air pur",
        //   value: "air",
        //   description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
        //   imgName: 'nature',
        //   checked: false,
        //   id: 1
        // },
        {
          title: "Je veux me déplacer en vélo",
          value: "velo",
          description: "Nous prendrons en compte la facilité d’accès aux bornes vélib en comparant le nombre de bornes disponible entre les différents arrondissement de Paris",
          imgName: 'velo',
          checked: false,
          id: 2
        },
        {
          title: "Je veux me promener !",
          value: "sortir",
          description: "Nous comparons l’activité des arrondissements en énumérant le nombre d’activités recensées dans les mairies, qu’elles soient privées ou publique.",
          imgName: 'event',
          checked: false,
          id: 3
        },
        // {
        //   title: "Je veux prendre le métro",
        //   value: "metro",
        //   description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
        //   imgName: 'nature',
        //   checked: false,
        //   id: 4
        // },
        {
          title: "Je veux du wifi",
          value: "wifi",
          description: "Nous comparons la couverture sans fil en libre d’accès en énumérant le nombre de bornes wifi publique disponibles dans l’arrondissement",
          imgName: 'wifi',
          checked: false,
          id: 5
        },
        {
          title: "Je veux être proche de la nature",
          value: "nature",
          description: "Nous vous indiquerons l’arrondissement avec la plus grande surface d’espace vert par rapport à sa surface totale. Vous pourrez prendre un bol d’air frais!",
          imgName: 'nature',
          checked: false,
          id: 6
        },
      ]
    };

    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleValidationClick = this.handleValidationClick.bind(this)
    this.atLeastOneCardIsChecked = this.atLeastOneCardIsChecked.bind(this)
  }

  
  render() {
    return (
      <div className={`choice-modal ${this.props.isVisible ? 'is-open' : ''}`}>
        <div className="wrapper">
          <div className="modal-header">
            Que cherchez-vous à Paris ?
          </div>
          <div className="choice-cards">
            {this.state.cards.map(card => {
              return (
                <ChoiceCard onClick={() => this.handleCardClick(card.id) } card={card} key={card.id} />
              )
            })}
          </div>
          <button 
          onClick={this.atLeastOneCardIsChecked() ? this.handleValidationClick : this.props.hideChoiceModal} className="validation-button">
            {this.atLeastOneCardIsChecked() ? 'Découvrir le quartier qui correspond à mes besoins !' : 'Juste la carte, merci !'}
          </button>
        </div>
      </div>
    );
  }

  atLeastOneCardIsChecked() {
    let checked = false;
    this.state.cards.forEach(card => {
      if (card.checked) {
        checked = true;
      }
    })
    return checked
  }

  handleCardClick(cardId) {
    this.setState(prevState => ({
      cards: prevState.cards.map(card => card.id === cardId ? {...card, checked: !card.checked} : card)
    }))
  }

  handleValidationClick() {
    if (!(this.atLeastOneCardIsChecked())) {
      return false;
    }

    const checkedCards = this.state.cards.filter(card => card.checked)
    console.log(checkedCards)
    this.props.hideChoiceModal()
    this.props.saveCards(checkedCards)
  }
}

export default ChoiceModal