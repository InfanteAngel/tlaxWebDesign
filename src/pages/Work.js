import React from 'react'
import Navbar from '../components/Navbar';
import { navItems } from '../components/Navbar';
import Footer from '../components/Footer';

import softiesSS from '../images/softies-ss.png';
import blogSiteSS from '../images/blogSite-ss.png';
import calcAppSS from '../images/tipCalculator-ss.png';

export const workContent = [
  {
    img: <img src={softiesSS} alt="Softies Web Image" />,
    title: "Softies",
    content:
      "Softies is an ice cream website that sprouted from a career day. Here at Tlax we decided to take that business and make it a step closer to reality by creating its very own website. With subtle, but satisfying animations, and vivid images guaranteed to spark some hunger for dessert, Softies website shows a small percentage of what Tlax Web Design is capable of accomplishing!",
    id: 1,
    link: "https://softies.netlify.app/",
  },
  {
    img: <img src={blogSiteSS} alt="Blog Web Image" />,
    title: "Personal Blog Site",
    content:
      "Websites should not be limited to just businesses and influencer gurus, here at Tlax we understand the need for a personal website whether for personal use, school or job hunting. We can make it happen. One of the best ways to introduce yourself is with a website, statistics show that only 7% of job seekers have a portfolio website to present. Set yourself apart from the competition and let your website do the talking for you.",
    id: 2,
    link: "https://infantecsblog.netlify.app/",
  },
  {
    img: <img src={calcAppSS} alt="Calc App Image" />,
    title: "JavaScript Tip Calculator Web App",
    content:
      "Tlax, is all in for website design, but we are also skilled enough to create a stunning web app! Our most recent works involve a Tip Calculator App, great for integrating into a food service website to make your customer tip selection a lot easier. Increase your chances of tips for your business with our Custom Tip Selector Web App!",
    id: 3,
    link: "https://vanilla-tip-calculator.netlify.app/",
  },
];

export default function Work() {
    const softiesContent = workContent.find(({id}) => id === 1);
    const blogContent = workContent.find(({id}) => id === 2);
    const calcContent = workContent.find(({id}) => id === 3);
  return (
    <>
      <header className="myHeader" id="header">
        <Navbar {...navItems} />
      </header>

      <main className="container">
        <div>
          <h1 className='subHeader-ff landing-hdr'>Our Work</h1>
        </div>

        <div className="boxesSection">
          {<WorkDisplayBox {...softiesContent} key={workContent.id} />}
          {<WorkDisplayBox {...blogContent} key={workContent.id} />}
          {<WorkDisplayBox {...calcContent} key={workContent.id} />}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

const WorkDisplayBox = (props) => {
    const {img, title, content, link} = props;
    return (
          <div className="workBox">
            <div className="smallImageBox">{img}</div>
            <div className="myContent">
              <h1 className='titleBox'>{title}</h1>
              <p>{content}</p>
              <a className='siteLink' href={link} target='_blank'>Visit WebSite</a>
            </div>
          </div>
    );
}

