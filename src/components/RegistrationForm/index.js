// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmit: true,
    firstName: '',
    secondName: '',
    err1: false,
    err2: false,
  }

  onAnotherSubmit = () => {
    this.setState(prevState => ({
      isSubmit: !prevState.isSubmit,
      firstName: '',
      secondName: '',
    }))
  }

  onSubmitBtn = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName !== '' && secondName !== '') {
      this.setState(prevState => ({
        isSubmit: !prevState.isSubmit,
      }))
    } else {
      this.eventHandler1()
      this.eventHandler2()
    }
  }

  eventHandler1 = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({err1: true})
    } else {
      this.setState({err1: false})
    }
  }

  eventHandler2 = () => {
    const {secondName} = this.state
    if (secondName === '') {
      this.setState({err2: true})
    } else {
      this.setState({err2: false})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({secondName: event.target.value})
  }

  render() {
    const {isSubmit, firstName, secondName, err1, err2} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Registration</h1>
          {isSubmit ? (
            <form className="card" onSubmit={this.onSubmitBtn}>
              <label htmlFor="first1" className="label">
                FIRST NAME
              </label>
              <input
                onChange={this.onChangeFirstName}
                id="first1"
                type="text"
                value={firstName}
                className="input"
                onBlur={this.eventHandler1}
                placeholder="First name"
              />
              {err1 ? <p className="error-msg">Required</p> : ''}
              <label htmlFor="second1" className="label">
                Last NAME
              </label>
              <input
                type="text"
                id="second1"
                value={secondName}
                className="input"
                onBlur={this.eventHandler2}
                onChange={this.onChangeSecondName}
                placeholder="Last name"
              />
              {err2 ? <p className="error-msg">Required</p> : ''}
              <button type="submit" className="btn">
                submit
              </button>
            </form>
          ) : (
            <div className="card1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="img"
              />
              <p className="result">Submitted Successfully</p>
              <button
                className="btn1"
                type="button"
                onClick={this.onAnotherSubmit}
              >
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
