const products = [
    { 
      id: 1, 
      name: 'Product 1', 
      price: 10, 
      imageUrl: 'image11.jpg' 
    },
    { 
      id: 2, 
      name: 'Product 2', 
      price: 20, 
      imageUrl: 'image22.jpg' 
    },
    { 
      id: 3, 
      name: 'Product 3', 
      price: 30, 
      imageUrl: 'image33.jpg' 
    },
    // Add more products with image URLs as needed
  ];
  
  const productsContainer = document.getElementById('products');
  const cartItemsContainer = document.getElementById('cart-items');
  const checkoutButton = document.getElementById('checkout-btn');
  
  function renderProducts() {
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <img src="${product.imageUrl}" alt="${product.name}" width="100">
        <p>Price: $${product.price}</p>
        <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const cartItemElement = document.createElement('li');
    cartItemElement.innerHTML = `${product.name} - $${product.price}`;
    cartItemsContainer.appendChild(cartItemElement);
  }
  
  renderProducts();
  
  productsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
      const productId = parseInt(event.target.getAttribute('data-id'));
      addToCart(productId);
    }
  });
  
  checkoutButton.addEventListener('click', function() {
    alert('Thank you for your purchase!');
    cartItemsContainer.innerHTML = '';
  });
  