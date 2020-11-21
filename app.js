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
//Defined the global Variables for sections and navbar
//Created a fragment to assign values to it after the ForEach Loop to make the performance Better
const sections = document.querySelectorAll("section");
const navbar = document.getElementById('navbar__list');
const frag = document.createDocumentFragment();


// build the nav
 //Looping over all the sections and getting the attributes for each section
 //Also Creating list item and an anchor tag.
sections.forEach( (section) => {
 let data = section.getAttribute("data-nav");
 let section_list = document.createElement("li");
 let section_anchor = document.createElement("a");
 //Created a text node that contains data context of the data-nav
 let text_node = document.createTextNode(data);
 //EventListener that listens for section_list that listens for a click then scrolls to the section view
 section_list.addEventListener("click", function(){
  section.scrollIntoView({'behavior':'smooth'})
});	
//Assigned the a tag to menu__link class 
 section_anchor.setAttribute("class","menu__link");
//Added the text node to the section_anchor
 section_anchor.appendChild(text_node);
//Added section anchor to the list
 section_list.appendChild(section_anchor);
//Then the section list to the fragment
 frag.appendChild(section_list);
 
});
//After Each loop ends the fragment will be added to the Navbar until its completed
	navbar.appendChild(frag);
 
// Add class 'active' to section when near top of viewport
//Created Event Listener that listens for scroll
window.addEventListener('scroll' , function(){
//Looping over each sections to determine if its inside the view port or not
 sections.forEach( (section) => {
//First Remove any Active sections
   section.classList.remove('your-active-class')
//Using getBoundingClientRect() to get the x , y values to use later
  let bound = section.getBoundingClientRect();
//If condition that checks if the top and bottom are inside the viewport if the top is < 0 then its outisde and won't work
  if (bound.top >= 0 && bound.bottom <window.innerHeight){
//If the condition is ture add to the section a class that will give it properties from The CSS.
	 section.classList.add('your-active-class'); 
//Adding Active link funtion and passing the section argument to the funtion
	 AC_link(section);
}
})
   
});

//Active link funtion that receives an argument from the if condition 
function AC_link(section){
//Selected all of the Anchor links and Assigning it to a variable
 let anchor_links = document.querySelectorAll('a');
//Getting the Data Nav attribute name and Assigning it into a variable
 let sec_nav = section.getAttribute('data-nav');
//Looping over the Anchor links first it removes the Active class from any anchor link
	anchor_links.forEach( (anchor_link) => {
	anchor_link.classList.remove('your-active-linkClass')
//If statement Checks using If condition if the anchor link name equals data nav then its true adds active class to it.
	if (anchor_link.textContent == sec_nav){
	 anchor_link.classList.add('your-active-linkClass')
	}
	
});
}



