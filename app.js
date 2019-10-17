//nav menu
const menuAppear = document.querySelector(".menu")
const onClick = document.querySelector('.navMenu')
menuAppear.addEventListener('click', function() {
  console.log('appear')
  onClick.className = "navMenu openState"
})


const menuDissappear = document.querySelector(".close")
const closeClick = document.querySelector('.navMenu')
menuDissappear.addEventListener('click', function() {
  console.log('dissappear')
  onClick.className = "navMenu closedState"
})


// advice API

function writeAdviceToPageContainter() {
  let adviceContainer = document.createElement('div')
  adviceContainer.id = 'adviceImage'
  adviceContainer.style = `
  height: 100vh;
  min-width: 100vh;
  background-image: url("https://images.unsplash.com/photo-1544724677-744ce69a22c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1659&q=80");
  background-repeat: no-repeat;
  backgound-size: cover;
  z-index:0;
  `
  document.body.appendChild(adviceContainer)
}
writeAdviceToPageContainter()

function writeAdviceToPage(text) {
  let locateadviceDiv = document.querySelector('#adviceImage')
  let adviceDiv = document.createElement('div')
  adviceDiv.id = 'adviceDisplay'
  adviceDiv.style = `
    padding: 20px 40px;
    border-radius: 5px;
    color: black;
    font-family: sans-serif;
    font-size: 25px;
    display: block;
    max-width: 20em;
    z-index:1;
    position: relative;
    top: 10em;
    left: 20em;
  `
  adviceDiv.textContent = text
  locateadviceDiv.appendChild(adviceDiv)
}

function updateAdviceDisplay (text) {
  let adviceDiv = document.querySelector('#adviceDisplay')  
  adviceDiv.textContent = text
}


const url = 'https://api.adviceslip.com/advice'

writeAdviceToPage('Loading...')


fetch(url)
  .then(response => {return response.json()
  .then(results =>{
  const keys = Object.keys(results)
  keys.forEach( function(x) {
    const values = results[x]
    updateAdviceDisplay(values.advice)
    })
  })
})


//advice menu

/*create button*/
const locateButton = document.querySelector("#adviceImage")
const createButton = document.createElement('button')
locateButton.appendChild(createButton)
createButton.textContent = 'Get Advice'
createButton.id = 'adviceButton'
createButton.style = `
z-index=1;
backgroundColor=black;
color=white
width=10em;
height=5em;
position: relative;
top: 100px;
left: 50em;
`
/*make button work*/
const generateAdvice = document.querySelector('#adviceButton')
generateAdvice.addEventListener('click', function() {
fetch(url)
  .then(response => {return response.json()
  .then(results =>{
  const keys = Object.keys(results)
  keys.forEach( function(x) {
    const values = results[x]
    updateAdviceDisplay(values.advice)
    })
  })
})
})
// generateAdvice.addEventListener('click', keys.forEach( function(x) {
//   const values = results[x]
//   updateAdviceDisplay(values.advice)
//   }))
  // onClick.className = "navMenu closedState"
