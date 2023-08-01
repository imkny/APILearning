//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const url = 'https://api.chucknorris.io/jokes/random';
  document.querySelector("#joke").innerText = "";

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector("#joke").innerText = data.value;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}