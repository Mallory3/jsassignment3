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
  const url = 'https://api.petfinder.com/v2/animals?type=bird&page=5'
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
  
  
    
    
    Object.keys(x.animals).forEach((key) => {
    function writeIdToPage(text) {
      const el = document.createElement('div')
      el.id = 'Display'
      el.style = `
      height: 280px;
      border-radius: 10px;
      background: rgba(23, 35, 50, 1);
      flex: 1 230px;
      margin: 10px;
      padding: 20px;
      position: relative;
      background-color: black;
      box-shadow: 2px 8px 9px 0px rgba(0, 0, 0, 0.14),
      11px 11px 6px rgba(0, 0, 0, 0.05);
      color:white;
      `
      el.textContent = text
      const locateEl = document.querySelector('#card')
      locateEl.appendChild(el)
    }
    writeIdToPage(x.name)
    
    function updateAdviceDisplay (text) {
      let adviceDiv = document.querySelector('#Display')  
      adviceDiv.textContent = text
    }

    //pictures
    // Object.keys(x.animals).forEach((key) => {
      const img = document.createElement("img");
      img.style =`
      width: 25vmax;
      height: 25vmax;
      `
      const y = x.animals
      img.setAttribute("src", y[key].photos[0].large);
      const locateImg = document.querySelector('#card')
      locateImg.appendChild(img);
      console.log(x.animals)
    
      //name

    })
    



    console.log(x.animals)
    const keys = x.animals
    console.log(keys)
    keys.forEach( function(x) {
    //   writeIdToPage(keys[0].breeds.primary)
      // writeIdToPage(x.name)
      // writeToPage(x.color)
      // writeToPage(x.age)
      // writeToPage(x.gender)
      // writeToPage(x.species)
      // writeToPage(x.url)
      console.log(x.color)
      })

      console.log(keys[2].photos[0].small)

      const keys2 = keys.contact
      console.log(keys[0].breeds)
    work(x)
    console.log(x)
  })
})


