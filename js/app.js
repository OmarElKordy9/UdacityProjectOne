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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//function that creates the Navigation elements and save ther name and anchor link to use them later when using the innerHTML property
function createNav(){
    for(section of sections){
        secName = section.getAttribute('data-nav');
        secAnchor = section.getAttribute('id');

        section = document.createElement('li');
        section.innerHTML = `<a class='menu__link' href='#${secAnchor}'> ${secName} </a>`;

        header.appendChild(section);
    }
}

// function getBoundingClientRect is a function that I searched for on the internet 
//function viewPort returns true if the element is visible in the viewPort
function viewPort(element){
    let rectangle = element.getBoundingClientRect();
    return (rectangle.top >= 0 && rectangle.left >= 0);
}

// sectionActiveState function is a function that toggles the class of "your-active-class" when it is in the viewPort or not
function sectionActiveState(){
    for (section of sections){
        if(viewPort(section)){
            //contains checks if the section contains class with the given name or not. I searched for this property in the internet.
            if(!section.classList.contains('your-active-class')){
                section.classList.add('your-active-class');
            }
        }else{
            section.classList.remove('your-active-class');
        }
    }
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

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
