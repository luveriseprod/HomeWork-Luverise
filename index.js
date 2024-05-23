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
