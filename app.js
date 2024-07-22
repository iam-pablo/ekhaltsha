//variables
// const cartBtn = document.querySelector(".cart-btn");
// const closeCartBtn = document.querySelector(".close-cart");
// const clearCartBtn = document.querySelector(".clear-cart");
// const cartDOM = document.querySelector(".cart");
// const cartOverlay = document.querySelector(".cart-overlay");
// const cartItems = document.querySelector(".cart-items");
// const cartTotal = document.querySelector(".cart-total");

// import businessObject from "./business";

// const cartContent = document.querySelector(".cart-content");
const contentWrap = document.querySelector(".content-wrap");
const productsDOM = document.querySelector(".products-center");

//cart
let cart = [];

//buttons
let buttonsDOM = []


// BUSINESS FUNCTIONALITY
class Businesses {
    async getProducts(){
        try {
            let result = await fetch('appData.json');
            let data = await result.json();

            let products = data.businesses;
            products = products.map(item => {
                const {title} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                const {description} = item.fields;
                const {categories} = item.fields;
                const {email} = item.fields;
                const {website} = item.fields;
                const {phone} = item.fields;
                const {smLinks} = item.fields;
                const {operatingHours} = item.fields;
                const {address} = item.fields;
                const {pictures} = item.fields;
                return {title,id,image,description,categories,email,website,phone,smLinks,operatingHours,address,pictures}          
            })
            return products;                            
        } catch (error) {
            console.log(error);
        }
        
    }
}

//display products
class BusinessesUI {
    displayProducts(products){
        let result = ''; 
        alphanumericSort(products);
        let numSection = '<section> <div id=num><h2>#</h2></div><div class="products-centers">';
        products.forEach(product =>{
            let firstLetter = product.title[0]
            if (isFirstLetterNumber(firstLetter)) {
                numSection += `<article class="product" data-id=${product.id}>
                                    <div class="img-container">
                                        <img src="${product.image}" alt="product" class="product-img">
                                    </div>
                                    <h3>${product.title}</h3>
                                    <h5 style="wdith:100%; text-align:center; text-transform: uppercase;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                </article>`
            }
        })
        numSection += "</div></section>";
        let res3 = "";
        let res4 = '<div class="products-centers">';
        
        for (let i = 97; i <= 122; i++){
            let uppercaseLetter = String.fromCharCode(i);
           
            res3 = '<section> <div id='+uppercaseLetter+'><h2>'+uppercaseLetter+'</h2></div>';
            res4 = '<div class="products-centers">';
            products.forEach(product => {
                
                let firstLetter = product.title[0];
                
                if(uppercaseLetter === firstLetter){
                     res4 += `<article class="product" data-id=${product.id}>
                              <div class="img-container">
                                  <img src="${product.image}" alt="product" class="product-img">
                              </div>
                              <h3>${product.title}</h3>
                              <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                              
                          </article>`
                }
            });
    
        
        res4+= `</div> </section>`;

        result +=  res3 + res4;
        // contentWrap.innerHTML = res1;
        // productsDOM.innerHTML = result;
    }
    let resDis = numSection + result;        
    productsDOM.innerHTML = resDis;
};

    getBagButtons(products){
        const buttons = [...document.querySelectorAll(".product")];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            console.log(id);
            let businessObject
            for (let index = 0; index < products.length; index++) {
                if (id === products[index].id) {
                    businessObject = products[index];
                }
            }

            button.addEventListener("click", event => {
                localStorage.setItem('business-id', id);
                localStorage.setItem('businessObject', JSON.stringify(businessObject));
                window.location.href = "business-info.html";
            });
            
        })

    };
    
}

function utfEncode(str) {
    return unescape(encodeURIComponent(str));
};
function isFirstLetterNumber(str){
    const firstChar = str.charAt(0);
    return !isNaN(parseInt(firstChar));
}

// events functionality
const eventsDOM = document.querySelector(".events-centre");

// getting the businesses
class Events {
    async getProducts(){
        try {
            let result = await fetch('appData.json');
            let data = await result.json();

            let products = data.events;
            products = products.map(item => {
                const {title} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                const {description} = item.fields;
                const {holidayEvent} = item.fields;
                const {category} = item.fields;
                const {infoEmail} = item.fields;
                const {infoNumber} = item.fields;
                const {website} = item.fields;
                const {ticketWebsite} = item.fields;
                const {occurence} = item.fields;
                const {address} = item.fields;
                const {mapLocation} = item.fields;
                return {title,id,image,description,category,holidayEvent,infoEmail,website,ticketWebsite,infoNumber,occurence,address,mapLocation}          
            })
            return products;                            
        } catch (error) {
            console.log(error);
        }
        
    }
}

//display products
class EventsUI {
    displayProducts(products){
        alphanumericSort(products);
        let results = '';
        // console.log(categories[1])

        // Get the container where the day divs will be appended
        var daysContainer = document.getElementById('daysContainer');

        // Get today's date
        var currentDate = new Date();

        // Loop through each day for the next two years
        for (var i = 0; i < 730; i++) { // 365 days/year * 2 years = 730 days
            // Create a new date object for the current day in the loop
            var date = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000)); // Add i days to the current date
            
            // Format the date as "YYYY-MM-DD"
            var formattedDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
            
            // Create a new div element for the day
            var dayDiv = document.createElement('div');
            
            // Set the ID of the div to the formatted date
            dayDiv.id = formattedDate;
            
            // Set the class of the div for styling
            dayDiv.className = 'day';
            
            // Set the text content of the div to the date
            //dayDiv.textContent = formattedDate;


            products.forEach(product =>{
                let startDate = new Date (product.occurence.startDate);
                
                let endDate = new Date (product.occurence.endDate); 
                //console.log(date + " "+ startDate + " " + endDate);
                
                if(formattedDate >= product.occurence.startDate && formattedDate <= product.occurence.endDate){
                    
                dayDiv.innerHTML += `<article class="product" data-id=${product.id}>
                                <div class="img-container">
                                <img src="${product.image}" alt="product" class="product-img">
                                </div>
                                <h3>${product.title}</h3>
                                <h5 style="wdith:100%; text-align:center;">${product.occurence.startDate} - ${product.occurence.endDate} </h5>
                            </article>`
                }
            })
            
            // Append the div to the container
            daysContainer.appendChild(dayDiv);
        }
};

    getBagButtons(products){
        const buttons = [...document.querySelectorAll(".product")];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            // console.log(id);
            let eventsObject
            for (let index = 0; index < products.length; index++) {
                if (id === products[index].id) {
                    eventsObject = products[index];
                }
            }

            button.addEventListener("click", event => {
                localStorage.setItem('business-id', id);
                localStorage.setItem('eventsObject', JSON.stringify(eventsObject));
                window.location.href = "event-info.html";
            });
            
        })

    };
    
}

// end of events functionality

// things-to-do functionality

// getting the businesses
class ThingsToDo {
    async getProducts(){
        try {
            let result = await fetch('appData.json');
            let data = await result.json();

            let products = data.thingstodo;
            products = products.map(item => {
                const {title} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                const {description} = item.fields;
                const {category} = item.fields;
                const {email} = item.fields;
                const {website} = item.fields;
                const {phone} = item.fields;
                const {smLinks} = item.fields;
                const {operatingHours} = item.fields;
                const {address} = item.fields;
                const {pictures} = item.fields;
                return {title,id,image,description,category,email,website,phone,smLinks,operatingHours,address,pictures}          
            })
            return products;                            
        } catch (error) {
            console.log(error);
        }
        
    }
}

//display products
class ThingsToDoUI {
    displayProducts(products){
        let categories = ["artsandculture", "attractions", "community", "eat", "nightlife", "shopping", "sports","stay", "takeatour"];
        let categoriesHTML = [' ',' ',' ',' ',' ',' ',' ',' '];
        // console.log(categories[1])
        products.forEach(product =>{
            for (let index = 0; index < categories.length; index++) {
                                
                console.log(product.category)
                if (product.category === categories[index]) {
                    categoriesHTML[index] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.category}</h5>
                                    </article>`
                }
            }
        })
    
        // console.log(categoriesHTML[0]);
        document.getElementById("artsandculture-container").innerHTML += categoriesHTML[0];
        document.getElementById("attractions-container").innerHTML += categoriesHTML[1];
        // console.log(categoriesHTML[1]);
        document.getElementById("community-container").innerHTML += categoriesHTML[2];
        // console.log(categoriesHTML[2]);
        document.getElementById("eat-container").innerHTML += categoriesHTML[3];
        // console.log(categoriesHTML[3]);
        document.getElementById("nightlife-container").innerHTML += categoriesHTML[4];
        document.getElementById("shopping-container").innerHTML += categoriesHTML[5];
        document.getElementById("sports-container").innerHTML += categoriesHTML[6];
        document.getElementById("tour-container").innerHTML += categoriesHTML[7];
    // productsDOM.innerHTML = resDis;
};

    getBagButtons(products){
        const buttons = [...document.querySelectorAll(".product")];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            console.log(id);
            let businessObject
            for (let index = 0; index < products.length; index++) {
                if (id === products[index].id) {
                    businessObject = products[index];
                }
            }

            button.addEventListener("click", event => {
                localStorage.setItem('business-id', id);
                localStorage.setItem('businessObject', JSON.stringify(businessObject));
                window.location.href = "business-info.html";
            });
            
        })

    };
    
}

// end of things-to-do functionality 

//local storage
class Storage {
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products));
    }

    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }

    static saveEvents(products){
        localStorage.setItem("events",JSON.stringify(products));
    }

    static getEvents(id){
        let products = JSON.parse(localStorage.getItem('events'));
        return products.find(product => product.id === id);
    }
    
    static saveThingsToDo(products){
        localStorage.setItem("thingstodo",JSON.stringify(products));
    }

    static getThingsToDo(id){
        let products = JSON.parse(localStorage.getItem('thingstodo'));
        return products.find(product => product.id === id);
    }
}

function alphanumericSort(arr) {
    // Sorting the JSON array by the 'name' property in alphanumeric order
// Sorting the 2D array by the 'title' property in alphanumeric order
arr.sort((a, b) => {
    // Extract the alphanumeric part from the 'title' property using regular expressions
    var regex = /(\d+)/g;
    var aMatch = a.title.match(regex);
    var bMatch = b.title.match(regex);
    
    // If both objects have numeric parts
    if (aMatch && bMatch) {
        // Convert the numeric parts to numbers and compare them
        var aNum = parseInt(aMatch[0]);
        var bNum = parseInt(bMatch[0]);
        if (aNum !== bNum) {
            return aNum - bNum; // Compare the numeric parts
        }
    }
    
    // If one of the objects doesn't have a numeric part or if the numeric parts are equal,
    // compare the titles as alphanumeric strings
    return a.title.localeCompare(b.title, 'en', { numeric: true });
});
}

document.addEventListener("DOMContentLoaded", () => {
    if(document.title === "eKhaltsha: Business Directory"){
        const ui = new BusinessesUI();
        const products = new Businesses();
            
        // get all products
        products.getProducts().then(products => {
            ui.displayProducts(products);
            Storage.saveProducts(products);
            ui.getBagButtons(products)
        });
    }

    if(document.title === "eKhaltsha: Events"){
        const ui = new EventsUI();
        const products = new Events();
        
        // get all products
        products.getProducts().then(products => {
            ui.displayProducts(products);
            Storage.saveEvents(products);
            ui.getBagButtons(products)
        });
    }

    if(document.title === "eKhaltsha: What To Do"){
        const ui = new ThingsToDoUI();
        const products = new ThingsToDo();
            
        // get all products
        products.getProducts().then(products => {
            ui.displayProducts(products);
            Storage.saveThingsToDo(products);
            ui.getBagButtons(products)
        });
    }
});

