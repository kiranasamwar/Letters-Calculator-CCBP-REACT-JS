import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onClickText = event => {
    const {value} = event.target
    this.setState({
      inputText: value,
    })
  }

  render() {
    const {inputText} = this.state
    return (
      <div className="app-container">
        <div className="app-bg-container">
          <div className="input-container">
            <h1 className="label-heading"> Calculate the Letters you enter</h1>
            <label htmlFor="calculateText" className="label-heading">
              Enter the phrase
            </label>
            <input
              type="text"
              id="calculateText"
              className="input-box"
              onChange={this.onClickText}
              placeholder="Enter the phrase"
              value={inputText}
            />

            <p className="no-of-letters">No.of letters: {inputText.length}</p>
          </div>
          <div>
            <img
              className="image-logo"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
