/**
 * JavaScript
 */


/*---------------------       JavaScript setup      ----------*/

function pageWidth() {
    return window.innerWidth != null ? window.innerWidth : document.documentElement &&
        document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ?
        document.body.clientWidth : null;
}

function pageHeight() {
    return window.innerHeight != null ? window.innerHeight : document.documentElement &&
        document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body !=
        null ? document.body.clientHeight : null;
}

var cpageWidth = 0

//---------------------- navigation bar ----------------------------------//

// setting up floating nav
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");

function showCart() {
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
};


function hideCart(){
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
};

function setupAPP(){
        cartBtn.addEventListener('click', () => {
            cartOverlay.classList.add('transparentBcg');
            cartDOM.classList.add('showCart');
        });
        closeCartBtn.addEventListener('click', () => {
            cartOverlay.classList.remove('transparentBcg');
            cartDOM.classList.remove('showCart');
        });


        // menu toggles
        document.getElementById("toggleDivA").addEventListener("click", function() {
            var hiddenDiv = document.getElementById("hiddenDivA");
            if (hiddenDiv.style.display === "none"){
                hiddenDiv.style.display = "grid";
            } else {
                hiddenDiv.style.display = "none";
            }

            var hiddenSpan = document.getElementById("hiddenSpanA");
            var shownSpan = document.getElementById("shownSpanA");
            if(hiddenSpan.style.display === "none"){
                hiddenSpan.style.display = "block"
                shownSpan.style.display = "none"
            } else {
                hiddenSpan.style.display = "none"
                shownSpan.style.display = "inline"
            }
        })
        document.getElementById("toggleDivB").addEventListener("click", function() {
            var hiddenDiv = document.getElementById("hiddenDivB");
            if (hiddenDiv.style.display === "none"){
                hiddenDiv.style.display = "grid";
            } else {
                hiddenDiv.style.display = "none";
            }

            var hiddenSpan = document.getElementById("hiddenSpanB");
            var shownSpan = document.getElementById("shownSpanB");
            if(hiddenSpan.style.display === "none"){
                hiddenSpan.style.display = "block"
                shownSpan.style.display = "none"
            } else {
                hiddenSpan.style.display = "none"
                shownSpan.style.display = "inline"
            }
        })
        document.getElementById("toggleDivC").addEventListener("click", function() {
            var hiddenDiv = document.getElementById("hiddenDivC");
            if (hiddenDiv.style.display === "none"){
                hiddenDiv.style.display = "grid";
            } else {
                hiddenDiv.style.display = "none";
            }

            var hiddenSpan = document.getElementById("hiddenSpanC");
            var shownSpan = document.getElementById("shownSpanC");
            if(hiddenSpan.style.display === "none"){
                hiddenSpan.style.display = "block"
                shownSpan.style.display = "none"
            } else {
                hiddenSpan.style.display = "none"
                shownSpan.style.display = "inline"
            }
        })
    };

    function menuToggle (){
        // menu menu
        let communityToggle = document.getElementById("community-toggle");
        let communityElement = document.getElementById("community")

        let eatToggle = document.getElementById("eat-toggle");
        let eatElement = document.getElementById("eat");

        let artsandcultureToggle = document.getElementById("artsandculture-toggle");
        let artsandculture = document.getElementById("artsandculture");

        let attractionsToggle = document.getElementById("attractions-toggle")
        let attractions = document.getElementById("attractions");

        let shoppingToggle = document.getElementById("shopping-toggle");
        let shopping = document.getElementById("shopping")

        let nightlifeToggle = document.getElementById("nightlife-toggle");
        let nightlife = document.getElementById("nightlife");

        let sportsToggle = document.getElementById("sports-toggle");
        let sports = document.getElementById("sports");

        let takeatourToggle = document.getElementById("take-a-tour-toggle");
        let takeatour = document.getElementById("take-a-tour")
        
        let stayToggle = document.getElementById("stay-toggle");
        let stay = document.getElementById("stay");
        
        attractionsToggle.addEventListener("click", function() {
            
                attractions.style.display = "grid";
                attractions.scrollIntoView({ behavior: 'smooth', block: 'start'});

                artsandculture.style.display = "none";
                eat.style.display = "none";
                community.style.display = "none";
                shopping.style.display = "none";
                nightlife.style.display = "none";
                sports.style.display = "none";
                takeatour.style.display = "none";
                stay.style.display = "none";
        })

        eatToggle.addEventListener("click",function() {
            
                eat.style.display = "grid";
                eat.scrollIntoView({ behavior: 'smooth', block: 'start'});

                artsandculture.style.display = "none";
                attractions.style.display = "none";
                community.style.display = "none";
                shopping.style.display = "none";
                nightlife.style.display = "none";
                sports.style.display = "none";
                takeatour.style.display = "none";
                stay.style.display = "none";
        })

        communityToggle.addEventListener("click", function() {
            
                community.style.display = "grid";
                community.scrollIntoView({ behavior: 'smooth', block: 'start'});

                artsandculture.style.display = "none";
                attractions.style.display = "none";
                eat.style.display = "none";
                shopping.style.display = "none";
                nightlife.style.display = "none";
                sports.style.display = "none";
                takeatour.style.display = "none";
                stay.style.display = "none";
        })

        shoppingToggle.addEventListener("click", function() {
            
                shopping.style.display = "grid";
                shopping.scrollIntoView({ behavior: 'smooth', block: 'start'});

                artsandculture.style.display = "none";
                attractions.style.display = "none";
                eat.style.display = "none";
                community.style.display = "none";
                nightlife.style.display = "none";
                sports.style.display = "none";
                takeatour.style.display = "none";
                stay.style.display = "none";
        })

        nightlifeToggle.addEventListener("click", function(){
            
                nightlife.style.display = "grid";
                nightlife.scrollIntoView({ behavior: 'smooth', block: 'start'});

                artsandculture.style.display = "none";
                attractions.style.display = "none";
                eat.style.display = "none";
                community.style.display = "none";
                shopping.style.display = "none";
                sports.style.display = "none";
                takeatour.style.display = "none";
                stay.style.display = "none";
        })

        sportsToggle.addEventListener("click", function(){
            
                sports.style.display = "grid";
                sports.scrollIntoView({ behavior: 'smooth', block: 'start'});

                artsandculture.style.display = "none";
                attractions.style.display = "none";
                eat.style.display = "none";
                community.style.display = "none";
                shopping.style.display = "none";
                nightlife.style.display = "none";
                takeatour.style.display = "none";
                stay.style.display = "none";
        })

        stayToggle.addEventListener("click", function(){
            
            stay.style.display = "grid";
            stay.scrollIntoView({ behavior: 'smooth', block: 'start'});

            artsandculture.style.display = "none";
            attractions.style.display = "none";
            eat.style.display = "none";
            community.style.display = "none";
            shopping.style.display = "none";
            nightlife.style.display = "none";
            takeatour.style.display = "none";
            sports.style.display = "none";
        })

        document.getElementById("artsandculture-menu").addEventListener("click", function() {
            window.location.href="what-to-do.html";

            artsandcultureToggle.addEventListener("click", function() {
           
                artsandculture.style.display = "grid";
                artsandculture.scrollIntoView({ behavior: 'smooth', block: 'start'});
                
                attractions.style.display = "none";
                eat.style.display = "none";
                community.style.display = "none";
                shopping.style.display = "none";
                nightlife.style.display = "none";
                sports.style.display = "none";
                takeatour.style.display = "none"; 
                stay.style.display = "none"; 
        })
        });
        
        document.getElementById("attractions-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "artsandculture");      
        });
        document.getElementById("attraction").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "attraction");
        });
        document.getElementById("eat-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "eat");
        });
        document.getElementById("community-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "community");
        });
        document.getElementById("nightlife-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "nightlife");
        });
        document.getElementById("outdoors-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "outdoor");
        });
        document.getElementById("shopping-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "shopping");
        });
        document.getElementById("sports-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "sports");
        });
        document.getElementById("stay-menu").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "stay");
        });
        document.getElementById("take-a-tour").addEventListener("click", function() {
            localStorage.setItem('menuTogg', "takeatour");
        });
    } 
// -----------------  FOOTER --------------------
function appendFooter() {
    const footerContent = `
        
            <div class="footer-item fimg-container">
                <img class="footer-logo" src="./images/logo.png" alt="logo-business">
            </div>
            <div class="footer-item">
                
                <div class="footer-links">
                    <a href="ekhaltsha.html"><h3>E-KHALTSHA</h3></a>
                    <a href="about.html"><h3>ABOUT US</h3></a>
                    <a href="contact-us.html"><h3>CONTACT US</h3></a>
                    <a href="business-directory.html"><h3>LOCAL LISTINGS</h3></a>
                    <a href="submityourevent.html"><h3>SUBMIT YOUR EVENT</h3></a>                
                    <a href="events.html"><h3>EVENTS</h3></a>
                    <a href="what-to-do.html"><h3>THINGS TO DO</h3></a>    
                </div>
            
                <div class="footer-item">
                <h3>FOLLOW US:</h3>
                <div class="sm-links">
                    <a href="https://www.facebook.com/ekhaltsha"><i class="fa-brands fa-square-facebook fa-2xl"></i></a>
                    <a href="https://www.x.com/ekhaltsha_"><i class="fa-brands fa-square-x-twitter fa-2xl"></i></a>
                    <a href="https://www.instagram.com/ekhaltsha"><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
                    <a href="https://www.threads.net/@ekhaltsha"><i class="fa-brands fa-square-threads fa-2xl"></i></a>
                    <a href="https://tiktok.com/ekhaltsha"><i class="fa-brands fa-tiktok fa-2xl"></i></a>
                </div>
            </div>
            </div>
            
        
    `;

    const mainFooter = document.createElement("div");
    mainFooter.classList.add("footer-container");
    mainFooter.innerHTML = footerContent;

    document.querySelector(".footer").append(mainFooter);
}

// ---------- end of foooter ----------

// ---------- business information ----------

function appendBusiness() {
    // let businessJSON = localStorage.getItem('businessObject');
    let businessObject = JSON.parse(localStorage.getItem('businessObject'));

    let businessArticle = document.createElement("article");
    businessArticle.classList.add("business-container-v");
    businessArticle.setAttribute("id", businessObject.id);

    document.querySelector(".businfo-container").setAttribute("id", businessObject.id);
    let imageOne =document.getElementById('imgOne');
    let imageTwo =document.getElementById('imgTwo');
    let imageThree =document.getElementById('imgThree');
    let imageFour =document.getElementById('imgFour');
    let imageFive =document.getElementById('imgFive');
    let imageSix = document.getElementById('imgSix');

    imageOne.src = businessObject.image;
    
    imageTwo.src = businessObject.pictures.file1; 
    imageThree.src = businessObject.pictures.file3;
    imageFour.src = businessObject.pictures.file4;
    imageFive.src = businessObject.pictures.file5;
    imageSix.src = businessObject.pictures.file2;

    let businfoContainer = document.querySelector(".businfo-container");

    //businessArticle.innerHTML = 
    businfoContainer.innerHTML += `
      
    <div class="businfo-item" style="padding:2rem 0;">  
        <h1 class="business-name">${businessObject.title}</h1>
        <h4 style="wdith:100%; text-align:center;">${businessObject.categories.category1} - ${businessObject.categories.category2} - ${businessObject.categories.category3}</h5>

    </div>
    <div class="business-dets businfo-item">
      <div class="bdets-item">
        <h3>Description</h3>
        <span>${businessObject.description}</span>
    </div>
    <div class="bdets-item">
        <div class="dets-item">
            <h3 class="title no-margin"><span>Operating</span><span> Hours</span></h3>
            <div class="binfo-litem"><b>Monday:</b>     <span>${businessObject.operatingHours.monOpen} - ${businessObject.operatingHours.monClose}</span></div>
            <div class="binfo-litem"><b>Tuesday:</b>    <span>${businessObject.operatingHours.tuesOpen} - ${businessObject.operatingHours.tuesClose}</span></div>
            <div class="binfo-litem"><b>Wednesday:</b>  <span>${businessObject.operatingHours.wedOpen} - ${businessObject.operatingHours.wedClose}</span></div>
            <div class="binfo-litem"><b>Thursday:</b>   <span>${businessObject.operatingHours.thursOpen} - ${businessObject.operatingHours.thursClose}</span></div>
            <div class="binfo-litem"><b>Friday:</b>     <span>${businessObject.operatingHours.friOpen} - ${businessObject.operatingHours.friClose}</span></div>
            <div class="binfo-litem"><b>Saturday:</b>   <span>${businessObject.operatingHours.satOpen} - ${businessObject.operatingHours.satClose}</span></div>
            <div class="binfo-litem"><b>Sunday:</b>     <span>${businessObject.operatingHours.sunOpen} - ${businessObject.operatingHours.sunClose}</span></div>
        </div>
        <div class="dets-item">
            <h3 class="title"><span>Contact</span> <span>Details</span></h3>
            <div class="business-contact-info">
                <a href="mailto:${businessObject.email}"><i class="fa-solid fa-envelope"></i>${businessObject.email}"</a>
                <a href="phone:${businessObject.phone}"><i class="fa-solid fa-phone"></i> ${businessObject.phone}</a>
                <a href="phone:${businessObject.address}"><i class="fa-solid fa-location-dot"></i> ${businessObject.address}</a>
            </div>
            
            <h3 class="title"><span>Social</span><span> media</span></h3>
            <div class="sm-links">
                <a href="${businessObject.smLinks.fcbLink}"><i class="fa-brands fa-square-facebook fa-xl"></i></a>
                <a href="${businessObject.smLinks.twitterLink}"><i class="fa-brands fa-square-x-twitter fa-xl"></i></a>
                <a href="${businessObject.smLinks.instagramLink}"><i class="fa-brands fa-square-instagram fa-xl"></i></a>
                <a href="https://www.threads.net/@ekhaltsha"><i class="fa-brands fa-square-threads fa-xl"></i></a>
                <a href="${businessObject.smLinks.tiktokLink}"><i class="fa-brands fa-tiktok fa-xl"></i></a>
            </div>
        </div>
      </div>
    </div>`;

    let container = document.querySelector(".businfo-container")
    container.append(businessArticle);
};


function checkTheseOut() {
    let businessObject = JSON.parse(localStorage.getItem('businessObject'));
    let busObjectID = businessObject.id;

    let businesses = JSON.parse(localStorage.getItem('products'));

    let res = ' ';
    // let res = ' <button class="scroll-button scroll-button-left" onclick="scrollLeft()">&#10094</button>';
    
    let checkDOM = document.querySelector(".slide-cont")

    let count = 0;

    for (let index = 0; index < businesses.length; index++) {
        
        if (busObjectID === businesses[index].id) {
            console.log(count)
        }else{
            res += `<article class="product scrollable-content" onClick="navTo('${businesses[index].id}')" data-id=${businesses[index].id}>
                              <div class="img-container">
                                  <img src="${businesses[index].image}" alt="product" class="product-img">
                              </div>
                              <h3>${businesses[index].title}</h3>
                              <h5 style="width:100%; text-align:center;">${businesses[index].categories.category1} - ${businesses[index].categories.category2} - ${businesses[index].categories.category3}</h5>
                              
                          </article>`
                          count++;
        }
        if (count === 5) {
            index = businesses.length;
        }
        
        if (index+1 === businesses.length) {
            index = 0;
        }
    }
    // res+= '<button class="scroll-button scroll-button-right" onclick="scrollRight()">&#10095</button>';
    checkDOM.innerHTML += res;
}

// ---------- end of business information ----------

// ---------- event information ----------

function appendEvent() {
    // let businessJSON = localStorage.getItem('eventsObject');
    let eventsObject = JSON.parse(localStorage.getItem('eventsObject'));

    let businessArticle = document.createElement("article");
    businessArticle.classList.add("business-container-v");
    businessArticle.setAttribute("id", eventsObject.id);

    document.querySelector(".eventinfo-container").setAttribute("id", eventsObject.id);
    let imageOne =document.getElementById('imgOne');
    let imageTwo =document.getElementById('imgTwo');
    let imageThree =document.getElementById('imgThree');
    let imageFour =document.getElementById('imgFour');
    let imageFive =document.getElementById('imgFive');
    let imageSix = document.getElementById('imgSix');

    
    let businfoContainer = document.querySelector(".eventinfo-container");

    businfoContainer.innerHTML += `
    <div class="event-logo-container event-logo-top">    
        <img class="event-logo-img" src="${eventsObject.image}">  
    </div>
    <div class="businfo-item" style="padding:2rem 0;">  
        <h1 class="business-name">${eventsObject.title}</h1>
    </div>
    <div class="eventinfo-grid">
        <div>
            <div class="ei-dets"><h3><b>Type</b>       :</h3><h3> ${eventsObject.category}</h3></div>
            <div class="ei-dets"><h3><b>Date(s)</b>    :</h3><h3> ${eventsObject.occurence.startDate} - ${eventsObject.occurence.endDate} </h3></div>
            <div class="ei-dets"><h3><b>Start Time</b> :</h3><h3> ${eventsObject.occurence.startTime}</h3></div>
            <div class="ei-dets"><h3><b>End Time</b>   :</h3><h3> ${eventsObject.occurence.endTime}</h3></div> 
            <div class="ei-dets"><h3><b>Phone</b>      :</h3><h3> ${eventsObject.infoNumber}</h3></div>
            <div class="ei-dets"><h3><b>Email</b>      :</h3><h3> ${eventsObject.infoEmail}</h3></div>
            <div class="ei-dets"><h3><b>Location</b>   :</h3><h3> ${eventsObject.address}</h3></div>
            <div class="event-des-map small-dev-map"> ${eventsObject.mapLocation} 
                <h5 class="listoi" style="margin-bottom: 20px;">${eventsObject.description}</h5>
            </div>
            <div class="ew-container">
            <a class="event-website" href=${eventsObject.website}>VIEW WEBSITE &#10095 </a>
            <a class="event-website" href=${eventsObject.ticketWebsite}>BUY TICKETS &#10095 </a>
            </div>
        </div>
        <div class="event-logo-container event-logo-bottom">
            <img class="event-logo-img" src="${eventsObject.image}">
        </div>
    </div>
    <div class="">
      <div class="event-des-map big-dev-map">
        <span class="listoi">${eventsObject.description}</span>
        ${eventsObject.mapLocation}
      </div>
    </div>`;

    let container = document.querySelector(".businfo-container")
};


function checkTheseEventsOut() {
    let eventsObject = JSON.parse(localStorage.getItem('eventsObject'));
    let busObjectID = eventsObject.id;

    let businesses = JSON.parse(localStorage.getItem('events'));

    let res = ' ';
    let eventsToday = ' ';
    let eventsUpcoming = ' ';
    // let res = ' <button class="scroll-button scroll-button-left" onclick="scrollLeft()">&#10094</button>';
    
    let checkDOM = document.querySelector(".slide-cont")

    let todayDOM = document.getElementById('todayEvents')
    let upcomingDOM = document.getElementById('upcomingEvents')

    let count = 0;

    // Create a new Date Oblject, which will contain the current date and time
    var currentDate = new Date();

    // Extract the current date components
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; //Note Months are zero-based
    var currentDay = currentDate.getDate();
      
    // Day of week
    var currentDayOfWeek = currentDate.getDay();
    var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    var currentDayName = daysOfWeek[currentDayOfWeek];

    // Month
    var monthsOfYear = ["January", "Febraury", "March", "April", "May", "June","July","August","September","October","November","December"]
    var currentMonthName = monthsOfYear[currentMonth - 1];

    // Format the current date as a string (e.g. "YYY-MM-DD")
    var formattedDate = currentYear + "-" + (currentMonth < 10 ? "0" + currentMonth : currentMonth) + "-" + (currentDay < 10 ? "0" + currentDay : currentDay);
    console.log(formattedDate);

    for (let index = 0; index < businesses.length; index++) {
        
        if (busObjectID === businesses[index].id) {
            console.log(count)
        }else if(businesses[index].occurence.endDate >= formattedDate) {            
            res += `<article class="product scrollable-content" onClick="navTo('${businesses[index].id}')" data-id=${businesses[index].id}>
                              <div class="img-container">
                                  <img src="${businesses[index].image}" alt="product" class="product-img">
                              </div>
                              <h3>${businesses[index].title}</h3>
                              <h5 style="width:100%; text-align:center;">${businesses[index].occurence.startDate} - ${businesses[index].occurence.endDate} </h5>
                              
                          </article>`
                          count++;
        }
        if (count === 5) {
            index = businesses.length;
        }
        
        if (index+1 === businesses.length) {
            index = 0;
        }
    }
    // res+= '<button class="scroll-button scroll-button-right" onclick="scrollRight()">&#10095</button>';
    checkDOM.innerHTML += res;
    // todayDOM.innerHTML += eventsToday;
    // upcomingDOM.innerHTML += eventsUpcoming;
}

// ---------- end of event information ----------

function navTo(id){
    let businesses = JSON.parse(localStorage.getItem('products'));
    console.log('1')
    console.log(id)
    let businessObject = '';
    for(index=0; index<businesses.length; index++){
        if(id === businesses[index].id){
            businessObject = businesses[index];
            localStorage.setItem('business-id', id);
            localStorage.setItem('businessObject', JSON.stringify(businessObject));
            window.location.href = "business-info.html";

            index=businesses.length;
            console.log('mojo')
        }
    }
}


function displayProducts(products){
    let result = '';
    products.forEach(product => {
        result += `
            <article class="restaurant">
                <div class="img-container">
                    <img src="${product.image}" alt="product" class="product-img">
                    <button class="bag-btn" data-id=${product.id}>
                    <i class="fas fa-shopping-cart">add to cart</i>
                    </button>
                </div>
                <h3>${product.title}</h3>
                <span>${product.description}</span>
                <h4>R${product.price}</h4>
            </article>
        `
    });
    // let prodDOM = document.createElement('div')
    // prodDOM.innerHTML = result;
    // productsDOM.append(result);
    productsDOM.innerHTML = result;
};

function navigateToPage(pageURL) {
    window.open(pageURL);
}

function navigateTo(sectionID){
    window.location.href = '#' + sectionID;
}

//function to check if the business is open
function isMerchantOpen(openingTime,closingTime) {
    // get current time
    const currentTime = new Date();

    // Extract hours and minutes from tthe current time
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();

    //convert opening and closing times to minutes for easier comparison
    const openingTimeMinutes = convertToMinutes(openingTime);
    const closingTimeMinutes = convertToMinutes(closingTime);

    //convert current time to minutes
    const currentTimeMinutes = currentHours * 60 + currentMinutes;

    //check if the current time is within the opening and closing times
    return currentTimeMinutes >= openingTimeMinutes && currentTimeMinutes <= closingTimeMinutes;
}

//function to convert time to minutes
function convertToMinutes(time){
    const [hours, minutes] = time.split(':');
    return parseInt(hours) * 60 + parseInt(minutes);
}

//checks if merchant/restaurant is open
// const openingTime = "09:00";
// const closingTime = "18:00";
// let opIndi = document.getElementById(".operate-indi");
// if (isMerchantOpen(openingTime,closingTime)) {

// } else {
//     opIndi.classList.toggle(".isOpen");
// }

function datePicker() {
    // Get the input field
    var datePickerInput = document.getElementById("datepicker");

    // Function to display the date picker
    function showDatePicker() {
        var datePicker = document.createElement("div");
        datePicker.classList.add("datepicker-container");

        // Create a date object
        var currentDate = new Date();

        // Get current date details
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth() + 1; // January is 0
        var currentYear = currentDate.getFullYear();

        // Create date picker HTML
        var datePickerHTML =
            "<div class='datepicker-header'>" +
            "<span class='prev' onclick='prevMonth()'>&#10094;</span>" +
            "<span class='month'>" + currentMonth + "</span>" +
            "<span class='year'>" + currentYear + "</span>" +
            "<span class='next' onclick='nextMonth()'>&#10095;</span>" +
            "</div>" +
            "<table class='datepicker-table'>" +
            "<thead>" +
            "<tr>" +
            "<th>Sun</th>" +
            "<th>Mon</th>" +
            "<th>Tue</th>" +
            "<th>Wed</th>" +
            "<th>Thu</th>" +
            "<th>Fri</th>" +
            "<th>Sat</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";

        // Logic to fill in the dates
        // This can be extended to handle different months and years
        var daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        var firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();

        var date = 1;
        for (var i = 0; i < 6; i++) {
            datePickerHTML += "<tr>";
            for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                datePickerHTML += "<td></td>";
            } else if (date > daysInMonth) {
                break;
            } else {
                datePickerHTML += "<td>" + date + "</td>";
                date++;
            }
            }
            datePickerHTML += "</tr>";
        }

        datePickerHTML += "</tbody></table>";
        datePicker.innerHTML = datePickerHTML;
    }

}

function createCalendarDivElements(){
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
        dayDiv.textContent = formattedDate;
        
        // Append the div to the container
        daysContainer.appendChild(dayDiv);
    }
}

function addwhattodo(){
    let businesses = JSON.parse(localStorage.getItem('products'));
    console.log(businesses);
    console.log(businesses[0]);

    let categories = ["artsandculture", "community", "eat", "nightlife", "shopping", "sports","stay", "takeatour"];
    let categoriesRes = [' ',' ',' ',' ',' ',' ',' ',' '];
    let oldcategoriesRes = [' ',' ',' ',' ',' ',' ',' ',' '];
    

    oldcategoriesRes[0] = document.getElementById("artsandculture-container").innerHTML;
    oldcategoriesRes[1] = document.getElementById("attractions-container").innerHTML;
    console.log(document.getElementById("attractions-container").innerHTML);
    let artsandcultureCats = ["museum","arts and culture","theater","screenings","movie theater","poetry","live music"];
    let communityCats = ["social justice", "social justice", "community centre"];
    let nightlifeCats = ["bar", "club", "nightlife"];
    let eatCats = ["restaurant", "braai", "fast food", "bakery", "pizzaria", "food delivery"];
    let shoppingCats = ["mall", "market", "shopping"];
    let stayCats = ["b&b", "hotel"];
    let sportsCats = ["sports", "sports academy", "sports team", "gym"];
    let tourCats = ["tour", "tour guide", "travel agency"]
    
    businesses.forEach(product =>{
                            
            // for artsandculture
            artsandcultureCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[0] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

            // for community
            communityCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[2] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })
            
            // for eat
            eatCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[3] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

            // for nightlife
            nightlifeCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[4] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

            // for shopping
            shoppingCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[5] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

            // for sport
            sportsCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[6] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

            // for tour
            tourCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[7] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

            // for stay
            stayCats.forEach(cat =>{
                console.log(product.categories.category1, product.categories.category2, product.categories.category3, cat)
                if ((product.categories.category1 === cat) || (product.categories.category2 === cat) || (product.categories.category3 === cat)) {
                    categoriesRes[8] += `<article class="product" data-id=${product.id}>
                                        <div class="img-container">
                                            <img src="${product.image}" alt="product" class="product-img">
                                        </div>
                                        <h3>${product.title}</h3>
                                        <h5 style="wdith:100%; text-align:center;">${product.categories.category1} - ${product.categories.category2} - ${product.categories.category3}</h5>
                                    </article>`
                }    
            })

    })


    let res = categoriesRes[0];
    console.log(categoriesRes[0]);
    document.getElementById("artsandculture-container").innerHTML = res;
    document.getElementById("attractions-container").innerHTML = categoriesRes[1]; 
    document.getElementById("community-container").innerHTML = categoriesRes[2];
    console.log(categoriesRes[2]);
    document.getElementById("eat-container").innerHTML = categoriesRes[3];
    console.log(categoriesRes[3]);
    document.getElementById("nightlife-container").innerHTML = categoriesRes[4];
    document.getElementById("shopping-container").innerHTML = categoriesRes[5];
    document.getElementById("sports-container").innerHTML = categoriesRes[6];
    document.getElementById("tour-container").innerHTML = categoriesRes[7];
    document.getElementById("stay-container").innerHTML = categoriesRes[8];
// productsDOM.innerHTML = resDis;
}

document.addEventListener("DOMContentLoaded", () => {
    /// appendNav()
    appendFooter();
    
    if(document.title === "eKhaltsha: Business Information"){
        appendBusiness();
        checkTheseOut();
    }
    
    if(document.title === "eKhaltsha: Event Information"){
        appendEvent();
        checkTheseEventsOut();
    }

    if(document.title === "eKhaltsha: What To Do"){
        
        let menuTogg = localStorage.getItem('menuTogg');
        console.log(menuTogg);
        addwhattodo();
    }

    if(document.title === "eKhaltsha: Events"){
        //createCalendarDivElements();

        // Create a new Date Oblject, which will contain the current date and time
        var currentDate = new Date();

        // Extract the current date components
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth() + 1; //Note Months are zero-based
        var currentDay = currentDate.getDate();
          
        // Day of week
        var currentDayOfWeek = currentDate.getDay();
        var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
        var currentDayName = daysOfWeek[currentDayOfWeek];

        // Month
        var monthsOfYear = ["January", "Febraury", "March", "April", "May", "June","July","August","September","October","November","December"]
        var currentMonthName = monthsOfYear[currentMonth - 1];

        // Format the current date as a string (e.g. "YYY-MM-DD")
        var formattedDate = currentYear + "-" + (currentMonth < 10 ? "0" + currentMonth : currentMonth) + "-" + (currentDay < 10 ? "0" + currentDay : currentDay);
        localStorage.setItem('event-date', formattedDate);

        document.getElementById("highlighted-day").innerText = currentDayName+ " " +currentDay;
        document.getElementById("highlighted-month").innerText = currentMonthName;
        document.getElementById("highlighted-dayOfWeek").innerText = currentYear;

        

        // var dayElements = document.querySelectorAll(".day");
        // dayElements.forEach(dayElement => {
        //     console.log(dayElements);
        //     dayElement.style.display = "none";
        // })
        //document.getElementById(formattedDate).style.display = "grid";
        // console.log(document.getElementById(formattedDate));

        document.getElementById("datepicker").addEventListener("change", function(event) {
            // Retrieve the selected date value from the input
            var selectedDate = event.target.value;

            var dateObject = new Date(selectedDate);
          
            var newYear = dateObject.getFullYear();

            var newMonth = dateObject.getMonth() + 1; //Note Months are zero-based
            var newDay = dateObject.getDate();
            var newDayOfTheWeek = dateObject.getDay();


            currentDayName = daysOfWeek[newDayOfTheWeek];
            currentMonthName = monthsOfYear[newMonth - 1];
            
            document.getElementById("highlighted-day").innerText = currentDayName + " " +newDay;
            document.getElementById("highlighted-month").innerText = currentMonthName;
            document.getElementById("highlighted-dayOfWeek").innerText = newYear; 

            formattedDate = newYear + "-" + (newMonth < 10 ? "0" + newMonth : newMonth) + "-" + (newDay < 10 ? "0" + newDay : newDay);
            console.log(formattedDate);
            localStorage.setItem('event-date', formattedDate);

            var dayElements = document.querySelectorAll(".day");
            dayElements.forEach(function(dayElement) {
                dayElement.style.display = "none";
            })
            document.getElementById(formattedDate).style.display = "grid";
            console.log(document.getElementById(formattedDate));
        })

        var countDownTime = 1000;

        setTimeout(function() {
            // document.getElementById(formattedDate).style.display = "grid";


            // upcoming events
            let eventsObject = JSON.parse(localStorage.getItem('eventsObject'));
            // let busObjectID = eventsObject.id;
        
            let businesses = JSON.parse(localStorage.getItem('events'));
        
            let res = ' ';

            let todayEvents = " ";
            let upcomingEvents = " ";
            let todayDOM = document.getElementById("todayEvents");
            let upcomingDOM = document.getElementById("upcomingEvents");
            // let res = ' <button class="scroll-button scroll-button-left" onclick="scrollLeft()">&#10094</button>';
            
            let checkDOM = document.querySelector(".slide-cont")
        
            let count = 0;

            // get current date
                    // Create a new Date Oblject, whixh will contain the current date and time
                    var currentDate = new Date();

                    // Extract the current date components
                    var currentYear = currentDate.getFullYear();
                    var currentMonth = currentDate.getMonth() + 1; //Note Months are zero-based
                    var currentDay = currentDate.getDate();
                    
                    // Day of week
                    var currentDayOfWeek = currentDate.getDay();
                    var daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
                    var currentDayName = daysOfWeek[currentDayOfWeek];

                    // Month
                    var monthsOfYear = ["January", "Febraury", "March", "April", "May", "June","July","August","September","October","November","December"]
                    var currentMonthName = monthsOfYear[currentMonth - 1];

                    // Format the current date as a string (e.g. "YYY-MM-DD")
                    var formattedDate = currentYear + "-" + (currentMonth < 10 ? "0" + currentMonth : currentMonth) + "-" + (currentDay < 10 ? "0" + currentDay : currentDay);

            // let res = "";
            for (let index = 0; index < businesses.length; index++) {
                    
                    if (businesses[index].occurence.startDate > formattedDate ){
                        upcomingEvents += `<article class="product scrollable-content" onClick="navTo('${businesses[index].id}')" data-id=${businesses[index].id}>
                                <div class="img-container">
                                    <img src="${businesses[index].image}" alt="product" class="product-img">
                                </div>
                                <h3>${businesses[index].title}</h3>
                                <h5 style="wdith:100%; text-align:center;">${businesses[index].occurence.startDate} - ${businesses[index].occurence.endDate} </h5>
                                
                            </article>`
                    }
                    
                    // console.log(businesses[index].occurence.startDate = formattedDate)
                    if (businesses[index].occurence.startDate == formattedDate ){
                        todayEvents += `<article class="product scrollable-content" onClick="navTo('${businesses[index].id}')" data-id=${businesses[index].id}>
                                <div class="img-container">
                                <img src="${businesses[index].image}" alt="product" class="product-img">
                                </div>
                                <h3>${businesses[index].title}</h3>
                                <h5 style="wdith:100%; text-align:center;">${businesses[index].occurence.startDate} - ${businesses[index].occurence.endDate} </h5>
                        
                            </article>`
                    }

                    
            }
            
            checkDOM.innerHTML += res;
            todayDOM.innerHTML += todayEvents;
            upcomingDOM.innerHTML += upcomingEvents;
        }, countDownTime);
    }
    
    setupAPP();
});