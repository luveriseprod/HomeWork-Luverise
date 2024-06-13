import data from "./articles.json"

export async function getArticlesId(id) {
  const getArtId = data.articles.find((art) => {
    return art.id === Number(id);
  });
  return getArtId;
}

export function getArticles() {
  let articles = data.articles;
  return articles;
}
