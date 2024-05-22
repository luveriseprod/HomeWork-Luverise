import { userArticles } from "./articles.js";
let artSection = document.getElementById("articles");

let addArticles = userArticles.map((info) => {
  let br = document.createElement("br");
  let hr = document.createElement("hr");

  let { name, text, link } = info;
  let newArticle = document.createElement("article");
  let artName = document.createElement("h3");
  artName.innerHTML = name;
  let artText = document.createElement("p");
  artText.innerHTML = text;
  let artLink = document.createElement("a");
  artLink.href = `./articles/${link}`;
  artLink.innerHTML = "Читать далее";
  artSection.append(newArticle);
  newArticle.append(artName, artText, artLink, hr, br);
});


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


