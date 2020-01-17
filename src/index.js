import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as vert from "./espaces_verts.json";

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    console.log(vert[0].fields.adresse_codepostal)
    fetch('https://127.0.0.1:8000/GreenSpaces')
      .then(response => response.json())
      .then(data => this.setState({ data: data }, () => console.log(this.state.data) ));
  }

  data(){
    if(this.state.data){
      return this.state.data.map( data => 
        <ul>
          <li>{data.id}</li>
          <li>{data.district}</li>
        </ul>
      )
    }
  }

  render() {
    return (
      <div>
        { this.data() }
      </div>

    );
  }
}

// ========================================

ReactDOM.render(
  <Data />,
  document.getElementById('root')
);
