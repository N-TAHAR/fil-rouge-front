import React from 'react'
import {zipCodeToId, getCategoryNameFromIndex, getDistrictName} from '../../services/utils'
import ChartComp from './ChartComp'

class ChartsModal extends React.Component {
  
  render() {
    if (this.props.district === null) {
      return <div className="charts-modal"> </div>;
    }
    return (
      <div className={`charts-modal ${this.props.district === null ? '' : 'is-open'}`}>
        <div className="wrapper">
          <div className="go-back" onClick={this.props.onClick}></div>
          <div className="filter">
            {zipCodeToId(this.props.district.district)} <span className="abréviation"> {zipCodeToId(this.props.district.district) !== '1' ? 'ème' : 'er'}</span> — {getDistrictName(zipCodeToId(this.props.district.district))}
          </div>
          <div className="modal-content">
            {Object.values(this.props.district.notes).map((note, index) => {
              return (
                <ChartComp key={getCategoryNameFromIndex(index)} note={note} name={getCategoryNameFromIndex(index)} />
              )
            })}
          </div>
        </div>
      </div>

    );
  }
}

export default ChartsModal