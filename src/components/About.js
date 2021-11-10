import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "BEST TEAM OF PROFESSIONALS FOR WEDDING PHOTOGRAPHY IN JORVE,SANGAMNER",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Sumit Jorvekar" },
    { id: 2, title: "Email:", text: "ashitdighe@gmail.om" },
    { id: 3, title: "Phone:", text: "9764664230" },
    { id: 4, title: "Address", text: "A/P Jore,Tal-sangamner,Dist-Ahamadnager" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/sumit.jpeg" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hello</h1>
              <div className="about__info-p1">
             At 24pixel,we are a team of professional photographers who are steadfastly
             committed to providing high-quality phtographs from your wedding day so that you 
             can cherish them forever.we are renowned as the best wedding photographers in 
             jorve and make it a point to deliver the most beutiful photos from thr big day.we
             understand the fact that this occasion will only come butonce in your life,and the
             photos from the day are something that you will be able to see forever.
              </div>
              <div className="about__info-p2">
                There are basically two types of wedding photographs; candid and posed.the latter
                always comes out looking and unreal,while candid photography aims to capture the real
                expressions of emotions as they happen.while posed phtographs used to be the norm in bangali 
                photography until a few year ago,this has changed for the better and candid wedding photography
                in jorve,sangamner has really come of age in the recent years.  
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((About) => (
                    <div className="col-6"  key={About.id}>
                      <strong>{About.title}</strong>
                      <p>{About.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
