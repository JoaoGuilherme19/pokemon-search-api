import React from "react";
import "./styles/App.css";
import "./styles/submitName.css";
import {HandleSubmitName} from "./services/HandleSubmitName";
import { Home } from "./services/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();

    const content = document.querySelector("#content");

    content.innerHTML = `<p class='carregando'>Carregando...</p>`;

    content.innerHTML = await HandleSubmitName(
      this.state.value.toLowerCase().replaceAll(" ", "-"),
    );
  }

  async handleRan() {
    const randomMax = Math.round(Math.random() * (10249 - 10001)+10001);
    const randomMin = Math.round(Math.random() * 905);
    const random = Math.round(Math.random() * 1);

    const somePoke = [randomMin,randomMax]

    const content = document.querySelector("#content");

    content.innerHTML = await HandleSubmitName(somePoke[random]);
  }

  render() {
    return (
      <div className="outerApp">
        <button onClick={Home} className="home">
        <span className="material-symbols-outlined">home</span>
        </button>
        <form className="App" onSubmit={this.handleSubmit}>
          <img
            rel="preload"
            alt="title"
            src="https://pokedexproject1.herokuapp.com/images/Pokedex.png"
            className="titulo"
          />
          <input
            className="input"
            placeholder="Procure um pokemon"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        
          <input type="submit" value="Procurar" className="submit" />
        </form>
        <button onClick={this.handleRan} className="random">
            <span className="material-symbols-outlined">casino</span>
          </button>
      </div>
    );
  }
}

export default App;
