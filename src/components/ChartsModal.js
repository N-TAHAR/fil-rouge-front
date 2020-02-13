import React from 'react'

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
            {this.props.district.numero} <span className="abréviation">{this.props.district.numero !== 1 ? 'ème' : 'er'}</span> arrondissement
          </div>
          <div className="modal-content">
            test test test test test test test test test test test test test test vv vtest test
          </div>
        </div>
      </div>

    );
  }
}

export default ChartsModal