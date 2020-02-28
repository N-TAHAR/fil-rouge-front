import React from 'react'

class RatingModal extends React.Component {
  
  render() {
    return (
    <div className={`info-modal rating-modal ${this.props.isVisible ? '' : 'hidden'}`}>
      <div className="wrapper">
        <div className="window">
          <div className="close" onClick={this.props.hideRatingModal}></div>
          <h2>Comment sont calculés les scores ?</h2>
          <p>
            Les scores sont calculés d'après les données collectées sur le site <a href="https://opendata.paris.fr">opendata.paris.fr</a>. Chaque critère possède son propre algorithme de calcul.

            <ul>
              <li>
                <h3>Espaces verts</h3>
                <p>Nous vous indiquerons l’arrondissement avec la plus grande surface d’espace vert par rapport à sa surface totale.</p>
              </li>
              <li>
                <h3>Évènement</h3>
                <p>Nous comparons l’activité des arrondissements en énumérant le nombre d’activités recensées dans les mairies, qu’elles soient privées ou publique.</p>
              </li>
              <li>
                <h3>Stations Vélib</h3>
                <p>Nous prenons en compte la facilité d’accès aux bornes vélib en comparant le nombre de bornes disponible entre les différents arrondissement de Paris</p>
              </li>
              <li>
                <h3>Bornes wifi</h3>
                <p>Nous comparons la couverture sans fil en libre d’accès en énumérant le nombre de bornes wifi publique disponibles dans l’arrondissement.</p>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    )
  }
}

export default RatingModal