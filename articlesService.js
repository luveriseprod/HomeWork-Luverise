import userArticles from "./articles.json" assert { type: "json" };

export function getArticlesId(id) {
  const getArtId = userArticles.articles.find(art => {
    return art.id === Number(id)
  })
  return getArtId
}

export function getArticles() {
  let articles = userArticles.articles;
  return articles;
}
