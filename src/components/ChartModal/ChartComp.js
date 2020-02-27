import React from 'react'
import { search } from '../../services/utils'

class ChartComp extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="chart">
        <div class="wrapper">
          <div class="rating">{this.props.category.note}</div>
          <svg viewBox="0 0 120 120" class="gauge">
            <circle class="base" r="56" cx="60" cy="60"></circle>
            <circle style={{strokeDasharray: `${this.props.category.note * 70}, 352`}} class="arc" transform="rotate(-90 60 60)" r="56" cx="60" cy="60"></circle>
          </svg>
        </div>
        <div class="chart-description">
          <h2 class="chart-name">
            {this.props.category.name}
          </h2>
          <div class="grey-text">Moyenne de cette catégorie : <strong>{ search(this.props.category.name, this.props.averageNotes).note }</strong></div>
        </div>
      </div>
    )
  }
}

export default ChartComp