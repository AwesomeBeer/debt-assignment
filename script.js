
let currentPage = 1;

function loadData() {
    const skip = (currentPage - 1) * 5;
    fetch(`https://dummyjson.com/products?limit=5&skip=${skip}`)
        .then(response => response.json())
        .then(data => {
            currentPage++;
            renderTable(data.products);
            
        });
}

function renderTable(products) {
    const tableBody = document.getElementById('tableBody');
    
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>${product.category}</td>`;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    
    document.getElementById('loadMoreBtn').addEventListener('click', loadData);
});