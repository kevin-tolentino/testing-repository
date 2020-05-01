

// function getFlightInfo() {
//   const params = {
//     method: 'GET',
//   }

//   fetch('http://api.aviationstack.com/v1/flights?access_key=a8f3f007b5b6084882a8e2c359e3e4d5', params)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     });
//   $.ajax({
//     url: 'http://api.aviationstack.com/v1/flights',
//     data: {
//       access_key: 'a8f3f007b5b6084882a8e2c359e3e4d5'
//     },
//     dataType: 'json',
//     success: console.log
//   });
// }

// getFlightInfo()

const container = document.getElementById('container')

function createEl(src) {
  const newEl = document.createElement('div')
  newEl.classList.add('col-6')
  const image = document.createElement('img')
  image.setAttribute('src', src);
  newEl.appendChild(image)
  container.appendChild(newEl)
}

function getPexelPictures(){
    const params = {
    method: 'GET',
      headers: { 'Authorization': '563492ad6f9170000100000199ba9517fba74485b278a4b9796b71c3' },
    }
      fetch('https://api.pexels.com/v1/search?query=japan&per_page=15&page=1', params)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          console.log(data.photos[0].src.portrait)
          for (let i = 0; i < data.photos.length; i++) {
            createEl(data.photos[i].src.tiny)
          }
        });
}




getPexelPictures()

// const init = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(newGrade)
// };
