
function displayProducts(productsToDisplay = products) {
    const productsContainer = document.getElementById('products');
   
     productsContainer.innerHTML = '';

     productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" ">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="farm">From ${product.farm}</p>
                <p class="price">₹${product.price.toFixed(2)}/kg</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        productElement.addEventListener('click', () => showProductDetails(product));
        productsContainer.appendChild(productElement);
    });
}


const products = [
    { id: 1, name: " Tomatoes", farm: "farm1", price: 40 ,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9-OuOtsl4iecwrOQ4c00iOqngoUdBz1dzQ&s" },
    { id: 2, name: " Lettuce(cabage)", farm: "farm2", price: 30,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzIH5VqsiJflnV4xJrPBtQiZIcd1dtvHdYA&s" },
    { id: 3, name: " Fenugreek Leaves (Methi)", farm: "farm3", price: 180,category: "vegetables", image: "https://beejwala.com/cdn/shop/products/fenugreek-4_compressed.jpg?v=1653821518" },
    { id: 4, name: " Carrots(gajar)", farm: "farm4", price: 120,category: "vegetables", image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1736515665" },
    { id: 5, name: " Potato", farm: "farm5", price: 30,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaXIQooiS7C2syrl1H9RuQ3kcZT7mbs5yKA&s" },
    { id: 6, name: " onion", farm: "farm6", price: 30,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW7-aAJENmiznbqnQftzp5vCP4GYEiOOFUg&s" },
    { id: 7, name: " lady finger(bhindi)", farm: "farm6",category: "vegetables", price: 30, image: "https://ilovenursery.com/wp-content/uploads/2024/12/Bhindi-Okra-F1-Sujata-Vegetable-Seeds.jpg" },
    { id: 8, name: " Bottle Gourd (Lauki)", farm: "farm7", price: 20,category: "vegetables", image: "https://mybageecha.com/cdn/shop/products/Bottle_Gourd.jpg?v=1571438537" },
    { id: 9, name: " Green Chillies", farm: "farm1", price: 40 ,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDucAlTs_A_rDBTi7A17mLtDnSnUUjt_BUhQ&s" },
    { id: 10, name: " Brinjal (Eggplant/Baingan)", farm: "farm2", price: 30,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvNNnLkuTF4DAnx4c_FD7Glkx8q4-BFq7fQ&s" },
    { id: 11, name: " Cauliflower", farm: "farm3", price: 180,category: "vegetables", image: "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg" },
    { id: 12, name: " Spinach (Palak)", farm: "farm4", price: 120,category: "vegetables", image: "https://www.greendna.in/cdn/shop/products/palak0_1200x1200.jpg?v=1715600951" },
    { id: 13, name: " Bitter Gourd (Karela)", farm: "farm5", price: 30,category: "vegetables", image: "https://5.imimg.com/data5/ANDROID/Default/2020/9/MA/ZW/TM/60197190/product-jpeg-500x500.jpeg" },
    { id: 14, name: " Ridge Gourd (Turai)", farm: "farm6", price: 30,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQAqh4aJ1b_czEi0vajp4G7bQuomj9MaITQ&s" },
    { id: 15, name: " Pumpkin (Kaddu)", farm: "farm6", price: 30,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s1GWpHAq7u9STEgy76RYA6ohwJEZHTlE3w&s" },
    { id: 16, name: " Drumsticks (Moringa/Sahjan)", farm: "farm7", price: 20,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx62JPRwngd1fD9gNSvd34UxOLCh-OUKFl2A&s" },
    { id: 17, name: " Sweet Potato (Shakarkand)", farm: "farm1", price: 40 ,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdX7wf8GcwCJ4rnBu07wMueAPvutJYHf1HQ&s" },
    { id: 18, name: " Radish (Mooli)", farm: "farm2", price: 30,category: "vegetables",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR50GsAYX_gLV8iSizviibEPq9LaVJFIC5w&s" },
    { id: 19, name: " Peas (Matar)", farm: "farm3", price: 180,category: "vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8Uls-ksQgfKoe8bgcyvr0wlY4qZaFbfXUw&s" },
    { id: 20, name: " Coriander Leaves (Dhaniya)", farm: "farm4", price: 120,category: "vegetables", image: "https://gogarden.co.in/cdn/shop/files/Go-Garden-coriander-seeds_3ef90ed7-8019-4438-bccd-e809786f29ce.jpg?v=1687001828" },

    { id: 21, name: " Mango (Alphonso, Kesar, Dasheri)", farm: "farm9", price: 80, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0Wfpzw8BkVS0tkIF8mVR-MatKmkaFlREGA&s" },
    { id: 22, name: " Banana (Robusta, Nendran)", farm: "farm9", price: 30, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4lduQ9XIOasprHq64dcwjPy-7ehuWafy5Q&s" },
    { id: 23, name: " Papaya", farm: "farm9", price: 30, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanQe8axqSghqEzpKfaURIXqnhRUt994CuRA&s" },
    { id: 24, name: " Guava (Allahabad variety)", farm: "farm9", price: 60, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6kX4F-vdgml6hbF71bzzHAeu2KVy1Gm1yw&s" },
    { id: 25, name: " Pomegranate", farm: "farm9", price: 200 , category: "fruits", image: "https://ucanr.edu/blogs/CCMGBlog/blogfiles/25690_original.jpg" },
    { id: 26, name: " Watermelon", farm: "farm9", price: 30, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIqdFfHWrJURhEu0PJb8iMIFXXhF3WLNwIA&s" },
    { id: 27, name: " Sweet Lime (Mosambi)", farm: "farm9", price: 150, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAovCRz7_PqN6dD6YPgMjQVF_JMcZ-wJmpw&s" },
    { id: 28, name: " Orange (Nagpur variety)", farm: "farm9", price: 120, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH7Uvw1O7ixFL66NfZ8g9B9YC-R7esc6Cvg&s" },
    { id: 29, name: " Jackfruit", farm: "farm9", price: 30, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic_KjZkPGYAjy016CpWH1__chILmTX5gBhQ&s" },
    { id: 30, name: " Apple (Kashmiri, Himachali)", farm: "farm9", price: 230, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s" },
    { id: 31, name: " Pineapple", farm: "farm9", price: 30, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGYVZ94skj0e1Gxs67fooNUmlq86RlMMjew&s" },
    { id: 32, name: " Chikoo (Sapota)", farm: "farm9", price: 20, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxxEhCcwy8stTJHfhHh8tvQ4rW3F1JHlekw&s" },
    { id: 33, name: " Custard Apple (Sitaphal)", farm: "farm9", price: 140 , category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PJe7V2I-zaEA8Epa4CDIJ7lyMbPOAkNEdg&s" },
    { id: 34, name: " Lychee(litchi)", farm: "farm9", price: 130, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOLH8CZdZkb9MrHyIRdDl6QaF5K3WAfdfJw&s" },
    { id: 35, name: " Grapes (Thompson Seedless, Anab-e-Shahi)", category: "fruits", farm: "farm9", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLarVRINtbFC9KlbVH9pXHS3cN3JnLPYkRw&s" },
    { id: 36, name: " Coconut", farm: "farm9", price: 40, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFagSixHc1JRlt_JrdnM0figuE2fxE8PyRo_4a8zFgIh_hgUPwiTbHIFJq2hZI4PXVqZ0&usqp=CAU" },
    { id: 37, name: " Indian Gooseberry (Amla)", farm: "farm9", price: 30, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjORHIl4ZUfUqOvRSdGpEvJa18unuLv2G2Q&s" },
    { id: 38, name: " Pear (Nashpati)", farm: "farm9", price: 430, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihlVz-tLq8CEEs-JgMEvlcy0VGk08dS7hOw&s" },
    { id: 39, name: " Plum (Alu Bukhara)", farm: "farm9", price: 130, category: "fruits", image: "https://www.bigbasket.com/media/uploads/p/l/30001054_7-fresho-plum-indian.jpg" },
    { id: 40, name: " Ber (Indian Jujube)", farm: "farm9", price: 120, category: "fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvmy6_aFsoFIWPeIPZC97CEAo44V5a6Dl2A&s" },
    { id: 41, name: " Wheat", farm: "farm8", price: 60 , category: "grains", image: "https://tiimg.tistatic.com/fp/1/006/386/food-grade-whole-wheat-grains-084.jpg" },
    { id: 42, name: " Rice (Paddy)", farm: "farm8", price: 60, category: "grains", image: "https://www.shutterstock.com/image-photo/bunch-paddy-rice-field-before-600nw-2219469869.jpg" },
    { id: 43, name: " Barley", farm: "farm8", price: 180, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFmtmhPwovAdRDZ9Q-_JENF8j70EYd_RX-A&s" },
    { id: 44, name: " Millet (Bajra)", farm: "farm8", price: 120, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIhfZbn6WBkBMHRTrFUWF5zP1DT97WyXCiw&s" },
    { id: 45, name: " Sorghum (Jowar)", farm: "farm8", price: 130, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRSaZFeSdMuND6eKKVugL5qDJ4BsXPF3slQ&s" },
    { id: 46, name: " Maize (Corn)", farm: "farm8", price: 130, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8mJaexq94edtBCwP3x2lLNwgsAG41uOXwA&s" },
    { id: 47, name: " Ragi (Finger Millet)", farm: "farm8", category: "grains", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUmHDQleFv1sjD2OdOG_8hyIGvi5hWUrVJw&s" },
    { id: 48, name: " Foxtail Millet", farm: "farm8", price: 120, category: "grains", image: "https://naturechoice.in/eeghoacm/2022/07/Foxtail_millet-1.jpg" },
    { id: 49, name: " Pearl Millet", farm: "farm8", price: 140 , category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJeuAFFB4cb03byA1oBpuAYOD9iTm-yButw&s" },
    { id: 50, name: " Oats", farm: "farm8", price: 330, category: "grains", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg" },
    { id: 51, name: " Quinoa", farm: "farm8", price: 480, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIOwSmbtXpH8xQ3AXckoty051f7sW3oRhWg&s" },
    { id: 52, name: " Chickpeas (Gram)", farm: "farm8", category: "grains", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JBbGG7BhH6NL_FVudS4dTMQ0ioUMKEkVvA&s" },
    { id: 53, name: " Lentils(Masoor)", farm: "farm8", price: 120, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp5swwCh2E41xcaRfX9JhuE4Z8IMfZZpIvw&s" },
    { id: 54, name: " Kidney Beans(Rajma)", farm: "farm8", price: 430, category: "grains", image: "https://biobasics.org/cdn/shop/files/order-organic-rajima-chitra-online-at-bio-basics.png?v=1736601880" },
    { id: 55, name: " Pigeon Beans(Toor Dal)", farm: "farm8", price: 130, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTVvdN1rGmHB_Mvgvfgm5HsnUQKqIb1do5A&s" },
    { id: 56, name: " Black Gram(Urad Dal)", farm: "farm8", price: 120, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvaymYXLOdxIW7HV7J4ZyMdQNIB0bwjbvUw&s" },
    { id: 57, name: " Chia", farm: "farm8", price: 3999, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ImdprbHdRJnqFN5TXTUaWhUdyk9KmZMEfw&s" },
    { id: 58, name: " Hoorsde Gram(Kulthi)", farm: "farm8", price: 140 , category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROefSuch6v2EeYb__f34FC_5H6i3-KZkQz_w&s" },
    { id: 59, name: " Soybean", farm: "farm8", price: 130, category: "grains", image: "https://5.imimg.com/data5/SI/VC/MY-21496561/soybean-seeds-500x500.jpg" },
    { id: 60, name: " Blucwheat(Kuttu)", farm: "farm8", price: 280, category: "grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW6QLJJizmMQNEy8WJRzY0BfGhcMANz4b_A&s" },
];



document.addEventListener('DOMContentLoaded', () =>{
displayProducts();
})