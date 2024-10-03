import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    status: false,
  }

  onChangeEmoji = () => {
    this.setState({status: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {status} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {status ? (
            <div>
              <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
              <h1 className="heading">Thank You!</h1>
              <p className="content">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {emojis.map(eachemoji => (
                  <li key={eachemoji.name}>
                    <img
                      src={eachemoji.imageUrl}
                      alt={eachemoji.name}
                      onClick={this.onChangeEmoji}
                      className="emoji"
                    />
                    <p className="content">{eachemoji.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback