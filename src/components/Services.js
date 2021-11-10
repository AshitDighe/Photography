import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "CANDID WEDDING PHOTOGRAPER TO CAPTURE ALL WEDDING SCENES",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "PRE-WEDDING PHOTOSHOOT",
      text:
        "It is always a good idea to test something out before the main occasion.and so is the case with photographers.In case you have any kind of trepidation about the quality of our services.you are welcome to try us out by letting us do a prewedding photography session with you.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "POST WEDDING PHOTOSHOOT",
      text:
        "We are been appreciated countlees times for the kind of comprehensive services that we provide as part of our prewedding photo sessions",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "COUPLS PHOTOSHOOT",
      text:
        "Our undeniable expertise lies in capturing candid moments from your wedding.and we are lauded across the country for the quality of our work.if you think that you will have to break your bank to book photography services of such high quality.you are mistaken.",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "ANNIVERSARY PHOTOSHOOT",
      text:
        "Our services are extremely affordable but you can be sure about the fact that there will be no compromise on the high standards that we have set for ourselves. candid wedding photographers in sangamner has become more preferable than post photography because of the rigidness associated with the letter. ",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "BIRTHDAY PHOTOSHOOT",
      text:
        "Our services are extremely affordable but you can be sure about the fact that there will be no compromise on the high standards that we have set for ourselves.candid wedding photographers in sangamner has become more preferable than post photography because of the rigidness associated with the letter. ",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "CANDID WEDDING PHOTOGRAPHY",
      text:
        "Who wouldn't want their wedding to be presented in a video akin to a moive!This is another service that we provide as part of our photography and videography package ",
    },
  ]);
  return (
    
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <div className="row bgMain">
            {state.map((Services) => (
              <div className="col-4 bgMain" key={Services.id}>
                <div className="services__box">
                  {Services.icon}
                  <div className="services__box-header">{Services.heading}</div>
                  <div className="services__box-p">{Services.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
