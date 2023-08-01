//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
function getFetch() {
  const apikey = 'live_YBWK5zPmrS1BBm17tPVPYzEdjXOjbmVMLYBBEH6dXn9C28HtcoV3mmDIAbCQzsdG';
  const url = 'https://api.thedogapi.com/v1/images/search';
  document.querySelector("#image").src = "";

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector("#image").src = data[0].url;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}