
function writeToPage(text) {
  let el = document.createElement('div')
  el.id = 'display'
  el.style = `
    padding: 20px 40px;
    border-radius: 5px;
    background: #222;
    color: white;
    font-family: sans-serif;
    display: block;
    max-width:20em;
  `
  el.textContent = text
  document.body.appendChild(el)
}

function writeToPage2(text) {
  let el = document.createElement('div')
  el.id = 'display'
  el.style = `
    padding: 20px 40px;
    border-radius: 5px;
    background: grey;
    color: white;
    font-family: sans-serif;
    display: block;
    max-width:20em;
  `
  el.textContent = text
  document.body.appendChild(el)
}

function writeToPage3(text) {
  let el = document.createElement('div')
  el.id = 'display'
  el.style = `
    padding: 20px 40px;
    border-radius: 5px;
    background: red;
    color: white;
    font-family: sans-serif;
    display: block;
    max-width:20em;
  `
  el.textContent = text
  document.body.appendChild(el)
}

function updateDisplay (text) {
  const el = document.querySelector('#display')  
  el.textContent = text
}

// const url = 'https://swapi.co/api/planets/1'

// writeToPage('Loading...')


// fetch(url)
//   .then(response => {return response.json()
//   .then(results =>{
//     console.log(results)
//   const keys = Object.keys(results)
//   /*just the value*/
//   console.log(results.name)
//   console.log(results.diameter)
//   writeToPage3(results.name)

//   console.log(keys);
//   keys.forEach( function(x) {
//     const values = results[x]
//     console.log(values, x)
//     writeToPage(x)
//     writeToPage2(values)

//     console.log(keys, x)
//   })
//   })
// })



// advice API

function writeAdviceToPageContainter() {
  let adviceContainer = document.createElement('img')
  adviceContainer.id = 'adviceImage'
  adviceContainer.style = `
  height: 50vh;
  width: 900px;
  background-image: url("")
  `
  document.body.appendChild(adviceContainer)
}
writeAdviceToPageContainter()

function writeAdviceToPage(text) {
  let adviceDiv = document.createElement('div')
  adviceDiv.id = 'adviceDisplay'
  adviceDiv.style = `
    padding: 20px 40px;
    border-radius: 5px;
    background: black;
    color: black;
    font-family: sans-serif;
    display: block;
    max-width:20em;
  `
  adviceDiv.textContent = text
  document.body.appendChild(adviceDiv)
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
