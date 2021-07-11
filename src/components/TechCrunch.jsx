import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";


function TechCrunch(props) {

  const [techCrunchData, setTechCrunchData] = useState([]);
  
  useEffect(() => {
    setTechCrunchData(props.data);
  }, []);

  return(
    <div>
      <div className="container vadnews">
        <h4>TechCrunch<span className="text-danger"> News</span></h4>
      </div>

      {techCrunchData.map((article, index) => {
        return (
          <Article 
            key={index}
            img={article.urlToImage}
            date={article.publishedAt}
            title={article.title}
            description={article.description}
            fullArticleLink={article.url}
          />
        );
      })}
  </div>
  );
}

export default TechCrunch;