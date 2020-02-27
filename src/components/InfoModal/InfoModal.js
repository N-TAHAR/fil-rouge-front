import React from 'react'

class InfoModal extends React.Component {
  
  render() {
    return (
    <div className={`info-modal ${this.props.isVisible ? '' : 'hidden'}`}>
      <div className="wrapper">
        <div class="window">
          <h2>Le principe</h2>
          <p>Sélectionnez <strong>un ou plusieurs éléments</strong> en fonction de vos préférences, nous vous recommanderons ensuite les arrondissements qui correspondent à vos préférences.</p>
        </div>
      </div>
    </div>
    )
  }
}

export default InfoModal