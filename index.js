const cardTemplate = (country) => {
  return `<div class="card">
              <img id="flag-image" src="${country.flags.png}" alt="flag" />
              <h1 class="center">${country.name.official}</h1>
            </div>`;
};

function apiCountries() {
  fetch("https://restcountries.com/v3.1/all")
  .then(resp => resp.json())
  .then(data => {
    allContinents(data);
  })
  .catch((error) => {
    console.error("No se pudieron obtener los datos", error)
  })
};

const allContinents = (countries) => {
const countriesHTML = countries.map((country) => cardTemplate(country));
const countriesNode = document.getElementById("countries");
countriesNode.innerHTML = countriesHTML.join(" ");
};
apiCountries();

