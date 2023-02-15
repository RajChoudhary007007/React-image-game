import './index.css'

const Header = props => {
  const {clickedCardList, timer} = props

  return (
    <div className="header-main-container">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <div className="timer-container">
        <p className="card-length">score:{clickedCardList}</p>
        <img
          className="timer"
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
          alt="timer"
        />
        <p className="card-length">
          {timer} <spam className="spam">Sec</spam>
        </p>
      </div>
    </div>
  )
}
export default Header
