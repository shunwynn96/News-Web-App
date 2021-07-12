import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";


function Business(props) {

  const [businessData, setBusinessData] = useState([]);

  useEffect(() => {
    setBusinessData(props.data)
  }, [props.data])

  return(
    <div>
      <div className="container article-title">
        <h4>Business<span className="text-danger"> News</span></h4>
      </div>
      <section className="container article-content" >
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
      </section>
  </div>
  );
}

export default Business;