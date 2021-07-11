import React from "react";

function Article(props) {

    return (
        <div>
          <div className="summary-box row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 d-block m-auto">
              <div className="card-body">
                <a href={props.img} target = "_blank" rel="noreferrer">
                    <img src={props.img} className="img-fluid testimg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12 d-block m-auto">
              <div className="card" style={{padding: "20px"}}>
                <p>{props.date}</p> 
                <h3 className="text-danger">{props.title}</h3>
                <p className="card-text">{props.description}</p>
                <a href={props.fullArticleLink} className="btn btn-danger card-text" rel="noreferrer" target="_blank">Click for full article</a>
              </div>
            </div>
          </div>
        </div>
    )

}

export default Article;