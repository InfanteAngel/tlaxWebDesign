import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Paragraph from "./components/Paragraph";
import About, { paraContent } from "./pages/About";
import { navItems } from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import shortArrow from "./images/short-arrow.png";
import longArrow from "./images/long-arrow.png";
import fDeviceMockup from "./images/mobie-f-device-mockup.png";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

const MainContent = () => {
  const searchId = 1;
  const elem = paraContent.find(({ id }) => id === searchId);
  return (
    <>
      <header className="myHeader" id="header">
        <Navbar {...navItems} />
      </header>

      <main>
        <div className="container mainSection">
          <div className="grid">
            <div className="left-box">
              <img src={shortArrow} alt="shortArrow" id="short-arrow" />
              <div>{elem && <Paragraph {...elem} />}</div>
              <span>
                <a href="/About" className="link accent-ff" id="learnMoreBtn">
                  Learn More
                </a>
              </span>
            </div>
            <div className="right-image">
              <img
                className="device-mockup"
                src={fDeviceMockup}
                alt="softies device mockup"
                id="device-mockup"
              />
            </div>
          </div>
        </div>
        <div className="longArrowWrapper">
          <img src={longArrow} alt="long-arrow" id="long-arrow" />
        </div>
        <div className="mainFooterSpacer">

        </div>
      </main>

      <footer>{<Footer {...navItems} />}</footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "Services",
    element: <Services />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Work",
    element: <Work />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
