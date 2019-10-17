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

function updateDisplay (text) {
  const el = document.querySelector('#display')  
  el.textContent = text
}

const url = 'https://swapi.co/api/planets/1'

writeToPage('Loading...')


fetch(url)
  .then(response => {return response.json()
  .then(results =>{
    console.log(results)
  const keys = Object.keys(results)
  console.log(keys);
  keys.forEach( function(x) {
    const values = results[x]
    console.log(values, x)
    writeToPage(x)
    writeToPage2(values)
    console.log(keys, x)
  })
  })
})