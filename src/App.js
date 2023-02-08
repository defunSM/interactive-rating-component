import star from './images/icon-star.svg'
import './App.css';

function RatingComponent(props) {
  return (
    <button className="rating-button">{props.number}</button>
  )
}

function App() {
  return (
    <div className="container">
      <div className="star"><img src={star} alt="star"></img></div>
      <div className="header">How did we do?</div>
      <div className="description">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </div>

      <div className="ratings-section">
        <RatingComponent number="1"></RatingComponent>
        <RatingComponent number="2"></RatingComponent>
        <RatingComponent number="3"></RatingComponent>
        <RatingComponent number="4"></RatingComponent>
        <RatingComponent number="5"></RatingComponent>
      </div>
      <div className="submit-container"><button className="submit-button">Submit</button></div>
      <div className="popup">
        You selected out of 5
        Thank you!
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </div>
    </div>)
}

export default App;
