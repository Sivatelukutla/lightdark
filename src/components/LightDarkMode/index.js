// Write your code here
import {Component} from 'react'
import './index.css'
class LightDarkMode extends Component {
  state = {
    isValid: true,
  }

  darkMode = () => {
    this.setState(prevState => ({
      isValid: !prevState.isValid,
    }))
  }

  render() {
    const {isValid} = this.state
    const buttonText = isValid ? 'Light Mode' : 'Dark Mode'
    const result = isValid ? 'mode' : 'dark'
    return (
      <div className="bg-container">
        <div className={`card-container ${result}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.darkMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
