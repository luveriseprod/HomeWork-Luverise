import userArticles from "./articles.json" assert { type: "json" };

function getArticlesId(id) {
  const getArticlesId = userArticles.articles.find(art => {
  return art.id === Number(id)
  })
}
console.log(getArticlesId(1));

export default function getArticles() {
  let articles = userArticles.articles;
  return articles;
}

// const currentUser = userData.users.find(user => {
//   return user.id === Number(userId)
// })

// console.log(currentUser);
