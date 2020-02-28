import React from 'react'
import {zipCodeToId, getDistrictName, getDistrictDescription, getAthleticEvents} from '../../services/utils'
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
          <div className="modal-header">
            {zipCodeToId(this.props.district.district)} <span className="abréviation"> {parseInt(zipCodeToId(this.props.district.district)) !== 1 ? 'ème' : 'er'}</span> — {getDistrictName(zipCodeToId(this.props.district.district))}
          </div>
          <div className="modal-content">
            <img alt="" class="background-image" src={require(`../../assets/images/${this.props.district.district}.jpg`)} />
            <div className="section">
              <h2>{zipCodeToId(this.props.district.district)} <span className="abréviation"> {zipCodeToId(this.props.district.district) !== 1 ? 'ème' : 'er'}</span> arrondissement</h2>
              <div class="grey-text">Note globale</div>
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
            <hr />
            <div className="section">
              {getDistrictDescription(zipCodeToId(this.props.district.district))}
            </div>
            <hr />
            <div className="section">
              <h2>Épreuves sportives</h2>
              <div class="grey-text">
                {getAthleticEvents(zipCodeToId(this.props.district.district))}
              </div>
            </div>
            <hr />
            {Object.values(this.props.district.notes).map(category => {
              return (
                <ChartComp averageNotes={this.props.averageNotes} key={category.name} category={category} />
              )
            })}
            <hr />
            <div onClick={this.props.showRatingModal} class="blue-text"> Comment sont calculés les scores ?</div>
          </div>
        </div>
      </div>

    );
  }
}

export default ChartsModal