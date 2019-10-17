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


//content


function getToken() {
  let formData = new FormData()
  formData.append('grant_type','client_credentials' )
  formData.append('client_id','ysDsXaAmKyM7ZIHqY0GV82hRBGOekRlMVGopwoQj6zI9mlPjfg' )
  formData.append('client_secret','5gcrFTWK3FcK88pvVW7xTaTCPimT2JA8yoGfrHG4' )


  const url = "https://api.petfinder.com/v2/oauth2/token"
  return fetch(url, {
      method: 'POST',
 
      body: formData
  })
  .then(x => {

    return x.json()})
    .then(results =>{
      return results.access_token
    })

}


const getSomething = (token) => {
  const url = 'https://api.petfinder.com/v2/animals?type=bird&page=2'
  const config = {
    headers: {
      'Authorization': 'Bearer  ' + token
    }
  }
  return fetch(url, config).then(x => x.json())
    
}


function work () {
 
}

// getToken().then(token => {
//     getSomething(token).then(x => {
//       // do someting
//       work(x)
//       console.log(x)
//     })
// })

getToken().then(token => {
  getSomething(token).then(x => {
    
    

    function writeToPage(text) {
      const el = document.createElement('div')
      el.id = 'Display'
      el.style = `
        padding: 20px 40px;
        border-radius: 5px;
        color: white;
        background-color: black;
        font-family: 'Kalam', cursive;
        font-size: 25px;
        display: block;
        text-align: center;
        max-width: 15em;
        z-index:1;
      `
      el.textContent = text
      document.body.appendChild(el)
    }
    
    function updateAdviceDisplay (text) {
      let adviceDiv = document.querySelector('#adviceDisplay')  
      adviceDiv.textContent = text
    }



    console.log(x.animals)
    const keys = x.animals
    console.log(keys)
    keys.forEach( function(x) {
      writeToPage(x.id)
      writeToPage(x.name)
      writeToPage(x.color)
      writeToPage(x.age)
      writeToPage(x.gender)
      writeToPage(x.species)
      writeToPage(x.url)
      console.log(x.color)
      })

      const keys2 = x
      console.log(keys2)
    work(x)
    console.log(x)
  })
})


