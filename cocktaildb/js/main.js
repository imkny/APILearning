//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  //console.log('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + choice.replaceAll(" ", '%20'));
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + choice.replaceAll(" ", '%20');
  document.querySelector("#image").src = "";
  document.querySelector("#name").innerText = "";
  document.querySelector("#instructions").innerText = "";

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector("#name").innerText = data.drinks[0].strDrink;
      document.querySelector("#instructions").innerText = data.drinks[0].strInstructions;
      document.querySelector("#image").src = data.drinks[0].strImageSource;
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}