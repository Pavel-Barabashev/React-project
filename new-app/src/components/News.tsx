import React, { useContext, useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { ContextProvider } from "../reusable_components&helpers/contexts/Contexts";
import { Article } from "../types/types";
import { MainNavbar } from "../reusable_components&helpers/Navbars";

export const News: React.FC = () => {
  let [articles, setArticles] = useState(Array<Article>);
  let [isLoadingVisible, setIsLoadingVisible] = useState(false);
  function getNews() {
    setIsLoadingVisible(true);
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=b32d202089144b50a01b1cb059555be9";

    let request = new Request(url);
    return fetch(request)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
  useEffect(() => {
    getNews().then((response) => {
      setArticles(response.articles);
      setIsLoadingVisible(false);
      console.log(response);
    });
  }, []);
  let { setIsSuccessSnackbarVisible, setIsErrorSnackbarVisible } =
    useContext(ContextProvider);
  return (
    <div id="news-block">
      {isLoadingVisible ? (
        <CircularProgress className="screen-center" />
      ) : (
        <>
          <MainNavbar />
          {articles.map((article) => {
            return (
              <article key={article.url} className="article-elem">
                <h3>{article.title}</h3>
                <section>
                  <p
                    style={
                      !article.author
                        ? { color: "red" }
                        : { color: "lightgray" }
                    }
                  >
                    Author :
                    {article.author ? article.author : " not specified "}
                  </p>
                  <p>
                    Published at : {new Date(article.publishedAt).toString()}
                  </p>
                </section>
                {article.urlToImage ? (
                  <img src={article.urlToImage} alt="image not found" />
                ) : (
                  <></>
                )}
                <p>{article.content}</p>
                <a href={article.url}>
                  <Button style={{ color: "lightgray" }}>To original</Button>
                </a>
              </article>
            );
          })}
        </>
      )}
    </div>
  );
};
