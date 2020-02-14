import React from 'react'
import DistrictCard from './DistrictCard'
import ChartsModal from './ChartsModal'

class DistrictModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterMode: 'note',
    }

    this.handleFilterClick = this.handleFilterClick.bind(this)

  }

  render() {
    return (
      <div className="district-modal">
        <div onClick={this.handleFilterClick} className="filter"> Trier par <span className="filter-mode">{this.state.filterMode}</span>
        </div>
        <div className="modal-content">
          <div className="district-cards">
          {this.props.currentDistrict === null &&
          this.props.districts.map(district => {
            return (
              <DistrictCard 
              onMouseEnter={() => { this.props.highlightDistrict(district) }}
              onMouseLeave={() => { this.props.unhighlightDistrict(district) }} onClick={() => this.props.handleCardClick(district) } district={district} key={district.district} />
            )
          })}
          </div>
          </div>
        <ChartsModal onClick={this.props.goBack} district={this.props.currentDistrict} />
      </div>
    )
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