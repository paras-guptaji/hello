const products = JSON.parse(localStorage.getItem("products")) || []
let cart = JSON.parse(localStorage.getItem("cart")) || []

document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', addProduct);
    }

    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    
    if (searchInput && categoryFilter) {
        searchInput.addEventListener('input', filterProducts);
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', showCart);
    }
    
    const checkoutBtn = document.getElementById('checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
    
    const contactFarmerBtn = document.getElementById('contact-farmer');
    if (contactFarmerBtn) {
        contactFarmerBtn.addEventListener('click', () => showChat('Sample Farm'));
    }
    
 
    const sendMessageBtn = document.getElementById("send-message")
    sendMessageBtn.addEventListener("click", sendMessage)
  

const closeButtons = document.querySelectorAll(".close")
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").style.display = "none"
  })
})

window.onclick = (event) => {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"
  }
}

displayProducts()
updateCartCount()
})

function addProduct(e) {
  e.preventDefault()
  const productName = document.getElementById("product-name").value
  const productType = document.getElementById("product-type").value
  const productPrice = Number.parseFloat(document.getElementById("product-price").value)
  const productAmount = Number.parseInt(document.getElementById("product-amount").value)
  const farmName = document.getElementById("farm-name").value
  const farmAddress = document.getElementById("farm-address").value
  const productImage = document.getElementById("product-image").files[0]

  const reader = new FileReader()
  reader.onload = (event) => {
    const newProduct = {
      id: Date.now(),
      name: productName,
      category: productType,
      price: productPrice,
      amount: productAmount,
      farm: farmName,
      address: farmAddress,
      image: event.target.result,
    }

    products.push(newProduct)
    localStorage.setItem("products", JSON.stringify(products))
    displayProducts()
    e.target.reset()
  }

  if (productImage) {
    reader.readAsDataURL(productImage)
  }
}

function displayProducts(productsToShow = products) {
  const productList = document.getElementById("product-list")
  const farmerProducts = document.getElementById("farmer-products")

  if (productList) {
    productList.innerHTML = ""
    productsToShow.forEach((product) => {
      const productCard = createProductCard(product)
      productList.appendChild(productCard)
    })
  }

  if (farmerProducts) {
    farmerProducts.innerHTML = ""
    productsToShow.forEach((product) => {
      const productCard = createProductCard(product, true)
      farmerProducts.appendChild(productCard)
    })
  }
}

function createProductCard(product, isFarmerView = false) {
  const productCard = document.createElement("div")
  productCard.className = "product-card"
  productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>${product.farm}</p>
            ${isFarmerView ? `<p>Amount: ${product.amount}</p>` : ""}
            <button onclick="showProductDetails(${product.id})">${isFarmerView ? "Edit" : "View Details"}</button>
        </div>
    `
  return productCard
}

function showProductDetails(productId) {
  const product = products.find((p) => p.id === productId)
  const modal = document.getElementById("product-modal")
  const modalProductName = document.getElementById("modal-product-name")
  const modalProductDetails = document.getElementById("modal-product-details")

  modalProductName.textContent = product.name
  modalProductDetails.innerHTML = `
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Farm: ${product.farm}</p>
        <p>Address: ${product.address}</p>
        <p>Amount: ${product.amount}</p>
    `

  modal.style.display = "block"
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  cart.push(product)
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  alert(`${product.name} added to cart!`)
}

function updateCartCount() {
  const cartCount = document.getElementById("cart-count")
  if (cartCount) {
    cartCount.textContent = cart.length
  }
}

function showCart() {
  const modal = document.getElementById("cart-modal")
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")

  cartItems.innerHTML = ""
  let total = 0

  cart.forEach((item) => {
    const itemElement = document.createElement("div")
    itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `
    cartItems.appendChild(itemElement)
    total += item.price
  })

  cartTotal.textContent = total.toFixed(2)
  modal.style.display = "block"
}

function checkout() {
  alert("Thank you for your purchase!")
  cart = []
  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  document.getElementById("cart-modal").style.display = "none"
}

function showChat(farmName) {
  const modal = document.getElementById("chat-modal")
  modal.style.display = "block"
}

function sendMessage() {
  const chatInput = document.getElementById("chat-input")
  const chatMessages = document.getElementById("chat-messages")

  if (chatInput.value.trim() !== "") {
    const message = document.createElement("p")
    message.textContent = `You: ${chatInput.value}`
    chatMessages.appendChild(message)
    chatInput.value = ""

    setTimeout(() => {
      const farmerMessage = document.createElement("p")
      farmerMessage.textContent = "Farmer: Thank you for your message. How can I help you?"
      chatMessages.appendChild(farmerMessage)
    }, 1000)
  }
}

function filterProducts() {
  const searchTerm = document.getElementById("search").value.toLowerCase()
  const selectedCategory = document.getElementById("category-filter").value

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      (selectedCategory === "" || product.category === selectedCategory),
  )

  displayProducts(filteredProducts)
}
displayProducts()
