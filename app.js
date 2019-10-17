<<<<<<< HEAD
API Key
ysDsXaAmKyM7ZIHqY0GV82hRBGOekRlMVGopwoQj6zI9mlPjfg 
Secret
5gcrFTWK3FcK88pvVW7xTaTCPimT2JA8yoGfrHG4

curl -d "grant_type=client_credentials&client_id={ysDsXaAmKyM7ZIHqY0GV82hRBGOekRlMVGopwoQj6zI9mlPjfg}&client_secret={5gcrFTWK3FcK88pvVW7xTaTCPimT2JA8yoGfrHG4}" https://api.petfinder.com/v2/oauth2/token
=======
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
>>>>>>> 991bc3aaab639265169311890de2ba062d32ee2c
