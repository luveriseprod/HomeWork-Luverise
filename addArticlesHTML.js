import getArticles from "./articlesService.js";


export default function addArticlesHTML(){
    let arr = getArticles();
    let addArticles = arr.map((info) => {
      let { name, text, link } = info;
      let br = document.createElement("br");
      let hr = document.createElement("hr");
      let artSection = document.getElementById("articles");
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
};
