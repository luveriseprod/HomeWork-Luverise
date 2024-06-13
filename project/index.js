import './style.css'
import image from './assets/image.jpg'
import image2 from './assets/image2.png'
let img1 = document.getElementById("imagebor")
let img2 = document.getElementById("image2")
img1.src = image
img2.src = image2





import addArticlesHTML from "./addArticlesHTML.js"
addArticlesHTML();



let allArticlesBtn = document.getElementById("allArticles");
let contactsBtn = document.getElementById("contacts");
let articles = document.getElementById("section2");
let formContacts = document.getElementById("formContacts");

function addScrollToElement(btn, el) {
  btn.addEventListener("click", () => {
    el.scrollIntoView({ behavior: "smooth" });
  });
}

addScrollToElement(allArticlesBtn, articles);
addScrollToElement(contactsBtn, formContacts);