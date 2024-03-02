let allArticlesBtn = document.getElementById("allArticles");
let contactsBtn = document.getElementById("contacts");
let articles = document.getElementById("section2");
let formContacts = document.getElementById("formContacts");

allArticlesBtn.addEventListener("click", () => {
    articles.scrollIntoView({behavior: "smooth"})
})
contactsBtn.addEventListener("click", () => {
    formContacts.scrollIntoView({behavior: "smooth"})
})