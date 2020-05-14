import React, { Component, Fragment } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    displayIndex: 0,
    wallet: 100,
    eaten: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiList => {
      this.setState({sushis: sushiList})
    })
  }

  chooseFourSushi = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex + 4)
  }

  onMoreClick = () => {
    let newDisplayIndex = this.state.displayIndex + 4
    if(newDisplayIndex >= this.state.sushis.length){
      newDisplayIndex = 0
    }
    this.setState({displayIndex: newDisplayIndex})
  }

  onSushiClick = sushi => {
    let money = this.state.wallet - sushi.price
    if (money >= 0) {
      this.setState({
        wallet: money,
        eaten: [...this.state.eaten, sushi]
      })
    }
  }

  addMoney = event => {
    event.preventDefault()
    let money = parseInt(event.target.amount.value, 10)
    if(!money){money = 0}
    this.setState({wallet: money + this.state.wallet})
    document.querySelector("form").reset()
  }

  render() {
    return (
      <Fragment>
        <br></br>
        <form onSubmit={this.addMoney}>Add $ to Wallet:  
          <input type="text" name="amount" />
          <input type="submit" name="submit" />
        </form>
        <div className="app">
          <SushiContainer sushiList={this.chooseFourSushi()} onMoreClick={this.onMoreClick} onSushiClick={this.onSushiClick} eatenList={this.state.eaten} />
          <Table money={this.state.wallet} eaten={this.state.eaten} />
        </div>
      </Fragment>
    );
  }
}

export default App;