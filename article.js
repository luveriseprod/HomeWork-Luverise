import { getArticlesId } from "./articlesService.js";

const articleDiv = document.getElementById("articlesList");
const params = new URLSearchParams(location.search);
const articleId = params.get("articleId");



async function addArticlesHTML() {
  if (await getArticlesId(articleId)) {
    let { name, text } = await getArticlesId(articleId);
    let articleName = document.createElement("h3");
    articleName.innerText = name;
    let articleText = document.createElement("p");
    articleText.innerText = text;
    let articleLink = document.createElement("a");
    articleLink.href = `./article.html?articleId=${articleId}`;
    articleLink.innerHTML = `Ссылка на данную страницу: ${articleLink.href}`;
    articleDiv.append(articleName, articleText, articleLink);
  }
}

addArticlesHTML();






















// function addArticlesHTML() {
//     if (getArticlesId(articleId)) {
//       let { name, text } = getArticlesId(articleId);
//       let articleName = document.createElement("h3");
//       articleName.innerText = name;
//       let articleText = document.createElement("p");
//       articleText.innerText = text;
//       let articleLink = document.createElement("a");
//       articleLink.href = `./article.html?articleId=${articleId}`;
//       articleLink.innerHTML = `Ссылка на данную страницу: ${articleLink.href}`;
//       articleDiv.append(articleName, articleText, articleLink);
//     }
//   }

//   addArticlesHTML();
