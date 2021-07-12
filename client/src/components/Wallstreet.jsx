import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";

function Wallstreet(props) {

  const [wallStreetData, setWallStreetData] = useState([]);

  useEffect(() => {
    setWallStreetData(props.data)
  }, [props.data]);
  
  return(
    <div>
      <div className="container article-title">
        <h4>Wall Street<span className="text-danger"> News</span></h4>
      </div>
      <section className="container article-content" >
      {wallStreetData.map((article, index) => {
        return (
          <Article 
            key={index}
            img={article.urlToImage}
            date={article.publishedAt}
            title={article.title}
            description={article.description}
            fullArticleLink={article.url}
          />
        )
      })}
      </section>
  </div>
  );

}

export default Wallstreet;