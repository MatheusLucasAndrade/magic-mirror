import React, { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";

const apiUrl = import.meta.env.VITE_REACT_APP_NEWS;

const MIN = 1000 * 60 * 30;

interface IDataNews {
  articles: {
    [key: number]: {
      author: string;
      title: string;
    };
  };
}

const News = () => {
  const [news, setNews] = useState<IDataNews>();

  const { data, loading } = useFetch<IDataNews>(apiUrl, undefined, MIN);

  useEffect(() => {
    if (data) {
      setNews(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {news &&
        Object.keys(news.articles)
          .slice(0, 3)
          .map((key) => {
            const numericKey = parseInt(key, 3);
            const message = news.articles[numericKey];

            return (
              <div key={key}>
                <ul>
                  <li className="box mb">
                    <p className="font-size-3 bold">
                      <span>{message.title}</span>
                    </p>
                  </li>
                </ul>
              </div>
            );
          })}
    </div>
  );
};

export default News;
