document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.adviceslip.com/advice'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.advice').innerText = data.slip.advice
        document.querySelector('.adviceContainer').classList.remove('hidden');

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

