import React from 'react'

class ChoiceCard extends React.Component {
  
  render() {
    return (
      <div onClick={this.props.onClick} className="choice-card">
        <img src={require(`../assets/images/${this.props.card.imgName}.jpg`)} alt={this.props.card.title} />
        <div className={`card-title ${this.props.card.checked ? 'checked' : ''}`}>{this.props.card.title}</div>
      </div>

    );
  }
}

export default ChoiceCard