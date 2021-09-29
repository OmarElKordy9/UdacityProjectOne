/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

//constant to get all the sections from the html file
const sections = document.querySelectorAll('section');
const header = document.getElementById('navbar__list');
const topButton = document.getElementById("toTopButton");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//function that creates the Navigation elements and save ther name, adds event listener to the items to navigate to the section wanted when clicked on them.
function createNav(){
    sections.forEach(section => {
        const secName = section.getAttribute('data-nav');
        const sectionItem = document.createElement('li');
        sectionItem.classList.add('menu__link');
        sectionItem.innerHTML = `${secName}`;
        sectionItem.style.display = 'inline-block';
        sectionItem.style.cursor = 'pointer';

        sectionItem.addEventListener('click', function scrollIntoSection(){
                section.scrollIntoView({behavior: "smooth", inline: "nearest"});
        });

        header.appendChild(sectionItem);

    });
}

// sectionActiveState function is a function that toggles the class of "your-active-class" when it is visible in the viewPort or not
function sectionActiveState(){
    for (let section of sections){
        const rectangle = section.getBoundingClientRect();
        if(rectangle.top >= 0 && rectangle.bottom-400 <= (window.innerHeight || document.documentElement.clientHeight)){
           toggleActiveState(section);
        }
        else{
            section.classList.remove('your-active-class');
            }
    }
}

//function that adds the class of "your-active-class" or removes it if it is already added
function toggleActiveState(section){
    if(!section.classList.contains('your-active-class')){
        section.classList.add('your-active-class');
    }
}

// function that shows the bottom only if we are on the bottom of the page
function showButton() {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

//function that brings us back on top of the page when we click on the button
function toTop() {
    document.body.scrollTop = 0;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNav();


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', sectionActiveState);        //add event listener to scrolling in the page that activiates the function sectionActiveState
document.addEventListener('scroll', showButton);                //add event listener to show botton only on the bottom of the page
topButton.addEventListener('click', toTop);                     // add event listener to call the function toTop when the button is clicked

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
