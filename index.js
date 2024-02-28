let articles = document.getElementsByClassName("section2")
let formContact = document.getElementsByClassName("section3")
let goAllArticlesBtn = document.getElementById("goAllArticles")
let goContactsBtn = document.getElementById("goContacts")
goAllArticlesBtn.addEventListener("click", () => {
    articles[0].scrollIntoView({behavior: "smooth"})
})
goContactsBtn.addEventListener("click", () => {
    formContact[0].scrollIntoView({behavior: "smooth"})
})