function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>From ${product.farm}</p>
            <p>₹${product.price.toFixed(2)}/kg</p>
           `; 
        productsContainer.appendChild(productElement);
    });
}



const products = [
    { id: 1, name: " Tomatoes", farm: "farm1", price: 40 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9-OuOtsl4iecwrOQ4c00iOqngoUdBz1dzQ&s" },
    { id: 2, name: " Lettuce(cabage)", farm: "farm2", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzIH5VqsiJflnV4xJrPBtQiZIcd1dtvHdYA&s" },
    { id: 3, name: " Fenugreek Leaves (Methi)", farm: "farm3", price: 180, image: "https://beejwala.com/cdn/shop/products/fenugreek-4_compressed.jpg?v=1653821518" },
    { id: 4, name: " Carrots(gajar)", farm: "farm4", price: 120, image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1736515665" },
    { id: 5, name: " Potato", farm: "farm5", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaXIQooiS7C2syrl1H9RuQ3kcZT7mbs5yKA&s" },
    { id: 6, name: " onion", farm: "farm6", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW7-aAJENmiznbqnQftzp5vCP4GYEiOOFUg&s" },
    { id: 7, name: " lady finger(bhindi)", farm: "farm6", price: 30, image: "https://ilovenursery.com/wp-content/uploads/2024/12/Bhindi-Okra-F1-Sujata-Vegetable-Seeds.jpg" },
    { id: 8, name: " Bottle Gourd (Lauki)", farm: "farm7", price: 20, image: "https://mybageecha.com/cdn/shop/products/Bottle_Gourd.jpg?v=1571438537" },
    { id: 9, name: " Green Chillies", farm: "farm1", price: 40 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDucAlTs_A_rDBTi7A17mLtDnSnUUjt_BUhQ&s" },
    { id: 10, name: " Brinjal (Eggplant/Baingan)", farm: "farm2", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvNNnLkuTF4DAnx4c_FD7Glkx8q4-BFq7fQ&s" },
    { id: 11, name: " Cauliflower", farm: "farm3", price: 180, image: "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg" },
    { id: 12, name: " Spinach (Palak)", farm: "farm4", price: 120, image: "https://www.greendna.in/cdn/shop/products/palak0_1200x1200.jpg?v=1715600951" },
    { id: 13, name: " Bitter Gourd (Karela)", farm: "farm5", price: 30, image: "https://5.imimg.com/data5/ANDROID/Default/2020/9/MA/ZW/TM/60197190/product-jpeg-500x500.jpeg" },
    { id: 14, name: " Ridge Gourd (Turai)", farm: "farm6", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQAqh4aJ1b_czEi0vajp4G7bQuomj9MaITQ&s" },
    { id: 15, name: " Pumpkin (Kaddu)", farm: "farm6", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s1GWpHAq7u9STEgy76RYA6ohwJEZHTlE3w&s" },
    { id: 16, name: " Drumsticks (Moringa/Sahjan)", farm: "farm7", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx62JPRwngd1fD9gNSvd34UxOLCh-OUKFl2A&s" },
    { id: 17, name: " Sweet Potato (Shakarkand)", farm: "farm1", price: 40 , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdX7wf8GcwCJ4rnBu07wMueAPvutJYHf1HQ&s" },
    { id: 18, name: " Radish (Mooli)", farm: "farm2", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR50GsAYX_gLV8iSizviibEPq9LaVJFIC5w&s" },
    { id: 19, name: " Peas (Matar)", farm: "farm3", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8Uls-ksQgfKoe8bgcyvr0wlY4qZaFbfXUw&s" },
    { id: 20, name: " Coriander Leaves (Dhaniya)", farm: "farm4", price: 120, image: "https://gogarden.co.in/cdn/shop/files/Go-Garden-coriander-seeds_3ef90ed7-8019-4438-bccd-e809786f29ce.jpg?v=1687001828" },
   
    
]

document.addEventListener('DOMContentLoaded', () =>{
displayProducts();
})