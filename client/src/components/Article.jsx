import React from "react";

function Article(props) {

    const publishDate = props.date;
    const formattedDate = publishDate.replace("T", " ").slice(0, 19);
    console.log(props.img);
    return (
        <div>
          <div className="summary-box row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 d-block m-auto">
              <div className="card-body">
                <a href={props.img} target = "_blank" rel="noreferrer">
                    {props.img === null?
                      <img src="/images/No-Image-Found.png" className="img-fluid article-img" alt="" /> 
                      :
                      <img src={props.img} className="img-fluid article-img" alt="" />}
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12 d-block m-auto">
              <div className="card article-card">
                <div className="card-body">
                <p>{formattedDate}</p> 
                <h3 className=""><a className="title-link text-danger" rel="noreferrer" target="_blank" href={props.fullArticleLink}>{props.title}</a></h3>
                <p className="card-text">{props.description}</p>
                <a href={props.fullArticleLink} className="btn btn-outline-danger card-text" rel="noreferrer" target="_blank">Click for full article</a>
                </div>
                {/* <p>{props.date}</p> 
                <h3 className="text-danger">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <a href={props.fullArticleLink} className="btn btn-danger card-text" rel="noreferrer" target="_blank">Click for full article</a> */}
              </div>
            </div>
          </div>
        </div>
    )

}

export default Article;