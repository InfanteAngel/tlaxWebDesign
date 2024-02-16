import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import shortArrow from "../images/short-arrow.png";
import longArrow from "../images/long-arrow.png";
import { navItems } from "../components/Navbar";

export const contactContent = [
  {
    icon: <i className="fa-brands fa-instagram"></i>,
    text: "@tlaxtech",
    id: 1,
    link: "https://www.instagram.com/tlaxtech/?igsh=M3pvbXBka3Z0OG4y",
  },
  {
    icon: <i className="fa-brands fa-facebook"></i>,
    text: "take me there!",
    id: 2,
    link: "https://www.facebook.com/people/Tlax-Web-Design/61554949182401/?mibextid=WC7FNe",
  },
  {
    icon: <i className="fa-solid fa-money-check-dollar"></i>,
    text: "fiverr",
    id: 3,
    link: "https://www.fiverr.com/tlaxtech/create-landing-pages-blog-pages-and-portfolio-websites",
  },
];

export default function Contact() {
  const searchId = 1;
  const elem = contactContent.find(({ id }) => id === searchId);

  const secondId = 2;
  const elem2 = contactContent.find(({ id }) => id === secondId);

  const thirdId = 3;
  const elem3 = contactContent.find(({ id }) => id === thirdId);

  return (
    <>
      <header className="myHeader" id="header">
        <Navbar {...navItems} />
      </header>

      <main>
        <div className="container">
          <h1 className="subHeader-ff landing-hdr">Get in touch</h1>
          <div className="contactContainer">
            <div>
              elem && <ContactBox {...elem} />
            </div>
            <div className="arrowWrap">
              <img src={shortArrow} alt="short arrow" id="shortArrowContact" />
            </div>
            <div>
              elem2 && <ContactBox {...elem2} />
            </div>
            <div>
              elem3 && <ContactBox {...elem3} />
            </div>
          </div>
        </div>
        <div className="contactArrowWrap">
          <img src={longArrow} alt="long arrow" id="longArrowContact" />
        </div>
        <div className="contactFooterSpacer">

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

const ContactBox = (props) => {
  const { icon, text, id, link } = props;
  return (
    <div className="contactBox" key={id}>
      <div>{icon}</div>
      <div className="linkButton">
        <a href={link} target="_blank" rel="noreferrer">
          <button className="contactText">{text}</button>
        </a>
      </div>
    </div>
  );
};
