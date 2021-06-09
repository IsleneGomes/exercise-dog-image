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
      <div className="container">
        <h1 className="title">My List Of Dogs</h1>
        <section className="image">
          <img src={this.state.data.message} alt="Dogs" height="340px"/>
        </section>
        <br></br>
        <button className="button" type="button" onClick={this.fetchDog}>Next</button>
      </div>
    );
  } 
}

export default App;
