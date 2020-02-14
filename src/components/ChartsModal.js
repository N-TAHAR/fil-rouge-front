import React from 'react'
import {zipCodeToId} from '../services/utils'

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
            {zipCodeToId(this.props.district.district)} <span className="abréviation"> {zipCodeToId(this.props.district.district) !== '1' ? 'ème' : 'er'}</span> arrondissement
          </div>
          <div className="modal-content">
            
          </div>
        </div>
      </div>

    );
  }
}

export default ChartsModal