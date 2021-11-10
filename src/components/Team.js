import React from 'react'

            const Team = () => {
            const [header] = React.useState({
                mainHeader: "Team",
                subHeading: "My Team",
                text:
                  "Let have an introduction to our team",
              });
              const [state] = React.useState([
                {
                  id: 1,
                  Img: <img src="/images/sumit6.jpg" alt="man" /> 
                },
                {
                  id: 2,
                  Img: <img src="/images/sumit6.jpg" alt="man" /> 
                },
                {
                  id: 3,
                  Img: <img src="/images/sumit6.jpg" alt="man" /> 
                },
              ]);
    return (
        <div className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((Team) => (
            <div className="col-4" key={Team.id}>
                <div className="row justifyConter">
              <div className="price">
                <div className="price__rs">
                  <div className="about__img2">
                  {Team.Img}
                  </div>
                </div>
                <div className="price__btn">
                  <h3 className="btn btn-outline" >
                    Purchase
                    </h3>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team
