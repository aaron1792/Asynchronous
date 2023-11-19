'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `   <article class="country">
<img class="country__img" src="${Object.entries(data.flags)[0][1]}"/>
<div class="country__data">
  <h3 class="country__name">${Object.entries(data.name)[0][1]}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
  <p class="country__row"><span>🗣️</span>${
    Object.entries(data.languages)[0][1]
  }</p>
  <p class="country__row"><span>💰</span>${
    Object.entries(Object.entries(data.currencies)[0][1])[0][1]
  }</p>
</div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('spain');
getCountryData('iceland');
getCountryData('venezuela');
