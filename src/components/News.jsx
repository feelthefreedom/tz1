import React from "react";

const News = (news) => {
  return (
    <div className="news-page">
      {news.isLoading ? (
        <p>Loading...</p>
      ) : (
        news.news.map((item, index) => (
          <div className="feed_section" key={index}>
            <img src={item.urlToImage} alt="news_Image" />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default News;
