import React from 'react'
import DistrictModal from './components/DistrictModal/DistrictModal.js'
import Map from './components/Map/Map.js'
import InfoModal from './components/InfoModal/InfoModal.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checkedCards: null,
      mapIsBlurred: true,
      currentDistrict: null,
      districts: [],
      averages: [],
      choiceModalIsVisible: true
    }
    
    this.saveCards = this.saveCards.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleMapClick = this.handleMapClick.bind(this)
    this.goBack = this.goBack.bind(this)
    this.openChoiceModal = this.openChoiceModal.bind(this)
    this.hideChoiceModal = this.hideChoiceModal.bind(this)
  }

  componentDidMount() {
    fetch("https://127.0.0.1:8000/district")
    .then(res => res.json())
    .then((result) => {
      this.setState({
        districts: result.districts,
        averages: result.average_notes
      }, () => {
        console.log(this.state.districts)
        console.log(this.state.averages)
      })
    })
  }

  render() {
    return (
      <main className="app">
        <div className={`content ${this.state.mapIsBlurred ?  'blurred' : ''}`}>
          <DistrictModal 
          openChoiceModal={this.openChoiceModal}
          hideChoiceModal={this.hideChoiceModal} 
          choiceModalIsVisible={this.state.choiceModalIsVisible}
          saveCards={this.saveCards}
          checkedCards={this.state.checkedCards} 
          districts={this.state.districts} 
          highlightDistrict={this.highlightDistrict} 
          unhighlightDistrict={this.unhighlightDistrict}
          handleCardClick={this.handleCardClick} 
          goBack={this.goBack} 
          currentDistrict={this.state.currentDistrict} 
          />
          <Map handleMapClick={this.handleMapClick} />1
          <InfoModal isVisible={this.state.choiceModalIsVisible} />
        </div>
      </main>

    );
  }
  
  handleMapClick(districtId) {
    const district = this.state.districts.find(district => parseInt(district.district) === districtId)
    
    this.handleCardClick(district)
  }

  handleCardClick(district) {
    if (this.state.currentDistrict !== null) {
      this.unhighlightDistrict(this.state.currentDistrict)
    }

    this.setState({
      currentDistrict: district
    })

    this.highlightDistrict(district)
  }

  goBack() {
    this.unhighlightDistrict(this.state.currentDistrict)
    
    this.setState({
      currentDistrict: null
    })
  }

  saveCards(cards) {
    this.setState({
      checkedCards: cards
    }, function() {
    })
  }

  highlightDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.add('favorite')
  }

  unhighlightDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.remove('favorite')
  }

  hideChoiceModal() {
    this.setState({
      choiceModalIsVisible: false
    })
  }

  openChoiceModal() {
    this.setState({
      choiceModalIsVisible: true
    })
  }
}

export default App