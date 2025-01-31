const products = [
   
    { id: 1, name: " Tomatoes", farm: "farm1", price: 40 ,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9-OuOtsl4iecwrOQ4c00iOqngoUdBz1dzQ&s" },
    { id: 2, name: " Lettuce(cabage)", farm: "farm2", price: 30,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzIH5VqsiJflnV4xJrPBtQiZIcd1dtvHdYA&s" },
    { id: 3, name: " Fenugreek Leaves (Methi)", farm: "farm3", price: 180,category: "Vegetables", image: "https://beejwala.com/cdn/shop/products/fenugreek-4_compressed.jpg?v=1653821518" },
    { id: 4, name: " Carrots(gajar)", farm: "farm4", price: 120,category: "Vegetables", image: "https://gourmetgarden.in/cdn/shop/products/Carrot_1280x.jpg?v=1736515665" },
    { id: 5, name: " Potato", farm: "farm5", price: 30,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZaXIQooiS7C2syrl1H9RuQ3kcZT7mbs5yKA&s" },
    { id: 6, name: " onion", farm: "farm6", price: 30,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW7-aAJENmiznbqnQftzp5vCP4GYEiOOFUg&s" },
    { id: 7, name: " lady finger(bhindi)", farm: "farm6",category: "Vegetables", price: 30, image: "https://ilovenursery.com/wp-content/uploads/2024/12/Bhindi-Okra-F1-Sujata-Vegetable-Seeds.jpg" },
    { id: 8, name: " Bottle Gourd (Lauki)", farm: "farm7", price: 20,category: "Vegetables", image: "https://mybageecha.com/cdn/shop/products/Bottle_Gourd.jpg?v=1571438537" },
    { id: 9, name: " Green Chillies", farm: "farm1", price: 100 ,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDucAlTs_A_rDBTi7A17mLtDnSnUUjt_BUhQ&s" },
    { id: 10, name: " Brinjal (Eggplant/Baingan)", farm: "farm2", price: 30,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvNNnLkuTF4DAnx4c_FD7Glkx8q4-BFq7fQ&s" },
    { id: 11, name: " Cauliflower", farm: "farm3", price: 180,category: "Vegetables", image: "https://m.media-amazon.com/images/I/91EdPVzD99L._AC_UF1000,1000_QL80_.jpg" },
    { id: 12, name: " Spinach (Palak)", farm: "farm4", price: 120,category: "Vegetables", image: "https://www.greendna.in/cdn/shop/products/palak0_1200x1200.jpg?v=1715600951" },
    { id: 13, name: " Bitter Gourd (Karela)", farm: "farm5", price: 30,category: "Vegetables", image: "https://5.imimg.com/data5/ANDROID/Default/2020/9/MA/ZW/TM/60197190/product-jpeg-500x500.jpeg" },
    { id: 14, name: " Ridge Gourd (Turai)", farm: "farm6", price: 30,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQAqh4aJ1b_czEi0vajp4G7bQuomj9MaITQ&s" },
    { id: 15, name: " Pumpkin (Kaddu)", farm: "farm6", price: 30,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-s1GWpHAq7u9STEgy76RYA6ohwJEZHTlE3w&s" },
    { id: 16, name: " Drumsticks (Moringa/Sahjan)", farm: "farm7", price: 20,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx62JPRwngd1fD9gNSvd34UxOLCh-OUKFl2A&s" },
    { id: 17, name: " Sweet Potato (Shakarkand)", farm: "farm1", price: 40 ,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdX7wf8GcwCJ4rnBu07wMueAPvutJYHf1HQ&s" },
    { id: 18, name: " Radish (Mooli)", farm: "farm2", price: 30,category: "Vegetables",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoR50GsAYX_gLV8iSizviibEPq9LaVJFIC5w&s" },
    { id: 19, name: " Peas (Matar)", farm: "farm3", price: 180,category: "Vegetables", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8Uls-ksQgfKoe8bgcyvr0wlY4qZaFbfXUw&s" },
    { id: 20, name: " Coriander Leaves (Dhaniya)", farm: "farm4", price: 120,category: "Vegetables", image: "https://gogarden.co.in/cdn/shop/files/Go-Garden-coriander-seeds_3ef90ed7-8019-4438-bccd-e809786f29ce.jpg?v=1687001828" },

   
    { id: 21, name: " Mango (Alphonso, Kesar, Dasheri)", farm: "farm9", price: 80, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0Wfpzw8BkVS0tkIF8mVR-MatKmkaFlREGA&s" },
    { id: 22, name: " Banana (Robusta, Nendran)", farm: "farm9", price: 30, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4lduQ9XIOasprHq64dcwjPy-7ehuWafy5Q&s" },
    { id: 23, name: " Papaya", farm: "farm9", price: 30, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanQe8axqSghqEzpKfaURIXqnhRUt994CuRA&s" },
    { id: 24, name: " Guava (Allahabad variety)", farm: "farm9", price: 60, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6kX4F-vdgml6hbF71bzzHAeu2KVy1Gm1yw&s" },
    { id: 25, name: " Pomegranate", farm: "farm9", price: 200 , category: "Fruits", image: "https://ucanr.edu/blogs/CCMGBlog/blogfiles/25690_original.jpg" },
    { id: 26, name: " Watermelon", farm: "farm9", price: 30, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIqdFfHWrJURhEu0PJb8iMIFXXhF3WLNwIA&s" },
    { id: 27, name: " Sweet Lime (Mosambi)", farm: "farm9", price: 150, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAAovCRz7_PqN6dD6YPgMjQVF_JMcZ-wJmpw&s" },
    { id: 28, name: " Orange (Nagpur variety)", farm: "farm9", price: 120, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbH7Uvw1O7ixFL66NfZ8g9B9YC-R7esc6Cvg&s" },
    { id: 29, name: " Jackfruit", farm: "farm9", price: 30, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic_KjZkPGYAjy016CpWH1__chILmTX5gBhQ&s" },
    { id: 30, name: " Apple (Kashmiri, Himachali)", farm: "farm9", price: 230, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s" },
    { id: 31, name: " Pineapple", farm: "farm9", price: 30, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGYVZ94skj0e1Gxs67fooNUmlq86RlMMjew&s" },
    { id: 32, name: " Chikoo (Sapota)", farm: "farm9", price: 20, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxxEhCcwy8stTJHfhHh8tvQ4rW3F1JHlekw&s" },
    { id: 33, name: " Custard Apple (Sitaphal)", farm: "farm9", price: 140 , category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PJe7V2I-zaEA8Epa4CDIJ7lyMbPOAkNEdg&s" },
    { id: 34, name: " Lychee(litchi)", farm: "farm9", price: 130, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOLH8CZdZkb9MrHyIRdDl6QaF5K3WAfdfJw&s" },
    { id: 35, name: " Grapes (Thompson Seedless, Anab-e-Shahi)", category: "Fruits", farm: "farm9", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLarVRINtbFC9KlbVH9pXHS3cN3JnLPYkRw&s" },
    { id: 36, name: " Coconut", farm: "farm9", price: 40, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFagSixHc1JRlt_JrdnM0figuE2fxE8PyRo_4a8zFgIh_hgUPwiTbHIFJq2hZI4PXVqZ0&usqp=CAU" },
    { id: 37, name: " Indian Gooseberry (Amla)", farm: "farm9", price: 30, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjORHIl4ZUfUqOvRSdGpEvJa18unuLv2G2Q&s" },
    { id: 38, name: " Pear (Nashpati)", farm: "farm9", price: 430, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTihlVz-tLq8CEEs-JgMEvlcy0VGk08dS7hOw&s" },
    { id: 39, name: " Plum (Alu Bukhara)", farm: "farm9", price: 130, category: "Fruits", image: "https://www.bigbasket.com/media/uploads/p/l/30001054_7-fresho-plum-indian.jpg" },
    { id: 40, name: " Ber (Indian Jujube)", farm: "farm9", price: 120, category: "Fruits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvmy6_aFsoFIWPeIPZC97CEAo44V5a6Dl2A&s" },

   
    { id: 41, name: " Wheat", farm: "farm8", price: 60 , category: "Grains", image: "https://tiimg.tistatic.com/fp/1/006/386/food-grade-whole-wheat-grains-084.jpg" },
    { id: 42, name: " Rice (Paddy)", farm: "farm8", price: 60, category: "Grains", image: "https://www.shutterstock.com/image-photo/bunch-paddy-rice-field-before-600nw-2219469869.jpg" },
    { id: 43, name: " Barley", farm: "farm8", price: 180, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFmtmhPwovAdRDZ9Q-_JENF8j70EYd_RX-A&s" },
    { id: 44, name: " Millet (Bajra)", farm: "farm8", price: 120, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIhfZbn6WBkBMHRTrFUWF5zP1DT97WyXCiw&s" },
    { id: 45, name: " Sorghum (Jowar)", farm: "farm8", price: 130, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRSaZFeSdMuND6eKKVugL5qDJ4BsXPF3slQ&s" },
    { id: 46, name: " Maize (Corn)", farm: "farm8", price: 130, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8mJaexq94edtBCwP3x2lLNwgsAG41uOXwA&s" },
    { id: 47, name: " Ragi (Finger Millet)", farm: "farm8", category: "Grains", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiUmHDQleFv1sjD2OdOG_8hyIGvi5hWUrVJw&s" },
    { id: 48, name: " Korra (Foxtail Millet)", farm: "farm8", price: 120, category: "Grains", image: "https://naturechoice.in/eeghoacm/2022/07/Foxtail_millet-1.jpg" },
    { id: 49, name: " Bajra (Pearl Millet)", farm: "farm8", price: 140 , category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJeuAFFB4cb03byA1oBpuAYOD9iTm-yButw&s" },
    { id: 50, name: " Oats", farm: "farm8", price: 330, category: "Grains", image: "https://media.post.rvohealth.io/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg" },
    { id: 51, name: " Quinoa", farm: "farm8", price: 480, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIOwSmbtXpH8xQ3AXckoty051f7sW3oRhWg&s" },
    { id: 52, name: " Chana(Chickpeas)", farm: "farm8", category: "Grains", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JBbGG7BhH6NL_FVudS4dTMQ0ioUMKEkVvA&s" },
    { id: 53, name: " Lentils(Masoor)", farm: "farm8", price: 120, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrp5swwCh2E41xcaRfX9JhuE4Z8IMfZZpIvw&s" },
    { id: 54, name: " Kidney Beans(Rajma)", farm: "farm8", price: 430, category: "Grains", image: "https://biobasics.org/cdn/shop/files/order-organic-rajima-chitra-online-at-bio-basics.png?v=1736601880" },
    { id: 55, name: " Pigeon Beans(Toor Dal)", farm: "farm8", price: 130, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTVvdN1rGmHB_Mvgvfgm5HsnUQKqIb1do5A&s" },
    { id: 56, name: " Black Gram(Urad Dal)", farm: "farm8", price: 120, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvaymYXLOdxIW7HV7J4ZyMdQNIB0bwjbvUw&s" },
    { id: 56, name: " Toor Daal (Pigeon Peas)", farm: "farm57", price: 120, category: "Grains", image: "https://th.bing.com/th/id/OIP.T2po5ix4FXF-NBbNeKD45AHaGK?rs=1&pid=ImgDetMain" },
    { id: 58, name: " Hoorsde Gram(Kulthi)", farm: "farm58", price: 140 , category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROefSuch6v2EeYb__f34FC_5H6i3-KZkQz_w&s" },
    { id: 59, name: " Soybean", farm: "farm59", price: 130, category: "Grains", image: "https://5.imimg.com/data5/SI/VC/MY-21496561/soybean-seeds-500x500.jpg" },
    { id: 60, name: " Blucwheat(Kuttu)", farm: "farm60", price: 280, category: "Grains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW6QLJJizmMQNEy8WJRzY0BfGhcMANz4b_A&s" },

    
    { id: 61, name: "Milk", category: "Dairy", price: 2.99, farm: "Creamy Meadows", address: "6060 Udder St, Lactoseville", image: "https://th.bing.com/th/id/OIP.QWKJmi9ZKNwduLLDqwoy6QHaE8?w=282&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 62, name: "Cheese", category: "Dairy", price: 4.99, farm: "Cheddar Hills", address: "6161 Curds Way, Moldyville", image: "https://th.bing.com/th/id/OIP.CAINRPFv1EUiOHO1jiAHtwHaEo?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 63, name: "Yogurt", category: "Dairy", price: 3.49, farm: "Culture Creek", address: "6262 Probiotic Pl, Fermentville", image: "https://pngimg.com/uploads/yogurt/yogurt_PNG15189.png" },
    { id: 64, name: "Butter", category: "Dairy", price: 3.99, farm: "Buttercup Pastures", address: "6363 Churn Ln, Creamytown", image: "https://wallpaperaccess.com/full/1634267.jpg" },
    { id: 65, name: "Cream", category: "Dairy", price: 2.79, farm: "Silky Smooth Dairy", address: "6464 Whipped Peak, Richville", image: "https://th.bing.com/th/id/OIP.undK2Sd5_LX79h6fM3Mz_wHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 66, name: "Sour Cream", category: "Dairy", price: 2.49, farm: "Tangy Tastes", address: "6565 Tart Terrace, Zestyville", image: "https://th.bing.com/th/id/OIP.qxU2RQSvQaRNjppCigiOcAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 67, name: "Cottage Cheese", category: "Dairy", price: 3.29, farm: "Curdy Commons", address: "6666 Lumpy Ln, Proteinville", image: "https://th.bing.com/th/id/OIP.ZVDXUHwRE3I4874_lkjOgQHaE7?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 68, name: "Kefir", category: "Dairy", price: 3.99, farm: "Probiotic Paradise", address: "6767 Ferment Rd, Healthgutville", image: "https://th.bing.com/th/id/OIP.T-DjFr0xEgczxRXOpcSPtQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 69, name: "Ghee", category: "Dairy", price: 5.99, farm: "Clarified Acres", address: "6868 Golden Oil Rd, Buttertown", image: "https://th.bing.com/th/id/OIP.v8WpOA_44eXStcaEfLmqBAHaE8?w=302&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 70, name: "Goat Cheese", category: "Dairy", price: 6.99, farm: "Billy's Best", address: "6969 Kid Ct, Tangyton", image: "https://th.bing.com/th/id/OIP.pfu26I0fU-gD_LjczK2c1gHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 71, name: "Whey Protein", category: "Dairy", price: 19.99, farm: "Muscle Meadows", address: "7070 Protein Pkwy, Gainsville", image: "https://th.bing.com/th/id/OIP.WIqSmH5hBckOZ4Anaja04AHaE8?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 72, name: "Ice Cream", category: "Dairy", price: 4.99, farm: "Frosty Fields", address: "7171 Scoop St, Sweetville", image: "https://th.bing.com/th/id/OIP.lFEzsOjEyZLb9hK-N-CKeQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 73, name: "Ricotta", category: "Dairy", price: 3.99, farm: "Soft Cheese Sanctuary", address: "7272 Whey Way, Lasagnaville", image: "https://th.bing.com/th/id/OIP.L-m_eG0kmvczMrc_7XEQHAHaE8?w=256&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 74, name: "Mascarpone", category: "Dairy", price: 4.49, farm: "Creamy Dreams", address: "7373 Tiramisu Trail, Dessertville", image: "https://th.bing.com/th/id/OIP.JOGCyvOq5wf9l1VU_AimtgHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 75, name: "Feta", category: "Dairy", price: 4.29, farm: "Mediterranean Meadows", address: "7474 Briny Blvd, Greeceville", image: "https://th.bing.com/th/id/OIP.u8uHe02EYuliao8aQgI0wAHaE8?w=303&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 76, name: "Parmesan", category: "Dairy", price: 6.99, farm: "Aged Artisans", address: "7575 Grana Grotto, Umamiland", image: "https://th.bing.com/th/id/OIP.DE9iEa1r07q-ucRHOF3-LgHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 77, name: "Mozzarella", category: "Dairy", price: 4.49, farm: "Stretchy Strings", address: "7676 Pizza Piazza, Meltville", image: "https://th.bing.com/th/id/OIP.nCAjBQF9Fs_Pvk7JWwgUEQHaE8?rs=1&pid=ImgDetMain" },
    { id: 78, name: "Brie", category: "Dairy", price: 5.99, farm: "Creamy Rind Ranch", address: "7777 Soft Wheel Way, Franceville", image: "https://th.bing.com/th/id/OIP.FPB0jtMlpW4wEPqr7nDRkwHaE8?w=293&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 79, name: "Blue Cheese", category: "Dairy", price: 7.99, farm: "Moldy Meadows", address: "7878 Pungent Path, Stinkyville", image: "https://th.bing.com/th/id/OIP.Qmi9orOFI0I7uS5T0OmXjgHaFn?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { id: 80, name: "Gouda", category: "Dairy", price: 5.49, farm: "Dutch Delights", address: "7979 Waxy Wheel Rd, Hollandville", image: "https://th.bing.com/th/id/OIP.5Vy-Wc0PRQkvR8TiCEr91wHaFR?w=255&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

let cart = [];

function displayProducts(productsToShow = products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <p>${product.farm}</p>
                <button onclick="showProductDetails(${product.id})">View Details</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('product-modal');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductDetails = document.getElementById('modal-product-details');
    
    modalProductName.textContent = product.name;
    modalProductDetails.innerHTML = `
        <p>Category: ${product.category}</p>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>Farm: ${product.farm}</p>
        <p>Address: ${product.address}</p>
    `;
    
    modal.style.display = 'block';
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItems.appendChild(itemElement);
        total += item.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
    modal.style.display = 'block';
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    document.getElementById('cart-modal').style.display = 'none';
}

function showChat(farmName) {
    const modal = document.getElementById('chat-modal');
    modal.style.display = 'block';
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (chatInput.value.trim() !== '') {
        const message = document.createElement('p');
        message.textContent = `You: ${chatInput.value}`;
        chatMessages.appendChild(message);
        chatInput.value = '';
        
        // Simulate farmer response
        setTimeout(() => {
            const farmerMessage = document.createElement('p');
            farmerMessage.textContent = 'Farmer: Thank you for your message. How can I help you?';
            chatMessages.appendChild(farmerMessage);
        }, 1000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    
    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');
    
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', showCart);
    
    const checkoutBtn = document.getElementById('checkout');
    checkoutBtn.addEventListener('click', checkout);
    
    const contactFarmerBtn = document.getElementById('contact-farmer');
    contactFarmerBtn.addEventListener('click', () => showChat('Sample Farm'));
    
    const sendMessageBtn = document.getElementById('send-message');
    sendMessageBtn.addEventListener('click', sendMessage);
    
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });
});

function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) &&
        (selectedCategory === '' || product.category === selectedCategory)
    );
    
    displayProducts(filteredProducts);
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

