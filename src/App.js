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
      districts: [
        {
          numero: 2,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4.2,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 12,
          noteGlobale: 3.4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 7,
          noteGlobale: 5,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 5,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 3,
          noteGlobale: 0,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 19,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 20,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 1,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 18,
          noteGlobale: 2.2,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 17,
          noteGlobale: 3,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
      ]
    }
    
    this.saveCards = this.saveCards.bind(this)
    this.unblurMap = this.unblurMap.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleMapClick = this.handleMapClick.bind(this)
    this.goBack = this.goBack.bind(this)
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
    const district = this.state.districts.find(district => district.numero === districtId)
    
    this.handleCardClick(district)
  }

  handleCardClick(district) {
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
    document.querySelector(`g.full-${district.numero}`).classList.add('highlighted')
  }

  unhighlightDistrict(district) {
    document.querySelector(`g.full-${district.numero}`).classList.remove('highlighted')
  }
}

export default App