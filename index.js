const userArticles = [
  {
      name: "Javascript",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus minima fugit voluptatem odio maxime adipisci!.",
      link: "javascript.html",
  },
  {
      name: "Technology",
      text: "Corrupti enim ipsa, praesentium, autem natus illo voluptat.",
      link: "technology.html",
  },
];

let body = document.body.children[4]
let newSection = document.createElement("section")
newSection.className = "section2"
body.after(newSection)

let articles = userArticles.map(info => {
  let {name, text, link} = info;
  let newArticles = document.createElement("div");
  newArticles.innerHTML = `${name} ${text} ${link}`
  newSection.appendChild(newArticles)
  return newArticles;
})
console.log(articles);
