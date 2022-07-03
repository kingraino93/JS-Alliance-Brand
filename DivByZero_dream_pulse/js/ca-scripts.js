var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let header = document.getElementById("tm-header")
    header.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHeader = document.getElementById('introheader')
    introHeader.textContent = customerName;

};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    let el = document.querySelectorAll('.tm-white-rect');

    for (i = 0; i < el.length; ++i) {
        el[i].classList.add('tm-blue-rect');
        el[i].classList.remove('tm-white-rect');
    }
};

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    var socialLinks = document.querySelector(".tm-social-links")
    socialLinks.textContent = "Hidden";

};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

    let intropara1 = document.getElementById("intropara1");
    intropara1.textContent = "Alliances was founded in 1931 by Albert Daniels.";

    let intropara2 = document.getElementById("intropara2");
    intropara2.textContent = "The company is a leader in P.C. Manufacturing";

    let aboutpara1 = document.getElementById("aboutpara1");
    aboutpara1.textContent = "We deliver the best service this side of creation";

    let aboutpara2 = document.getElementById("aboutpara2");
    aboutpara2.textContent = "Our motto is satisfaction guaranteed";

    let addresspara = document.getElementById("addresspara");
    addresspara.textContent = "1-800-565-5656";

}; 



