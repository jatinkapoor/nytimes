import axios from 'axios';

export default {

  getSavedArticles: () => {
    return axios.get("/api/articles");
  },

  getArticles: (myObj) => {
    return axios.get();
  },

  deleteArticle: (id) => {
    return axios.delete("/api/articles/" + id);
  },

  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  }
}