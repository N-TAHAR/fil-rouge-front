import React from 'react'

class ChoiceCard extends React.Component {
  
  render() {
    return (
      <div onClick={this.props.onClick} className={`choice-card  ${this.props.card.checked  ? 'checked' : ''}`}>
        <div className="icon">        
          <div className="tooltip">
            <h2>{this.props.card.title}</h2>
            <p> {this.props.card.description} </p>
          </div>
        </div>

        <div className="image-container">
          <img src={require(`../../assets/images/card_choice/${this.props.card.imgName}.jpg`)} alt={this.props.card.title} />
        </div>

        <div className="card-footer">
          <div className='card-name'>
            {this.props.card.title}
          </div>
        </div>
      </div>
    );
  }
}

export default ChoiceCard