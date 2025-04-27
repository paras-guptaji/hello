const userData = {
    name: "Farmer",
    farmName: "Green Valley Organics Of The World",
    email: "directfarm@gmail.com",
    address: "fase-2 sada colony",
    phone: "+91 8388928831",
    profileImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  }
  
  const products = JSON.parse(localStorage.getItem("products")) || []
  
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof AuthService === "undefined") {
      console.error("AuthService not loaded")
      return
    }
  
    const authService = new AuthService()
  
    const user = authService.getCurrentUser()
  
    if (!user) {
      window.location.href = "login.html"
      return
    }
    if (user.userType !== "farmer") {
      window.location.href = "index.html"
    }
  
    const userNameElements = document.querySelectorAll(".user-name")
    if (userNameElements) {
      userNameElements.forEach((element) => {
        element.textContent = user.name
      })
    }
  
    const logoutButtons = document.querySelectorAll(".logout-button")
    if (logoutButtons) {
      logoutButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault()
          authService.logout()
          window.location.href = "login.html"
        })
      })
    }
  
    initDashboard()
  
    setupEventListeners()
  
    displayFarmerProducts()
  
    populateUserData()
  })
  
  function initDashboard() {
    if (products.length === 0) {
      addSampleProducts()
    }
  
    const farmNameInput = document.getElementById("farm-name")
    if (farmNameInput) {
      farmNameInput.value = userData.farmName
    }
  
    const farmAddressInput = document.getElementById("farm-address")
    if (farmAddressInput) {
      farmAddressInput.value = userData.address
    }
  }
  
  function setupEventListeners() {
    const productForm = document.getElementById("product-form")
    if (productForm) {
      productForm.addEventListener("submit", addProduct)
    }
  
    const menuToggle = document.querySelector(".menu-toggle")
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("collapsed")
      })
    }
  
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
  
    const editProductBtn = document.getElementById("edit-product")
    if (editProductBtn) {
      editProductBtn.addEventListener("click", () => {
        alert("Edit functionality would be implemented here")
        document.getElementById("product-modal").style.display = "none"
      })
    }
  
    const deleteProductBtn = document.getElementById("delete-product")
    if (deleteProductBtn) {
      deleteProductBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete this product?")) {
          alert("Delete functionality would be implemented here")
          document.getElementById("product-modal").style.display = "none"
        }
      })
    }
  }
  
  function populateUserData() {
    const welcomeHeading = document.querySelector(".welcome-text h1")
    if (welcomeHeading) {
      welcomeHeading.textContent = `Welcome ${userData.name}`
    }
  
    const profileImages = document.querySelectorAll(".profile-img-small, .profile-menu img")
    profileImages.forEach((img) => {
      img.src = userData.profileImage
      img.alt = userData.name
    })
  }
  
  function addProduct(e) {
    e.preventDefault()
  
    const productName = document.getElementById("product-name").value
    const productType = document.getElementById("product-type").value
    const productPrice = Number.parseFloat(document.getElementById("product-price").value)
    const productAmount = Number.parseInt(document.getElementById("product-amount").value)
    const farmName = document.getElementById("farm-name").value
    const farmAddress = document.getElementById("farm-address").value
    const productDescription = document.getElementById("product-description").value
    const productImage = document.getElementById("product-image").files[0]
  
    if (productImage) {
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
          description: productDescription,
          image: event.target.result,
          date: new Date().toISOString(),
        }
  
        products.unshift(newProduct)
  
        localStorage.setItem("products", JSON.stringify(products))
  
        displayFarmerProducts()
  
        e.target.reset()
  
        alert("Product added successfully!")
      }
  
      reader.readAsDataURL(productImage)
    } else {
      alert("Please select an image for the product")
    }
  }
  
  function displayFarmerProducts() {
    const farmerProducts = document.getElementById("farmer-products")
    if (!farmerProducts) return
  
    farmerProducts.innerHTML = ""
  
    const recentProducts = products.slice(0, 4)
  
    if (recentProducts.length === 0) {
      farmerProducts.innerHTML = '<p class="no-products">No products added yet. Add your first product above!</p>'
      return
    }
  
    recentProducts.forEach((product) => {
      const productCard = createProductCard(product)
      farmerProducts.appendChild(productCard)
    })
  }
  
  function createProductCard(product) {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
  
    productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.category}</p>
              <p class="price">₹${product.price.toFixed(2)}</p>
              <p>Stock: ${product.amount} units</p>
              <button onclick="showProductDetails(${product.id})">View Details</button>
          </div>
      `
  
    return productCard
  }
  
  function showProductDetails(productId) {
    const product = products.find((p) => p.id === productId)
    if (!product) return
  
    const modal = document.getElementById("product-modal")
    const modalProductName = document.getElementById("modal-product-name")
    const modalProductDetails = document.getElementById("modal-product-details")
  
    modalProductName.textContent = product.name
    modalProductDetails.innerHTML = `
          <div class="product-modal-image">
              <img src="${product.image}" alt="${product.name}" style="max-width: 200px; max-height: 200px;">
          </div>
          <div class="product-modal-info">
              <p><strong>Category:</strong> ${product.category}</p>
              <p><strong>Farm:</strong> ${product.farm}</p>
              <p><strong>Price:</strong> ₹${product.price.toFixed(2)}</p>
              <p><strong>Category:</strong> ${product.category}</p>
              <p><strong>Stock:</strong> ${product.amount} units</p>
              <p><strong>Address:</strong> ${product.address}</p>
              <p><strong>Description:</strong> ${product.description || "No description provided"}</p>
              <p><strong>Added on:</strong> ${new Date(product.date).toLocaleDateString()}</p>
          </div>
      `
  
    modal.style.display = "block"
  }
  
  function addSampleProducts() {
    const sampleProducts = [
      {
        id: Date.now() - 1000,
        name: "Fresh Organic Lettuce",
        category: "Vegetables",
        price: 100,
        amount: 50,
        farm: userData.farmName,
        address: userData.address,
        description: "Crisp, organic lettuce freshly harvested from our farm.",
        image:
          "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: new Date().toISOString(),
      },
      {
        id: Date.now() - 2000,
        name: "Organic Tomatoes",
        category: "Vegetables",
        price: 50,
        amount: 40,
        farm: userData.farmName,
        address: userData.address,
        description: "Juicy, ripe tomatoes grown without pesticides.",
        image:
          "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: new Date().toISOString(),
      },
      {
        id: Date.now() - 3000,
        name: "Fresh Strawberries",
        category: "Fruits",
        price: 150,
        amount: 30,
        farm: userData.farmName,
        address: userData.address,
        description: "Sweet, juicy strawberries picked at peak ripeness.",
        image:
          "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: new Date().toISOString(),
      },
      {
        id: Date.now() - 4000,
        name: "Organic Carrots",
        category: "Vegetables",
        price: 40,
        amount: 60,
        farm: userData.farmName,
        address: userData.address,
        description: "Crunchy, sweet carrots grown in our organic soil.",
        image:
          "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        date: new Date().toISOString(),
      },
      {
        id: 1,
        name: " Tomatoes",
        farm: "farm1",
        price: 40,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9-OuOtsl4iecwrOQ4c00iOqngoUdBz1dzQ&s",
      },
      {
        id: 2,
        name: " Lettuce(cabage)",
        farm: "farm2",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzIH5VqsiJflnV4xJrPBtQiZIcd1dtvHdYA&s",
      },
      {
        id: 3,
        name: " Fenugreek Leaves (Methi)",
        farm: "farm3",
        price: 180,
        category: "vegetables",
        image: "https://beejwala.com/cdn/shop/products/fenugreek-4_compressed.jpg?v=1653821518",
      },
      {
        id: 4,
        name: " Carrots(gajar)",
        farm: "farm4",
        price: 120,
        category: "vegetables",
        image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1736515665",
      },
      {
        id: 5,
        name: " Potato",
        farm: "farm5",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaXIQooiS7C2syrl1H9RuQ3kcZT7mbs5yKA&s",
      },
      {
        id: 6,
        name: " onion",
        farm: "farm6",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW7-aAJENmiznbqnQftzp5vCP4GYEiOOFUg&s",
      },
      {
        id: 7,
        name: " ladies finger(bhindi)",
        farm: "farm6",
        category: "vegetables",
        price: 30,
        image: "https://ilovenursery.com/wp-content/uploads/2024/12/Bhindi-Okra-F1-Sujata-Vegetable-Seeds.jpg",
      },
      {
        id: 8,
        name: " Bottle Gourd (Lauki)",
        farm: "farm7",
        price: 20,
        category: "vegetables",
        image: "https://mybageecha.com/cdn/shop/products/Bottle_Gourd.jpg?v=1571438537",
      },
      {
        id: 9,
        name: " Green Chillies",
        farm: "farm1",
        price: 40,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDucAlTs_A_rDBTi7A17mLtDnSnUUjt_BUhQ&s",
      },
      {
        id: 10,
        name: " Brinjal (Eggplant/Baingan)",
        farm: "farm2",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvNNnLkuTF4DAnx4c_FD7Glkx8q4-BFq7fQ&s",
      },
      {
        id: 11,
        name: " Cauliflower",
        farm: "farm3",
        price: 180,
        category: "vegetables",
        image: "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 12,
        name: " Spinach (Palak)",
        farm: "farm4",
        price: 120,
        category: "vegetables",
        image: "https://www.greendna.in/cdn/shop/products/palak0_1200x1200.jpg?v=1715600951",
      },
      {
        id: 13,
        name: " Bitter Gourd (Karela)",
        farm: "farm5",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPgPwiHJkL24QMU1f4R7_uc2MmNGuRxavPQ&s",
      },
      {
        id: 14,
        name: " Ridge Gourd (Turai)",
        farm: "farm6",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQAqh4aJ1b_czEi0vajp4G7bQuomj9MaITQ&s",
      },
      {
        id: 15,
        name: " Pumpkin (Kaddu)",
        farm: "farm6",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s1GWpHAq7u9STEgy76RYA6ohwJEZHTlE3w&s",
      },
      {
        id: 16,
        name: " Drumsticks (Moringa/Sahjan)",
        farm: "farm7",
        price: 20,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx62JPRwngd1fD9gNSvd34UxOLCh-OUKFl2A&s",
      },
      {
        id: 17,
        name: " Sweet Potato (Shakarkand)",
        farm: "farm1",
        price: 40,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdX7wf8GcwCJ4rnBu07wMueAPvutJYHf1HQ&s",
      },
      {
        id: 18,
        name: " Radish (Mooli)",
        farm: "farm2",
        price: 30,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR50GsAYX_gLV8iSizviibEPq9LaVJFIC5w&s",
      },
      {
        id: 19,
        name: " Peas (Matar)",
        farm: "farm3",
        price: 180,
        category: "vegetables",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8Uls-ksQgfKoe8bgcyvr0wlY4qZaFbfXUw&s",
      },
      {
        id: 20,
        name: " Coriander Leaves (Dhaniya)",
        farm: "farm4",
        price: 120,
        category: "vegetables",
        image: "https://m.media-amazon.com/images/I/61x9Zv3gI7L._AC_UF1000,1000_QL80_.jpg",
      },
  
      //fruits category//
      {
        id: 21,
        name: " Mango (Alphonso, Kesar, Dasheri)",
        farm: "farm9",
        price: 80,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0Wfpzw8BkVS0tkIF8mVR-MatKmkaFlREGA&s",
      },
      {
        id: 22,
        name: " Banana (Robusta, Nendran)",
        farm: "farm9",
        price: 30,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4lduQ9XIOasprHq64dcwjPy-7ehuWafy5Q&s",
      },
      {
        id: 23,
        name: " Papaya",
        farm: "farm9",
        price: 30,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanQe8axqSghqEzpKfaURIXqnhRUt994CuRA&s",
      },
      {
        id: 24,
        name: " Guava (Allahabad variety)",
        farm: "farm9",
        price: 60,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6kX4F-vdgml6hbF71bzzHAeu2KVy1Gm1yw&s",
      },
      {
        id: 25,
        name: " Pomegranate",
        farm: "farm9",
        price: 200,
        category: "fruits",
        image: "https://m.media-amazon.com/images/I/611a1wD9ZGL._AC_UF894,1000_QL80_.jpg",
      },
      {
        id: 26,
        name: " Watermelon",
        farm: "farm9",
        price: 30,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIqdFfHWrJURhEu0PJb8iMIFXXhF3WLNwIA&s",
      },
      {
        id: 27,
        name: " Sweet Lime (Mosambi)",
        farm: "farm9",
        price: 150,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAovCRz7_PqN6dD6YPgMjQVF_JMcZ-wJmpw&s",
      },
      {
        id: 28,
        name: " Orange (Nagpur variety)",
        farm: "farm9",
        price: 120,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH7Uvw1O7ixFL66NfZ8g9B9YC-R7esc6Cvg&s",
      },
      {
        id: 29,
        name: " Jackfruit",
        farm: "farm9",
        price: 30,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic_KjZkPGYAjy016CpWH1__chILmTX5gBhQ&s",
      },
      {
        id: 30,
        name: " Apple (Kashmiri, Himachali)",
        farm: "farm9",
        price: 230,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s",
      },
      {
        id: 31,
        name: " Pineapple",
        farm: "farm9",
        price: 30,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGYVZ94skj0e1Gxs67fooNUmlq86RlMMjew&s",
      },
      {
        id: 32,
        name: " Chikoo (Sapota)",
        farm: "farm9",
        price: 20,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxxEhCcwy8stTJHfhHh8tvQ4rW3F1JHlekw&s",
      },
      {
        id: 33,
        name: " Custard Apple (Sitaphal)",
        farm: "farm9",
        price: 140,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PJe7V2I-zaEA8Epa4CDIJ7lyMbPOAkNEdg&s",
      },
      {
        id: 34,
        name: " Lychee(litchi)",
        farm: "farm9",
        price: 130,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOLH8CZdZkb9MrHyIRdDl6QaF5K3WAfdfJw&s",
      },
      {
        id: 35,
        name: " Grapes (Thompson Seedless, Anab-e-Shahi)",
        category: "fruits",
        farm: "farm9",
        price: 180,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLarVRINtbFC9KlbVH9pXHS3cN3JnLPYkRw&s",
      },
      {
        id: 36,
        name: " Coconut",
        farm: "farm9",
        price: 40,
        category: "fruits",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFagSixHc1JRlt_JrdnM0figuE2fxE8PyRo_4a8zFgIh_hgUPwiTbHIFJq2hZI4PXVqZ0&usqp=CAU",
      },
      {
        id: 37,
        name: " Indian Gooseberry (Amla)",
        farm: "farm9",
        price: 30,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjORHIl4ZUfUqOvRSdGpEvJa18unuLv2G2Q&s",
      },
      {
        id: 38,
        name: " Pear (Nashpati)",
        farm: "farm9",
        price: 430,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihlVz-tLq8CEEs-JgMEvlcy0VGk08dS7hOw&s",
      },
      {
        id: 39,
        name: " Plum (Alu Bukhara)",
        farm: "farm9",
        price: 130,
        category: "fruits",
        image: "https://www.bigbasket.com/media/uploads/p/l/30001054_7-fresho-plum-indian.jpg",
      },
      {
        id: 40,
        name: " Ber (Indian Jujube)",
        farm: "farm9",
        price: 120,
        category: "fruits",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvmy6_aFsoFIWPeIPZC97CEAo44V5a6Dl2A&s",
      },
  
      // grain category//
      {
        id: 41,
        name: " Wheat",
        farm: "farm8",
        price: 60,
        category: "grains",
        image: "https://tiimg.tistatic.com/fp/1/006/386/food-grade-whole-wheat-grains-084.jpg",
      },
      {
        id: 42,
        name: " Rice (Paddy)",
        farm: "farm8",
        price: 60,
        category: "grains",
        image: "https://www.shutterstock.com/image-photo/bunch-paddy-rice-field-before-600nw-2219469869.jpg",
      },
      {
        id: 43,
        name: " Barley",
        farm: "farm8",
        price: 180,
        category: "grains",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRBTIP9YPOMM0ryd2cU_zrxi8ALuKN0U3Sjnm_1udCc961RMzrsDrjtB9k8vJpATHDhH_QNxakmOgY05BeFSmiXiQ",
      },
      {
        id: 44,
        name: " Millet (Bajra)",
        farm: "farm8",
        price: 120,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIhfZbn6WBkBMHRTrFUWF5zP1DT97WyXCiw&s",
      },
      {
        id: 45,
        name: " Sorghum (Jowar)",
        farm: "farm8",
        price: 130,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRSaZFeSdMuND6eKKVugL5qDJ4BsXPF3slQ&s",
      },
      {
        id: 46,
        name: " Maize (Corn)",
        farm: "farm8",
        price: 130,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8mJaexq94edtBCwP3x2lLNwgsAG41uOXwA&s",
      },
      {
        id: 47,
        name: " Ragi (Finger Millet)",
        farm: "farm8",
        category: "grains",
        price: 130,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUmHDQleFv1sjD2OdOG_8hyIGvi5hWUrVJw&s",
      },
      {
        id: 48,
        name: " Foxtail Millet",
        farm: "farm8",
        price: 120,
        category: "grains",
        image: "https://naturechoice.in/eeghoacm/2022/07/Foxtail_millet-1.jpg",
      },
      {
        id: 49,
        name: " Pearl Millet",
        farm: "farm8",
        price: 140,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJeuAFFB4cb03byA1oBpuAYOD9iTm-yButw&s",
      },
      {
        id: 50,
        name: " Oats",
        farm: "farm8",
        price: 330,
        category: "grains",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg",
      },
      {
        id: 51,
        name: " Quinoa",
        farm: "farm8",
        price: 480,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIOwSmbtXpH8xQ3AXckoty051f7sW3oRhWg&s",
      },
      {
        id: 52,
        name: " Chickpeas (Gram)",
        farm: "farm8",
        category: "grains",
        price: 120,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JBbGG7BhH6NL_FVudS4dTMQ0ioUMKEkVvA&s",
      },
      {
        id: 53,
        name: " Lentils(Masoor)",
        farm: "farm8",
        price: 120,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp5swwCh2E41xcaRfX9JhuE4Z8IMfZZpIvw&s",
      },
      {
        id: 54,
        name: " Kidney Beans(Rajma)",
        farm: "farm8",
        price: 430,
        category: "grains",
        image: "https://biobasics.org/cdn/shop/files/order-organic-rajima-chitra-online-at-bio-basics.png?v=1736601880",
      },
      {
        id: 55,
        name: " Pigeon Beans(Toor Dal)",
        farm: "farm8",
        price: 130,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTVvdN1rGmHB_Mvgvfgm5HsnUQKqIb1do5A&s",
      },
      {
        id: 56,
        name: " Black Gram(Urad Dal)",
        farm: "farm8",
        price: 120,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvaymYXLOdxIW7HV7J4ZyMdQNIB0bwjbvUw&s",
      },
      {
        id: 57,
        name: " Chia",
        farm: "farm8",
        price: 3999,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ImdprbHdRJnqFN5TXTUaWhUdyk9KmZMEfw&s",
      },
      {
        id: 58,
        name: " Hoorsde Gram(Kulthi)",
        farm: "farm8",
        price: 140,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROefSuch6v2EeYb__f34FC_5H6i3-KZkQz_w&s",
      },
      {
        id: 59,
        name: " Soybean",
        farm: "farm8",
        price: 130,
        category: "grains",
        image: "https://5.imimg.com/data5/SI/VC/MY-21496561/soybean-seeds-500x500.jpg",
      },
      {
        id: 60,
        name: " Blucwheat(Kuttu)",
        farm: "farm8",
        price: 180,
        category: "grains",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW6QLJJizmMQNEy8WJRzY0BfGhcMANz4b_A&s",
      },
  
      //dairy category added//
      {
        id: 61,
        name: "Milk",
        category: "liquid",
        price: 80,
        farm: "AMIL dairy",
        address: "6060 Udder St, Lactoseville",
        image: "https://th.bing.com/th/id/OIP.QWKJmi9ZKNwduLLDqwoy6QHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
  
      {
        id: 62,
        name: "Cheese",
        category: "Dairy",
        price: 200,
        farm: "AMIL dairy",
        address: "6161 Curds Way, Moldyville",
        image: "https://th.bing.com/th/id/OIP.CAINRPFv1EUiOHO1jiAHtwHaEo?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 63,
        name: "Yogurt",
        category: "Dairy",
        price: 150,
        farm: "AMIL dairy",
        address: "6262 Probiotic Pl, Fermentville",
        image: "https://pngimg.com/uploads/yogurt/yogurt_PNG15189.png",
      },
      {
        id: 64,
        name: "Butter",
        category: "Dairy",
        price: 300,
        farm: "AMIL dairy",
        address: "6363 Churn Ln, Creamytown",
        image: "https://wallpaperaccess.com/full/1634267.jpg",
      },
      {
        id: 65,
        name: "Cream",
        category: "Dairy",
        price: 200,
        farm: "AMIL dairy",
        address: "6464 Whipped Peak, Richville",
        image: "https://th.bing.com/th/id/OIP.undK2Sd5_LX79h6fM3Mz_wHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 66,
        name: "Sour Cream",
        category: "Dairy",
        price: 249,
        farm: "AMIL dairy",
        address: "6565 Tart Terrace, Zestyville",
        image: "https://th.bing.com/th/id/OIP.qxU2RQSvQaRNjppCigiOcAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 67,
        name: "Cottage Cheese",
        category: "Dairy",
        price: 329,
        farm: "AMIL dairy",
        address: "6666 Lumpy Ln, Proteinville",
        image: "https://th.bing.com/th/id/OIP.ZVDXUHwRE3I4874_lkjOgQHaE7?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 68,
        name: "Kefir",
        category: "Dairy",
        price: 399,
        farm: "AMIL dairy",
        address: "6767 Ferment Rd, Healthgutville",
        image: "https://th.bing.com/th/id/OIP.T-DjFr0xEgczxRXOpcSPtQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 69,
        name: "Ghee",
        category: "Dairy ",
        price: 599,
        farm: "AMIL dairy",
        address: "6868 Golden Oil Rd, Buttertown",
        image: "https://th.bing.com/th/id/OIP.v8WpOA_44eXStcaEfLmqBAHaE8?w=302&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 70,
        name: "Goat Cheese",
        category: "Dairy",
        price: 699,
        farm: "AMIL dairy",
        address: "6969 Kid Ct, Tangyton",
        image: "https://th.bing.com/th/id/OIP.pfu26I0fU-gD_LjczK2c1gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 71,
        name: "Whey Protein",
        category: "Dairy",
        price: 1999,
        farm: "AMIL dairy",
        address: "7070 Protein Pkwy, Gainsville",
        image: "https://th.bing.com/th/id/OIP.WIqSmH5hBckOZ4Anaja04AHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 72,
        name: "Ice Cream",
        category: "Dairy",
        price: 499,
        farm: "AMIL dairy",
        address: "7171 Scoop St, Sweetville",
        image: "https://th.bing.com/th/id/OIP.lFEzsOjEyZLb9hK-N-CKeQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 73,
        name: "Ricotta",
        category: "Dairy",
        price: 399,
        farm: "AMIL dairy",
        address: "7272 Whey Way, Lasagnaville",
        image: "https://th.bing.com/th/id/OIP.L-m_eG0kmvczMrc_7XEQHAHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 74,
        name: "Mascarpone",
        category: "Dairy",
        price: 449,
        farm: "AMIL dairy",
        address: "7373 Tiramisu Trail, Dessertville",
        image: "https://th.bing.com/th/id/OIP.JOGCyvOq5wf9l1VU_AimtgHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 75,
        name: "Feta",
        category: "Dairy",
        price: 429,
        farm: "AMIL dairy",
        address: "7474 Briny Blvd, Greeceville",
        image: "https://th.bing.com/th/id/OIP.u8uHe02EYuliao8aQgI0wAHaE8?w=303&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 76,
        name: "Parmesan",
        category: "Dairy",
        price: 699,
        farm: "AMIL dairy",
        address: "7575 Grana Grotto, Umamiland",
        image: "https://th.bing.com/th/id/OIP.DE9iEa1r07q-ucRHOF3-LgHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 77,
        name: "Mozzarella",
        category: "Dairy",
        price: 449,
        farm: "AMIL dairy",
        address: "7676 Pizza Piazza, Meltville",
        image: "https://th.bing.com/th/id/OIP.nCAjBQF9Fs_Pvk7JWwgUEQHaE8?rs=1&pid=ImgDetMain",
      },
      {
        id: 78,
        name: "Brie",
        category: "Dairy",
        price: 599,
        farm: "AMIL dairy",
        address: "7777 Soft Wheel Way, Franceville",
        image: "https://th.bing.com/th/id/OIP.FPB0jtMlpW4wEPqr7nDRkwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 79,
        name: "Blue Cheese",
        category: "Dairy",
        price: 799,
        farm: "AMIL dairy",
        address: "7878 Pungent Path, Stinkyville",
        image: "https://th.bing.com/th/id/OIP.Qmi9orOFI0I7uS5T0OmXjgHaFn?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
      {
        id: 80,
        name: "Gouda",
        category: "Dairy",
        price: 549,
        farm: "AMIL dairy",
        address: "7979 Waxy Wheel Rd, Hollandville",
        image: "https://th.bing.com/th/id/OIP.5Vy-Wc0PRQkvR8TiCEr91wHaFR?w=255&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      },
  
      //cooking oil//
      {
        id: 81,
        name: " Mustard Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 160,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjP6XUjh6n2bc-m95HvRXzLhX5Kll8Im2GHg&s",
      },
      {
        id: 82,
        name: " Ricebran Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 160,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdERFbrM5WF2wkzzLcT_bh17LvWFZhE0mAYg&s",
      },
      {
        id: 83,
        name: " Soybean Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 189,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJC1ZJgcHmeIzKGl9hZDgbia780kbsER8VDQ&s",
      },
      {
        id: 84,
        name: " Palm Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 110,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lUaACQH66RCtKQfVcrITDds_-7N3SLnJ3Q&s",
      },
      {
        id: 85,
        name: " Coconut Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 330,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74LVU1AJJ-zdL7O-jNRcWMG2F0LgfoCbGHw&s",
      },
      {
        id: 86,
        name: " Avacado Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 230,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQunpgyeciEnOVei5hGyTxTSyU-ju3RjpUqlQ&s",
      },
      {
        id: 87,
        name: " Corn Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 630,
        category: "liquid",
        image: "https://elthecook.co.in/cdn/shop/articles/cornoil2.png?v=1549526220",
      },
      {
        id: 88,
        name: " Pistachio Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 320,
        category: "liquid",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/11/FP/XF/KA/6267617/1-500x500-v1.jpg",
      },
      {
        id: 89,
        name: " Almond Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 740,
        category: "liquid",
        image: "https://media.post.rvohealth.io/wp-content/uploads/2020/08/almond-oil-and-almonds-thumb-1-732x549.jpg",
      },
      {
        id: 90,
        name: " Sunflower Oil",
        farm: "Directfarm oil pvt. ltd.",
        price: 230,
        category: "liquid",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhLVK5zaP0KugPF2cOZfFqOm2xVZsiYpLwA&s",
      },
  
      //spices//
      {
        id: 91,
        name: " Turmeric (Haldi)",
        farm: "Sujay spice factory",
        price: 830,
        category: "spices",
        image: "https://elthecook.co.in/cdn/shop/products/haldi-powder.jpg?v=1602868426",
      },
      {
        id: 92,
        name: " Cumin (Jeera)",
        farm: "Sujay spice factory",
        price: 930,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcwa4olGe_kHrdO3bG3HsEX0aEd02PeES4w&s",
      },
      {
        id: 93,
        name: " Coriander (Dhaniya)",
        farm: "Sujay spice factory",
        price: 530,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hk1Q6jV2cBlGKD0I6HO8eUBalIW0jyuY0A&s",
      },
      {
        id: 94,
        name: "Black Pepper (Kali Mirch)",
        farm: "Sujay spice factory",
        price: 830,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHx2zHqx9f8o6Wh0nCe55QPclxiAL3gC5Ntw&s",
      },
      {
        id: 95,
        name: " Mustard Seeds (Rai/Sarson)",
        farm: "Sujay spice factory",
        price: 230,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCt1g81lcMDAwzjkRFEIcDEmZMdnlCsU2l2Q&s",
      },
      {
        id: 96,
        name: " Fenugreek (Methi)",
        farm: "Sujay spice factory",
        price: 630,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTqK4CDlqcxIEG_xLrzxO6JEjQIX5OJeXrg&s",
      },
      {
        id: 97,
        name: " Fennel Seeds (Saunf) ",
        farm: "Sujay spice factory",
        price: 430,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpiUVPVJa7a4aXx9DcPDZd4nVj8Bvrhvk1Q&s",
      },
      {
        id: 98,
        name: " Cardamom (Elaichi)",
        farm: "Sujay spice factory",
        price: 630,
        category: "spices",
        image:
          "https://www.kashmiribazaar.in/image/cache/catalog/pictures/products/mazdaar/green-cardamom-500x500-550x445.jpg",
      },
      {
        id: 99,
        name: " Cloves (Laung)",
        farm: "Sujay spice factory",
        price: 430,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLUVhlAhXjUTWmNA5n7-6TrT0wazBj1Gvcg&s",
      },
      {
        id: 100,
        name: " Nutmeg & Mace (Jaiphal & Javitri)",
        farm: "Sujay spice factory",
        price: 623,
        category: "spices",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/1/CJ/XU/LE/5642594/nutmeg-mace-jaiphal-javitri-jfif.jpg",
      },
      {
        id: 101,
        name: " Asafoetida (Hing)",
        farm: "Sujay spice factory",
        price: 399,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhLVK5zaP0KugPF2cOZfFqOm2xVZsiYpLwA&s",
      },
      {
        id: 102,
        name: " Bay Leaf (Tej Patta)",
        farm: "Sujay spice factory",
        price: 130,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWuK84fXTe_uFZTWFaTfKKHmlkLTHIKHf7g&s",
      },
      {
        id: 103,
        name: " Chili (Mirchi)",
        farm: "Sujay spice factory",
        price: 123,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMAs1QXjNiXsl31c81jUkjv5zd5z5e8qiPJg&s",
      },
      {
        id: 104,
        name: " Star Anise (Chakra Phool)",
        farm: "Sujay spice factory",
        price: 230,
        category: "spices",
        image: "https://m.media-amazon.com/images/I/61w9-4K+1YS._AC_UF1000,1000_QL80_.jpg",
      },
      {
        id: 105,
        name: " Ginger (Adrak/Sonth – Dried Ginger)",
        farm: "Sujay spice factory",
        price: 232,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP2_0h_dufn2KONxhZc70BvnjwtZIA49SIQ&s",
      },
      {
        id: 106,
        name: " Tamarind (Imli) ",
        farm: "Sujay spice factory",
        price: 213,
        category: "spices",
        image:
          "https://www.jamoona.com/cdn/shop/files/450g-Frische-suesser-Imli--Suesser-Tamarind--9018424_grande.png?v=1738017113",
      },
      {
        id: 107,
        name: " Carom Seeds (Ajwain)",
        farm: "Sujay spice factory",
        price: 232,
        category: "spices",
        image: "https://m.media-amazon.com/images/I/51Sm64oJ1JL.jpg",
      },
      {
        id: 108,
        name: " Saffron (Kesar)",
        farm: "Sujay spice factory",
        price: 235,
        category: "spices",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxdFrxjHKRTtHHflcijftzOegXfS5fITTLzg&s",
      },
      {
        id: 109,
        name: " Garcinia (Kokum)",
        farm: "Sujay spice factory",
        price: 330,
        category: "spices",
        image: "https://m.media-amazon.com/images/I/71C2xWPRiML._AC_UF1000,1000_QL80_.jpg",
      },
    ]
  
    products.push(...sampleProducts)
  
    localStorage.setItem("products", JSON.stringify(products))
  }
  
  
