import React from "react";


function About() {

    return (
        <section className="container about">
            <h2 className="text-dark font-weight-normal text-center">ABOUT</h2>

            <div className="about-content">
                <h3>ABOUT <span className="text-danger"> THE NEWS</span></h3>
                <p>
                    The News is a news web application where it shows the summary<br/>
                    of news articles, pictures and links to the full article.
                </p>
            </div>

            
            
            
            <div className="about-content">
                <h3>ABOUT <span className="text-danger"> ME</span></h3>
                <p>
                    I'm Shun Wynn Kok, a Computer Science graduate from Cleveland State University.
                </p>
                <div className="contact-me">
                    <i className="icon fab fa-linkedin contact-me-link"> <a className="fw-bold link-danger" href="https://www.linkedin.com/in/shunwynnkok/"
                    target="_blank" rel="noopener noreferrer">Linkedin</a></i>
                    <i className="far fa-envelope contact-me-link"> <a className="fw-bold link-danger" href="mailto: shunwynn96@gmail.com" 
                    target="_blank" rel="noopener noreferrer">Email</a></i>
                    <i className="fab fa-github contact-me-link" > <a className="fw-bold link-danger" href="https://github.com/shunwynn96"
                    target="_blank" rel="noopener noreferrer">Github</a></i>
                </div>
                
               
            </div>
        </section>    
    );
}

export default About;