import React from 'react'
import { contactContent } from '../pages/Contact';



export default function Footer() {
  return (
    <footer >
      <div className="myFooter">
        <div className='myIcons'>
          <ul className="footerIcons">
            {contactContent.map((props) => {
              const {icon , id, link} = props;
              return (
                <li key={id}>
                  <a href={link} target='_blank'>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <p id="copyRight">TlaxWebDesign &copy; 2024 </p>
      </div>
    </footer>
  );
}
