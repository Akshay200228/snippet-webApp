import React from "react";
// import { p } from "@material-tailwind/react";
import { logo6 } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const LINKS = [
  {
    title: "Navigation",
    items: ["Home", "About Us", "Company", "Pricing Plan", "Blogs", "Contact Us"],
  },
  {
    title: "Platform",
    items: ["Analytics", "Careers", "Press", "News", "Data Management", "Integrations"],
  },
  {
    title: "Support Us",
    items: ["Blog", "Newsletter", "Events", "Help Center"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help Center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer 
    id="contact"
      className="relative w-full mt-20 mb-10" 
      data-aos='fade-up' data-aos-delay='600'
    >
      <div className="w-full px-8 mx-auto max-w-7xl">
        <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col items-start">
            <img src={logo6} alt="logo6" className="w-[124px] h-[32px] mb-6" />

            <p variant="paragraph" className="text-dimWhite">
              Technology Park,<br />
              B-14 Mario Curie Street,<br />
              City, State, Country
            </p>

            <p variant="paragraph" className="mt-6 text-dimWhite">
              Email: <a href="mailto:example@example.com" className="text-dimWhite">example@example.com</a>
            </p>
            <hr />

            <div className="flex mt-6 space-x-4">
              <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-xl text-dimWhite hover:text-white" />
              </a>
              <a href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-xl text-dimWhite hover:text-white" />
              </a>
              <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-xl text-dimWhite hover:text-white" />
              </a>
            </div>
          </div>
          <div className="grid justify-between grid-cols-2 gap-4 mt-6 md:grid-cols-4 md:mt-0">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p
                  variant="small"
                  color="blue-gray"
                  className="mb-3 text-lg font-semibold text-white"
                >
                  {title}
                </p>
                {items.map((link) => (
                  <li key={link}>
                    <p
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors text-dimWhite hover:text-secondary"
                    >
                      {link}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-blue-gray-50 md:flex-row md:justify-between">
          <p
            variant="small"
            className="mb-4 font-normal text-center text-white md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="#">
              My Website
            </a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
