import React from "react";
import pfpCoutout from "../images/cutout-pfp.png";
import Navbar, { navItems } from "../components/Navbar";
import Paragraph from "../components/Paragraph";
import shortArrow from "../images/short-arrow.png";
import longArrow from "../images/long-arrow.png";
import Footer from "../components/Footer";

export const paraContent = [
  {
    heading: "YOUR VISION. OUR REALITY.",
    content:
      "Innovators in creating landing pages, With eye catching designs guaranteed to boost your business.",
    id: 1,
  },
  {
    heading: "YOUR VISION. OUR REALITY",
    content:
      "In 2023 Tlax was generated as an idea to facilitate modern landing pages. December 2023 was when Tlax began to rise from the ground up. Slowly setting its presence in the digital market..",
    id: 2,
  },
  {
    heading: "OUR MISSION",
    content:
      "Our mission at Tlax is to create simple and eye-catching websites to meet personal needs and goals. From portfolio websites boosting your hiring probabilities to business websites advertising your services. Our goal in the end is to leave you with satisfaction and joy. Our moral code here at Tlax.",
    id: 3,
  },
  {
    heading: "ANGEL INFANTE",
    content:
      "Meet the face behind Tlax Web Design! Angel Infante is an aspiring programmer who is creative and enthusiastic about collaboration. Angel loves helping others in any way he can. He aspires to make everyone's day a bit better, and with his set of skills, creating websites to fulfill that joy was his calling.",
    id: 4,
  },
];

export default function About() {
    const searchId = 2;
    const elem = paraContent.find(({ id }) => id === searchId);

    const secondId = 3;
    const elem2 = paraContent.find(({ id }) => id === secondId);

    
    const thirdId = 4;
    const elem3 = paraContent.find(({ id }) => id === thirdId);

  return (
    <>
      <header className="myHeader" id="header">
        <Navbar {...navItems} />
      </header>

      <main className="container">
        <div className="paragraphs ">
          <div className="para-about">
            {elem && <Paragraph {...elem} />}
            {elem2 && <Paragraph {...elem2} />}
          </div>
        </div>
        <div className="arrowWrapper">
          <i class="fa-solid fa-arrow-down" id="downArrow"></i>
        </div>
        <div className="profileGrid ">
          <div className="imagen">
            <div className="backgroundP">
              <img src={shortArrow} alt="ShortArrow" id="shortArrowPfp" />
              <img src={longArrow} alt="LongArrow" id="longArrowPfp" />
            </div>
            <img src={pfpCoutout} alt="Angel PFP" id="pfp" />
          </div>

          <div className="profileDescription para-about">
            {elem3 && <Paragraph {...elem3} />}
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

