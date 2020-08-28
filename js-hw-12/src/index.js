import './styles.css';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';

import debounce from 'lodash.debounce';

import fetchApi from './scripts/apiRequest';
import markupRender from './scripts/markupRender';

const refs = {
  input: document.querySelector('.js-input'),
  countryList: document.querySelector('.js-country-list'),
  countryData: document.querySelector('.js-country-data'),
};

refs.input.addEventListener('input', debounce(onInputValue, 1000));

function onInputValue(e) {
  const inputValue = e.target.value;
  fetchApi(inputValue, dataParser);
}

function dataParser(obj) {
  const parsedData = obj.map(el => {
    const parsedObj = {
      name: el.name,
      capital: el.capital,
      population: el.population,
      languages: el.languages.map(el => {
        return el.name;
      }),
      flag: el.flag,
    };
    return parsedObj;
  });

  markupRender(refs.countryList, refs.countryData, parsedData);
}
