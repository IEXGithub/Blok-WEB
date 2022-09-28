// JavaScript Document
console.log("hi");
var bodyElement = document.querySelector("body");

/******************************/
/* menu openen de MENU button */
/******************************/

var openButton = document.querySelector("nav section > button");

openButton.addEventListener("click", openMenu);

function openMenu() {
    bodyElement.classList.add("toonMenu");
  }



/************************************/
/* menu sluiten met de sluit button */
/************************************/

var sluitButton = document.querySelector("nav section ul button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    bodyElement.classList.remove("toonMenu");
}

