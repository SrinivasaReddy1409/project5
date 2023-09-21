document.addEventListener('DOMContentLoaded', () => {
    fetchdata('Australia');
});
function fetchdata(countryCode) {
    const apiUrl = `https://restcountries.com/v3.1/name/${countryCode}`;
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const countryInfo = data[0];
            const countryName = countryInfo.name.common;
            const capital = countryInfo.capital;
            const population = countryInfo.population.toLocaleString();
            const languages = Object.values(countryInfo.languages).join(', ');
            const countryContainer = document.querySelector('.country-info');
            countryContainer.innerHTML = `
                <h2>${countryName}</h2>
                <p>Capital: ${capital}</p>
                <p>Population: ${population}</p>
                <p>Languages: ${languages}</p>
            `;
        })
        .catch((error) => {
            console.error('Error fetching country data:', error);
            const countryContainer = document.querySelector('.country-info');
            countryContainer.innerHTML = '<p>Unable to fetch country information.</p>';
        });
}

