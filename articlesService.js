// import userArticles from "./articles.json" assert { type: "json" };



let data = await fetch(`http://127.0.0.1:5500/articles.json`).then((res) =>
  res.json()
);

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
