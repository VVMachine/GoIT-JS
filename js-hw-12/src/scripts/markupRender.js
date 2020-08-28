import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';

export default function markupRender(countryList, countryData, dataArray) {
  if (dataArray.length === 1) {
    countryList.innerHTML = '';
    countryData.innerHTML = '';

    const countryObj = dataArray[0];

    const { name, capital, population, languages, flag } = countryObj;

    const languagesList = languages.map(
      el => `<li class = 'country-language'>${el}</li>`,
    );

    const languagesListMarkup = languagesList.join('');

    const dataMarkup = `
    <h3 class = "country-name">Country: ${name}</h3>
    <p class = "contry-capital">Capital: ${capital}</p>
    <p class = "contry-population">Population: ${population}</p>
    <ul class = "contry-languages-list">Languages: ${languagesListMarkup}</ul>
    <object id="svg-object" data="${flag}" type="image/svg+xml"></object>
    `;

    countryData.innerHTML = dataMarkup;

    console.log(languagesListMarkup);
  } else if (dataArray.length > 1 && dataArray.length <= 10) {
    countryList.innerHTML = '';
    countryData.innerHTML = '';

    const dataListNames = dataArray.map(el => el.name);

    const dataList = dataListNames.map(
      el => `<li class = "country-list-item">${el}</li>`,
    );

    const dataListMarkup = dataList.join('');

    countryList.innerHTML = dataListMarkup;
  } else {
    PNotify.error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }
}
