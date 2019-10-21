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
  height: 80vh;
  max-width: 90vw;
  background-image: url("https://images.unsplash.com/photo-1532007195987-bb4ddeaf052d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80");
  background-repeat: no-repeat;
  background-position: top;
  display: block;
  z-index:0;
  `
  document.body.appendChild(adviceContainer)
}

writeAdviceToPageContainter()

function writeAdviceToPage(text) {
  let locateadviceDiv = document.querySelector('#adviceBox')
  let adviceDiv = document.createElement('div')
  adviceDiv.id = 'adviceDisplay'
  adviceDiv.style = `
    color: white;
    font-family: 'Raleway', sans-serif;
    display: block;
    text-align: center;
    z-index:1;
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
    if(results === "Not Found") {
        throw "uh oh"
      } 
      else {
  const keys = Object.keys(results)
  console.log(results)
  keys.forEach( function(x) {
    const values = results[x]
    updateAdviceDisplay(values.advice)
    })
  }  
})
})

.catch(err => {
  updateAdviceDisplay("Owl be back with more advice shortly!")
  console.log(err)
  })

/*create button*/
const locateButton = document.querySelector("#adviceImage")
const createButton = document.createElement('button')
locateButton.appendChild(createButton)
createButton.textContent = 'Get Advice'
createButton.id = 'adviceButton'

/*make button work*/
const generateAdvice = document.querySelector('#adviceImage')
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

