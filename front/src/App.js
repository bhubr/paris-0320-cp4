import React, { Component } from 'react'
import Gift from './components/GetGift'
import AddGift from './components/AddGift'
import logo from './logo.png'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gifts: []
    }

    this.removeGift = this.removeGift.bind(this)
  }

  removeGift () {

  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='Old Wild logo' />
          <h1 className='App-title'>It&apos;s Christmas !</h1>
        </header>
        <div className='GiftWrapper'>
          <AddGift/>
          <Gift remove={this.removeGift} />
        </div>

        {/* UNCOMMENT IF YOU'RE DOING THE BONUS */}
        {/* <button type='button' className='mail'> Dear Santa, send me my gifts!</button> */}

      </div>
    )
  }
}

export default App
