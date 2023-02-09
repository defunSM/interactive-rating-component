# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Rating Component](https://i.imgur.com/325INw6.png)
![Thank You Component](https://i.imgur.com/GBNnThg.png)

### Links

- Solution URL: [frontendmentor](https://www.frontendmentor.io/solutions/interactiveratingcomponentwithreact-ga0GWZulYu)
- Live Site URL: [interactive-rating-component](https://sparkly-parfait-c0dbb8.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

To run Local:
> npm run start

### What I learned

Some components and CSS code snippets:

```js
function ThankYouComponent(props) {
  return (
    <div className="popup">
      <div className="thank-you-image"><img src={thankyou} alt="thankyou" width="200"></img></div>
      <div className="rating-header">You selected out {props.rating} of 5</div>
      <div className="thank-you-header">Thank you!</div>
      <div className="thank-you-description">
        We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!
      </div>
    </div>
  )
}
```
```css
background: rgb(31,38,48);
background: linear-gradient(180deg, rgba(31,38,48,1) 0%, rgba(32,39,49,1) 35%, rgba(23,30,40,1) 100%);
```
```js
function RatingComponent(props) {

  function changeRating() {
    props.onClick(props.number)
  }

  const isSelected = props.rating === props.number ? "rating-button active-rating" : "rating-button"

  return (
    <button onClick={() => changeRating()} className={isSelected}>{props.number}</button>
  )
}
```
## Author

- Website - [defunsm](https://www.defunsm.com)
- Frontend Mentor - [@defunSM](https://www.frontendmentor.io/profile/defunSM)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

