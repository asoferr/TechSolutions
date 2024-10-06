fetch(`https://raw.githubusercontent.com/asoferr/jsonE-commerce/refs/heads/main/e-comerce.json`)
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('product-list');
        data.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <p class="description">${product.description}</p>
                    <a href="#" class="button">Comprar Agora</a>
                </div>
            `;
            productList.appendChild(productDiv);
        });
    })
   
