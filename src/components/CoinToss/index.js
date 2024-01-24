// Write your code here
import {Component} from 'react'
import './index.css'

const imagesList = [
  'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  'https://assets.ccbp.in/frontend/react-js/tails-img.png',
]
class CoinToss extends Component {
  state = {imageUrl: imagesList[0], heads: 0, tails: 0}

  onClickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
    this.setState({imageUrl: imagesList[tossResult]})
  }

  render() {
    const {imageUrl, heads, tails} = this.state

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="ht">Heads (or) Tails</p>
          <img
            src={imageUrl}
            alt="toss result"
            height="100px"
            width="100px"
            className="image"
          />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="a">
            <p className="count">Total: {heads + tails}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
