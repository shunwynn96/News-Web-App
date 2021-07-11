import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";


function Business(props) {

  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    setBusinessData(props.data)
  })

  return(
    <div>
      <div className="container vadnews">
        <h4>Business<span className="text-danger"> News</span></h4>
      </div>

      {businessData.map((article, index) => {
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

export default Business;