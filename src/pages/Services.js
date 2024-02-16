import React, { useState } from "react";
import shortArrow from "../images/short-arrow.png"
import longArrow from "../images/long-arrow.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { navItems } from "../components/Navbar"; 

  const serviceContents = {
    title: "5 Page Landing Website",
    description:
      "5 Page custom website, very limited animations and static features. Limited updates",
    price: "$510",
    delivery: "30 Days Delivery",
    revision: "3 Revisions",
  };


  const serviceContents2 = {
    title: "5 Page Animated Landing Website",
    description:
      "Animations Added Onto Your Website. 5 page Limit, Customizable! Limited Updates",
    price: "$710",
    delivery: "45 Days Delivery",
    revision: "5 Revisions",
  };

  const serviceContents3 = {
    title: "Ultimate Custom Landing Page",
    description:
      "No Page Limit, ultimately customizable. Custom added features, and fully animated! Unlimited Updates",
    price: "$1,220",
    delivery: "60 Days Delivery",
    revision: "Unlimited Revisions",
  };

export const listContents = 
  {
    s1: "Functional website",
    s2: "5 pages",
    s3: "Hosting setup",
    s4: "5 Commercially licensed images",
    s5: "Social media icons",
  }

  
export const listContents2 = {
  s1: "Functional website",
  s2: "5 pages",
  s3: "Hosting setup",
  s4: "5 Commercially licensed images",
  s5: "Social media icons",
  s6: "Content Upload",
};


export const listContents3 = {
  s1: "Functional website",
  s2: "10 pages",
  s3: "Hosting setup",
  s4: "10 Commercially licensed images",
  s5: "Social media icons",
  s6: "Speed Optimization",
  s7: "Content Upload",
};


export default function Services() {

  const [isBasic, setBasic] = useState(true);
  const [isStandard, setStandard] = useState(false);
  const [isPremium, setPremium] = useState(false);


  const toggleBasic = () => {
    setBasic(true);
    setPremium(false);
    setStandard(false);
  };

  const toggleStandard = () => {
    setStandard(true);
    setBasic(false);
    setPremium(false);
  };

  const togglePremium = () => {
    setPremium(true);
    setBasic(false);
    setStandard(false);
  };

  return (
    <>
      <header className="myHeader" id="header">
        <Navbar {...navItems} />
      </header>

      <main className="container mainContainer-s">
        <div>
          <h1 className="subHeader-ff landing-hdr">Landing Pages</h1>
        </div>
        <div className="navButtons">
          <button
            typeof="button"
            className={isBasic ? "selectedButton" : null}
            id="basicButton"
            onClick={toggleBasic}
          >
            Basic
          </button>
          <button
            typeof="button"
            className={isStandard ? "selectedButton" : null}
            id="standardButton"
            onClick={toggleStandard}
          >
            Standard
          </button>
          <button
            typeof="button"
            className={isPremium ? "selectedButton" : null}
            id="premiumButton"
            onClick={togglePremium}
          >
            Premium
          </button>
        </div>
        {isBasic ? <ServiceBox {...serviceContents} basic = {isBasic}/> : null}
        {isStandard ? <ServiceBox {...serviceContents2} standard={isStandard} /> : null}
        {isPremium ? <ServiceBox {...serviceContents3} premium={isPremium} /> : null}

        <div className="serviceFooterSpacer">
          
        </div>
      </main>

      <footer>
        <Footer {...navItems} />
      </footer>
    </>
  );
}

const ServiceList = (props) => {
  const { s1, s2, s3, s4, s5,} = props;
  return (
    <ul className="orderList">
      <li>{s1}</li>
      <li>{s2}</li>
      <li>{s3}</li>
      <li>{s4}</li>
      <li>{s5}</li>
    </ul>
  );
};


const ServiceList2 = (props) => {
  const { s1, s2, s3, s4, s5, s6 } = props;
  return (
    <ul className="orderList">
      <li>{s1}</li>
      <li>{s2}</li>
      <li>{s3}</li>
      <li>{s4}</li>
      <li>{s5}</li>
      <li>{s6}</li>
    </ul>
  );
};

const ServiceList3 = (props) => {
  const { s1, s2, s3, s4, s5, s6, s7, } = props;
  return (
    <ul className="orderList">
      <li>{s1}</li>
      <li>{s2}</li>
      <li>{s3}</li>
      <li>{s4}</li>
      <li>{s5}</li>
      <li>{s6}</li>
      <li>{s7}</li>
    </ul>
  );
};

const ServiceBox = ({title, description, price, delivery, revision, basic, standard, premium}) => {

if(basic === undefined){
  basic = false
}

if(standard === undefined){
  standard = false;
}

if (premium === undefined) {
  premium = false;
}



  return (
    <>
      <div>
        <div className="container serviceBox">
          <div className="container serviceGrid">
            <div>
              <h1 className="titleHeader">
                {title}
                <img
                  src={shortArrow}
                  alt="title short arrow"
                  id="short-arrow-title"
                />
              </h1>
              <p className="description">{description}</p>
              {basic ? <ServiceList {...listContents} /> : null}
              {standard ? <ServiceList2 {...listContents2} /> : null}
              {premium ? <ServiceList3 {...listContents3} /> : null}
            </div>
            <div className="arrowLongWrap">
              <img src={longArrow} alt="long arrow" id="long-arrow-service" />
            </div>
            <div className="priceSection">
              <h1 className="price">{price}</h1>
              <p>{delivery}</p>
              <p>{revision}</p>
              <a href="/Contact">
                <button className="contactButton">Contact Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

