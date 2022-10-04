// JavaScript Document
console.log("hi");
var bodyElement = document.querySelector("body");

/******************************/
/* menu openen de MENU button */
/******************************/

var openButton = document.querySelector("nav div > button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    bodyElement.classList.add("toonMenu");
  }



/************************************/
/* menu sluiten met de sluit button */
/************************************/

var sluitButton = document.querySelector("nav div ul button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    bodyElement.classList.remove("toonMenu");
}




/*********************/
/* Light mode button */
/*********************/


var lightModeButton = document.querySelector("footer button");

lightModeButton.addEventListener("click", lightMode);

function lightMode() {
    bodyElement.classList.toggle("light_mode");
}
