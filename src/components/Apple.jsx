import React, { useEffect, useState } from "react";
import Article from "./Article.jsx";


function Apple(props) {

  const [appleData, setAppleData] = useState([]);

  useEffect(() => {
    setAppleData(props.data);
  },[props.data])

  return(
    <div>
      <div className="container vadnews">
        <h4>Apple<span className="text-danger"> News</span></h4>
      </div>
      <section className="container vidnews" >
        {appleData.map((article, index) => {
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

export default Apple;