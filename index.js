let articles = document.getElementById("allArticles")
let countsArticles = document.querySelectorAll(".section2 article").length
articles.innerText = `${articles.innerText} (${countsArticles} шт.)`