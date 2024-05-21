const userArticles = [
  {
    name: "Javascript",
    text: "JavaScript often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.",
    link: "javascript.html",
  },
  {
    name: "MongoDB",
    text: "MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.",
    link: "mongodb.html",
  },
  {
    name: "React",
    text: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    link: "react.html"
  }
];

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
