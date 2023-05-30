import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  lightDarkMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const className = isDarkMode ? 'darkMode' : 'lightMode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card ${className}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div style={{textAlign: 'center'}}>
            <button type="button" className="btn" onClick={this.lightDarkMode}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
