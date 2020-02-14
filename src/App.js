import React from 'react'
import ChoiceModal from './components/ChoiceModal'
import DistrictModal from './components/DistrictModal'
import Map from './components/Map'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checkedCards: null,
      mapIsBlurred: true,
      currentDistrict: null,
      districts: []
    }
    
    this.saveCards = this.saveCards.bind(this)
    this.unblurMap = this.unblurMap.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleMapClick = this.handleMapClick.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/district")
    .then(res => res.json())
    .then((result) => {
      this.setState({
        districts: result
      }, () => {
        console.log(this.state.districts)
      })
    })
  }

  render() {
    return (
      <main className="app">
        <ChoiceModal unblurMap={this.unblurMap} saveCards={this.saveCards}/>

        <div className={`content ${this.state.mapIsBlurred ?  'blurred' : ''}`}>
          <DistrictModal districts={this.state.districts} highlightDistrict={this.highlightDistrict} unhighlightDistrict={this.unhighlightDistrict} handleCardClick={this.handleCardClick} goBack={this.goBack} currentDistrict={this.state.currentDistrict} />
          <Map handleMapClick={this.handleMapClick} />
        </div>
      </main>

    );
  }
  
  handleMapClick(districtId) {
    console.log(districtId)
    const district = this.state.districts.find(district => parseInt(district.district) === districtId)
    console.log(district)
    
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
    })
  }

  unblurMap() {
    this.setState({
      mapIsBlurred: false
    })
  }

  highlightDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.add('highlighted')
  }

  unhighlightDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.remove('highlighted')
  }
}

export default App