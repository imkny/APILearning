//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const url = 'https://randomuser.me/api/?results=1';
  document.querySelector("#image").src = "";
  document.querySelector("#name").innerText = "";
  document.querySelector("#email").innerText = "";

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data.results);
      document.querySelector("#name").innerText = data.results[0]['name']['first'] + " " + data.results[0]['name']['last'];
      document.querySelector("#email").innerText = data.results[0]['email'];
      document.querySelector("#image").src = data.results[0]['picture']['large'];
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}