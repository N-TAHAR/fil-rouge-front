import React from 'react'
import DistrictCard from './DistrictCard'
import ChartsModal from '../ChartModal/ChartsModal'

class DistrictModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterMode: 'note',
    }

    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sorteredDistricts = this.sorteredDistricts.bind(this)

  }

  render() {
    return (
      <div className="district-modal">
        <select onChange={this.handleChange}>
          <option value="note">Note</option>
          <option value="arrondissements">Arrondissements</option>
        </select>
        <button className="filters" onClick={this.props.openChoiceModal}> Filtres </button>
        <div className="modal-content">
          <div className="district-cards">
          {this.props.currentDistrict === null && this.sorteredDistricts()}
          </div>
          </div>
        <ChartsModal onClick={this.props.goBack} district={this.props.currentDistrict} />
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
            note += district.notes.green_space_note
          }
          if (card.value === 'sortir') {
            note += district.notes.event_note
          }
          if (card.value === 'velo') {
            note += district.notes.velib_note
          }
          if (card.value === 'wifi') {
            note += district.notes.wifi_note
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

  handleFilterClick() {
    let newFilterState
    if (this.state.filterMode === 'note') {
      newFilterState = 'arrondissements'
    } else {
      newFilterState = 'note'
    }
    this.setState({
      filterMode: newFilterState
    })
  }
}

export default DistrictModal