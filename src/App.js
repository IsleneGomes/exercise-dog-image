import React from 'react';
import data from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    }
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((value) => value.json())
      .then((results) => this.setState({ data: results }));
  }

  render() {
    if (this.fetchDog === '') return ('loading...')
    return (
      <div>
        <h1>My List Of Dogs</h1>
        <section>
          <img src={this.state.data.message} alt="Dogs" />
        </section>
        <button type="button" onClick={this.fetchDog}>Next</button>
      </div>
    );

    }
  
}

export default App;
