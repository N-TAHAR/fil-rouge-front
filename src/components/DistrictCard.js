import React from 'react'

class DistrictCard extends React.Component {
  
  render() {
    return (
      <div className="district-card">
        <div className="image-container">
          <img src={require(`../assets/images/${this.props.district.numero}.jpg`)} />
        </div>

        <div className="card-footer">
          <div className="card-name"> {this.props.district.numero}<span className="abréviation">{this.props.district.numero !== 1 ? 'ème' : 'er'}</span> arrondissement </div>

          <div className="rating">
            <div className="stars">
              <div className={`star ${this.props.district.noteGlobale > 0.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.noteGlobale > 1.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.noteGlobale > 2.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.noteGlobale > 3.5 ? 'checked' : ''}`}></div>
              <div className={`star ${this.props.district.noteGlobale > 4.5 ? 'checked' : ''}`}></div>
            </div>
              <div class="value">{this.props.district.noteGlobale} / 5.0</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DistrictCard