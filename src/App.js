import star from './images/icon-star.svg'
import thankyou from './images/illustration-thank-you.svg'
import './App.css';
import { useState } from 'react'

function RatingComponent(props) {

  function changeRating() {
    props.onClick(props.number)
  }

  const isSelected = props.rating === props.number ? "rating-button active-rating" : "rating-button"

  return (
    <button onClick={() => changeRating()} className={isSelected}>{props.number}</button>
  )
}

function ThankYouComponent(props) {
  return (
    <div className="popup">
      <img src={thankyou} alt="thankyou" width="200"></img>
      <div className="rating-header">You selected out {props.rating} of 5</div>
      <div className="thank-you-header">Thank you!</div>
      <div className="thank-you-description">
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </div>
  </div>
  )
}

function App() {

  const [ selectedRating, setSelectedRating ] = useState(null)
  const [ isSubmit, setIsSubmit ] = useState(false)

  function onSubmit() {
    if(selectedRating) {
      setIsSubmit(true)
    }
  }

  if (isSubmit) {
    return <ThankYouComponent rating={selectedRating}></ThankYouComponent>
  }

  return (
    <div className="container">
      <div className="star"><img src={star} alt="star"></img></div>
      <div className="header">How did we do?</div>
      <div className="description">
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </div>

      <div className="ratings-section">
        <RatingComponent rating={selectedRating} onClick={setSelectedRating} number="1"></RatingComponent>
        <RatingComponent rating={selectedRating} onClick={setSelectedRating} number="2"></RatingComponent>
        <RatingComponent rating={selectedRating} onClick={setSelectedRating} number="3"></RatingComponent>
        <RatingComponent rating={selectedRating} onClick={setSelectedRating} number="4"></RatingComponent>
        <RatingComponent rating={selectedRating} onClick={setSelectedRating} number="5"></RatingComponent>
      </div>
      <div className="submit-container"><button className="submit-button" onClick={() => onSubmit()}>SUBMIT</button></div>
    </div>)
}

export default App;
