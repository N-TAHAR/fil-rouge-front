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
    }
    
    this.saveCards = this.saveCards.bind(this)
    this.unblurMap = this.unblurMap.bind(this)
  }
  render() {
    return (
      <main className="app">
        <ChoiceModal unblurMap={this.unblurMap} saveCards={this.saveCards}/>

        <div className={`content ${this.state.mapIsBlurred ?  'blurred' : ''}`}>
          <DistrictModal />
          <Map />
        </div>
      </main>

    );
  }

  saveCards(cards) {
    this.setState({
      checkedCards: cards
    }, () => {
      console.log(this.state.checkedCards)
    })
  }

  unblurMap() {
    this.setState({
      mapIsBlurred: false
    })
  }
}

export default App