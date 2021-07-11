import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";

function Wallstreet(props) {

  const [wallStreetData, setWallStreetData] = useState([]);

  useEffect(() => {
    setWallStreetData(props.data)
  }, []);
  
  return(
    <div>
      <div className="container vadnews">
        <h4>Wall Street<span className="text-danger"> News</span></h4>
      </div>

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
  </div>
  );

}

export default Wallstreet;