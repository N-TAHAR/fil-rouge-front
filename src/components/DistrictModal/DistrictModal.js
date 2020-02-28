import React from 'react'
import DistrictCard from './DistrictCard'
import ChartsModal from '../ChartModal/ChartsModal'
import ChoiceModal from '../ChoiceModal/ChoiceModal'

class DistrictModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterMode: 'note'
    }

    this.handleChange = this.handleChange.bind(this)
    this.sorteredDistricts = this.sorteredDistricts.bind(this)

  }

  render() {
    return (
      <div className={`district-modal ${this.props.choiceModalIsVisible ? 'hidden' : ''}`}>
        <div className="modal-header">
          <select onChange={this.handleChange}>
            <option value="note">Classer par note {this.props.checkedCards === null ? '' : '(en fonction de vos préférences)'}</option>
            <option value="arrondissements">Classer par arrondissements</option>
          </select>
          <button className="filters" onClick={this.props.openChoiceModal}> Filtres </button>
        </div>
        <div className="modal-content">
          <div className="district-cards">
          {this.props.currentDistrict === null && this.sorteredDistricts()}
          </div>
          </div>
        <ChoiceModal
        hideChoiceModal={this.props.hideChoiceModal} 
        isVisible={this.props.choiceModalIsVisible}
        saveCards={this.props.saveCards}
        />
        <ChartsModal
        onClick={this.props.goBack} 
        district={this.props.currentDistrict}
        averageNotes={this.props.averageNotes}
        showRatingModal={this.props.showRatingModal}
        />
      </div>
    )
  }

  sorteredDistricts() {
    let districts = this.props.districts

    if (this.props.checkedCards) {
      districts.forEach(district => {
        let note = 0
        this.props.checkedCards.forEach(card => {
          if (card.value === 'nature') {
            note += district.notes[0].note
          }
          if (card.value === 'sortir') {
            note += district.notes[1].note
          }
          if (card.value === 'velo') {
            note += district.notes[2].note
          }
          if (card.value === 'wifi') {
            note += district.notes[3].note
          }
        });
        district.ratingRelativeToCheckedCards = (note / this.props.checkedCards.length)
      })
    }

    if (this.state.filterMode === 'note') {

      if (this.props.checkedCards) {

        districts.sort(function(a, b) {
          return a.ratingRelativeToCheckedCards > b.ratingRelativeToCheckedCards ? -1 : 1
        })

      } else {
        
        districts.sort(function(a, b) {
          return a.global_note > b.global_note ? -1 : 1
        })
        
      }
      
    }

    if (this.state.filterMode === 'arrondissements') {
      districts.sort(function(a, b) {
        return a.district < b.district ? -1 : 1
      })
    }

    // if (this.props.checkedCards) {
    //   const max = Math.max.apply(Math, districts.map(function(district) { return district.ratingRelativeToCheckedCards; }))
    //   const district = districts.find(function(district){ return district.ratingRelativeToCheckedCards === max; })
    // }

    return (
      districts.map(district => {
        return (
          <DistrictCard 
          onMouseEnter={() => { this.props.highlightDistrict(district) }}
          onMouseLeave={() => { this.props.unhighlightDistrict(district) }} onClick={() => this.props.handleCardClick(district) } district={district} key={district.district} />
        )
      })
    )
  }

  handleChange(e) {
    this.setState({
      filterMode: e.target.value
    })
  }
}

export default DistrictModal