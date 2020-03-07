import React from 'react'
import DistrictModal from './components/DistrictModal/DistrictModal.js'
import Map from './components/Map/Map.js'
import InfoModal from './components/InfoModal/InfoModal.js'
import RatingModal from './components/RatingModal/RatingModal.js'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checkedCards: null,
      mapIsBlurred: true,
      currentDistrict: null,
      districts:[{"district":"75001","notes":[{"name":"Espace Vert","note":4.5},{"name":"\u00c9v\u00e8nement","note":1},{"name":"Station V\u00e9lib","note":1.4},{"name":"Qualit\u00e9 du wifi","note":1.6}],"global_note":2.1},{"district":"75002","notes":[{"name":"Espace Vert","note":1.4},{"name":"\u00c9v\u00e8nement","note":1.9},{"name":"Station V\u00e9lib","note":1},{"name":"Qualit\u00e9 du wifi","note":2}],"global_note":1.6},{"district":"75003","notes":[{"name":"Espace Vert","note":1.1},{"name":"\u00c9v\u00e8nement","note":1.1},{"name":"Station V\u00e9lib","note":1.6},{"name":"Qualit\u00e9 du wifi","note":1.7}],"global_note":1.4},{"district":"75004","notes":[{"name":"Espace Vert","note":1},{"name":"\u00c9v\u00e8nement","note":1.1},{"name":"Station V\u00e9lib","note":1.4},{"name":"Qualit\u00e9 du wifi","note":1}],"global_note":1.1},{"district":"75005","notes":[{"name":"Espace Vert","note":1.2},{"name":"\u00c9v\u00e8nement","note":1.4},{"name":"Station V\u00e9lib","note":1.4},{"name":"Qualit\u00e9 du wifi","note":2}],"global_note":1.5},{"district":"75006","notes":[{"name":"Espace Vert","note":2.2},{"name":"\u00c9v\u00e8nement","note":1.6},{"name":"Station V\u00e9lib","note":1.4},{"name":"Qualit\u00e9 du wifi","note":3.6}],"global_note":2.2},{"district":"75007","notes":[{"name":"Espace Vert","note":2.8},{"name":"\u00c9v\u00e8nement","note":4.3},{"name":"Station V\u00e9lib","note":2.5},{"name":"Qualit\u00e9 du wifi","note":2.9}],"global_note":3.1},{"district":"75008","notes":[{"name":"Espace Vert","note":5},{"name":"\u00c9v\u00e8nement","note":2.9},{"name":"Station V\u00e9lib","note":1.5},{"name":"Qualit\u00e9 du wifi","note":3.3}],"global_note":3.2},{"district":"75009","notes":[{"name":"Espace Vert","note":1.9},{"name":"\u00c9v\u00e8nement","note":2},{"name":"Station V\u00e9lib","note":1.1},{"name":"Qualit\u00e9 du wifi","note":2}],"global_note":1.8},{"district":"75010","notes":[{"name":"Espace Vert","note":1.4},{"name":"\u00c9v\u00e8nement","note":1.5},{"name":"Station V\u00e9lib","note":1.2},{"name":"Qualit\u00e9 du wifi","note":2.1}],"global_note":1.6},{"district":"75011","notes":[{"name":"Espace Vert","note":1.4},{"name":"\u00c9v\u00e8nement","note":1.3},{"name":"Station V\u00e9lib","note":1.4},{"name":"Qualit\u00e9 du wifi","note":2}],"global_note":1.5},{"district":"75012","notes":[{"name":"Espace Vert","note":2.9},{"name":"\u00c9v\u00e8nement","note":3.4},{"name":"Station V\u00e9lib","note":5},{"name":"Qualit\u00e9 du wifi","note":5}],"global_note":4.1},{"district":"75013","notes":[{"name":"Espace Vert","note":1.1},{"name":"\u00c9v\u00e8nement","note":2.2},{"name":"Station V\u00e9lib","note":2},{"name":"Qualit\u00e9 du wifi","note":2.2}],"global_note":1.9},{"district":"75014","notes":[{"name":"Espace Vert","note":1.3},{"name":"\u00c9v\u00e8nement","note":2.6},{"name":"Station V\u00e9lib","note":2.1},{"name":"Qualit\u00e9 du wifi","note":2.5}],"global_note":2.1},{"district":"75015","notes":[{"name":"Espace Vert","note":1.7},{"name":"\u00c9v\u00e8nement","note":2.9},{"name":"Station V\u00e9lib","note":2},{"name":"Qualit\u00e9 du wifi","note":4.3}],"global_note":2.7},{"district":"75016","notes":[{"name":"Espace Vert","note":1.6},{"name":"\u00c9v\u00e8nement","note":2.6},{"name":"Station V\u00e9lib","note":2.5},{"name":"Qualit\u00e9 du wifi","note":4.3}],"global_note":2.8},{"district":"75017","notes":[{"name":"Espace Vert","note":1.3},{"name":"\u00c9v\u00e8nement","note":5},{"name":"Station V\u00e9lib","note":1.9},{"name":"Qualit\u00e9 du wifi","note":4.6}],"global_note":3.2},{"district":"75018","notes":[{"name":"Espace Vert","note":1.2},{"name":"\u00c9v\u00e8nement","note":2.4},{"name":"Station V\u00e9lib","note":2},{"name":"Qualit\u00e9 du wifi","note":3}],"global_note":2.2},{"district":"75019","notes":[{"name":"Espace Vert","note":1.2},{"name":"\u00c9v\u00e8nement","note":1.3},{"name":"Station V\u00e9lib","note":2.2},{"name":"Qualit\u00e9 du wifi","note":2.5}],"global_note":1.8},{"district":"75020","notes":[{"name":"Espace Vert","note":1.1},{"name":"\u00c9v\u00e8nement","note":1.8},{"name":"Station V\u00e9lib","note":1.9},{"name":"Qualit\u00e9 du wifi","note":2.6}],"global_note":1.9}],
      averages: [{"name":"Espace Vert","note":1.9},{"name":"\u00c9v\u00e8nement","note":2.2},{"name":"Station V\u00e9lib","note":1.9},{"name":"Qualit\u00e9 du wifi","note":2.8}],
      choiceModalIsVisible: true,
      bestDistrict: null
    }
    
    this.saveCards = this.saveCards.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.handleMapClick = this.handleMapClick.bind(this)
    this.goBack = this.goBack.bind(this)
    this.openChoiceModal = this.openChoiceModal.bind(this)
    this.hideChoiceModal = this.hideChoiceModal.bind(this)
    this.showRatingModal = this.showRatingModal.bind(this)
    this.hideRatingModal = this.hideRatingModal.bind(this)
  }

  // componentDidMount() {
  //   fetch("https://127.0.0.1:8000/district")
  //   .then(res => res.json())
  //   .then((result) => {
  //     this.setState({
  //       districts: result.districts,
  //       averages: result.average_notes
  //     }, () => {
  //       console.log(this.state.districts)
  //       console.log(this.state.averages)
  //     })
  //   })
  // }

  render() {
    return (
      <main className="app">
        <div className='content'>
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
          averageNotes={this.state.averages}
          showRatingModal={this.showRatingModal}
          />
          <Map handleMapClick={this.handleMapClick} />1
          <InfoModal isVisible={this.state.choiceModalIsVisible} />
          <RatingModal isVisible={this.state.ratingModalIsVisible} hideRatingModal={this.hideRatingModal} />
        </div>
      </main>

    );
  }

  showRatingModal() {
    this.setState({
      ratingModalIsVisible: true
    })
  }

  hideRatingModal() {
    this.setState({
      ratingModalIsVisible: false
    })
  }
  
  handleMapClick(districtId) {
    const district = this.state.districts.find(district => parseInt(district.district) === districtId)
    
    this.handleCardClick(district)
  }

  handleCardClick(district) {
    if (this.state.currentDistrict !== null) {
      this.unfavoriteDistrict(this.state.currentDistrict)
      this.unhighlightDistrict(this.state.currentDistrict)
    }

    this.setState({
      currentDistrict: district
    })

    this.favoriteDistrict(district)
  }

  goBack() {
    this.unfavoriteDistrict(this.state.currentDistrict)
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

  favoriteDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.add('favorite')
  }

  unfavoriteDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.remove('favorite')
  }

  highlightDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.add('highlighted')
  }

  unhighlightDistrict(district) {
    document.querySelector(`g.full-${district.district}`).classList.remove('highlighted')
  }

  hideChoiceModal() {
    this.setState({
      choiceModalIsVisible: false,
      checkedCards: null
    })
  }

  openChoiceModal() {
    this.setState({
      choiceModalIsVisible: true
    })
  }
}

export default App