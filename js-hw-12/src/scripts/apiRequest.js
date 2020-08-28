const BASE_URL = 'https://restcountries.eu/rest/v2/name/';

export default function (coountryName, dataParser) {
  fetch(BASE_URL + coountryName)
    .then(resp => resp.json())
    .then(data => dataParser(data));
}
