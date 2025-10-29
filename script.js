
let currentPage = 1;

function loadData() {
    fetch(`https://api.worldbank.org/v2/country?format=json&per_page=10&page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            currentPage++;renderTable(data[1]);           
        });
}

function renderTable(countries) {
    const tableBody = document.getElementById('tableBody');
    
    countries.forEach(country => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${country.id}</td>
            <td>${country.name}</td>
            <td>${country.region.value}</td>
            <td>${country.incomeLevel.value}</td>`;

        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    
    document.getElementById('loadMoreBtn').addEventListener('click', loadData);
});