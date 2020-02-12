import React from 'react'
import DistrictCard from './DistrictCard'
import ChartsModal from './ChartsModal'

class DistrictModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterMode: 'note',
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
      ],
      currentDistrict: null,
    }

    this.handleFilterClick = this.handleFilterClick.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  render() {
    return (
      <div className="district-modal">
        <div onClick={this.handleFilterClick} className="filter"> Trier par <span className="filter-mode">{this.state.filterMode}</span>
        </div>
        <div className="modal-content">
          {this.state.currentDistrict === null &&
          this.state.districts.map(district => {
            return (
              <DistrictCard 
              onMouseEnter={() => { this.highlightDistrict(district) }}
              onMouseLeave={() => { this.unhighlightDistrict(district) }} onClick={() => this.handleCardClick(district) } district={district} key={district.numero} />
            )
          })}
        </div>
        <ChartsModal onClick={this.goBack} district={this.state.currentDistrict} />
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

  highlightDistrict(district) {
    document.querySelector(`g.full-${district.numero}`).classList.add('highlighted')
  }

  unhighlightDistrict(district) {
    document.querySelector(`g.full-${district.numero}`).classList.remove('highlighted')
  }
}

export default DistrictModal