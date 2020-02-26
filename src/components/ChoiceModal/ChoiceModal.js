import React from 'react'
import ChoiceCard from './ChoiceCard'

class ChoiceModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "J'ai envie d'air pur",
          value: "air",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 1
        },
        {
          title: "Je veux me déplacer en vélo",
          value: "velo",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 2
        },
        {
          title: "J'aime sortir le soir",
          value: "sortir",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 3
        },
        {
          title: "Je veux prendre le métro",
          value: "metro",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 4
        },
        {
          title: "Je veux du wifi",
          value: "wifi",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité de wifi pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 5
        },
        {
          title: "Je veux être proche de la nature",
          value: "nature",
          description: "Nous allons chercher les arrondissements avec la meilleure qualité d'air pour assurer votre bien-être durant les Jeux Olympiques",
          imgName: 'nature',
          checked: false,
          id: 6
        },
      ],
      isVisible: true
    };

    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleValidationClick = this.handleValidationClick.bind(this)
    this.AtLeastOneCardIsChecked = this.AtLeastOneCardIsChecked.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  
  render() {
    return (
      <div className={`choice-modal ${this.state.isVisible ? '' : 'hidden'}`}>
        <h1> Que recherchez-vous à Paris ?</h1>
        <div className="cards">
          {this.state.cards.map(card => {
            return (
              <ChoiceCard onClick={() => this.handleCardClick(card.id) } card={card} key={card.id} />
            )
          })}
        </div>
        <div className="buttons">
          <button title={this.AtLeastOneCardIsChecked() ? '' : 'Veuillez sélectionner au moins une carte pour continuer.'} onClick={this.handleValidationClick} className={`primary ${this.AtLeastOneCardIsChecked() ? '' : 'disabled'}`}> OK </button>
          <button onClick={this.hideModal} className="secondary"> Ignorer cette étape </button>
        </div>  
      </div>
    );
  }

  AtLeastOneCardIsChecked() {
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
    if (!(this.AtLeastOneCardIsChecked())) {
      return false;
    }

    const checkedCards = this.state.cards.filter(card => card.checked)
    this.props.saveCards(checkedCards)
    this.hideModal()
  }

  hideModal() {
    this.setState({
      isVisible: false
    })
    
    this.props.unblurMap()
  }
}

export default ChoiceModal