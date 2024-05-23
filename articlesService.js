import userArticles from "./articles.json" assert { type: "json" };

export default function getArticles() {
  let articles = userArticles.articles;
  return articles;
}
