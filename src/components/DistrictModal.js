import React from 'react'
import DistrictCard from './DistrictCard'

class DistrictModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      filterMode: 'note',
      interface: 'districts',
      districts: [
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
        {
          numero: 13,
          noteGlobale: 4,
          noteQualiteAir: 2,
          noteEspacesVerts: 5,
          noteVelo: 5
        },
      ]
    }

    this.handleFilterClick = this.handleFilterClick.bind(this)
  }

  render() {
    return (
      <div className="district-modal">
        <div onClick={this.handleFilterClick} className="filter"> Trier par <span className="filter-mode">{this.state.filterMode}</span>
        </div>
        <div className="modal-content">
          {this.state.interface === 'districts' &&
          this.state.districts.map(district => {
            return (
              <DistrictCard onClick={() => this.handleCardClick(district.numero) } district={district} key={district.numero} />
            )
          })}

          
        </div>
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