import React from 'react'
import {zipCodeToId, getDistrictName} from '../../services/utils'

class DistrictCard extends React.Component {
  
  render() {
    return (
      <div onClick={this.props.onClick} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} className="district-card">
        <div className="image-container">
          <img src={require(`../../assets/images/${this.props.district.district}.jpg`)} alt={getDistrictName(zipCodeToId(this.props.district.district))} />
        </div>

        <div className="card-footer">
          <div className="card-name"> {this.props.district.district} - {getDistrictName(zipCodeToId(this.props.district.district))} </div>

          <div className="rating">
            <div className="stars">
              <div className={`star ${this.props.district.global_note > 0.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.global_note > 1.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.global_note > 2.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.global_note > 3.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.global_note > 4.5 ? 'checked' : ''}`}></div>
            </div>
              <div className="value">{this.props.district.global_note} / 5</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DistrictCard