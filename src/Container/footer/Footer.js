import "./footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <div className="gpt3__footer" id="Library">
      <div className="gpt3__footer_top">
        <h1>Do you want to step in to the future before others</h1>
        <button>
          <p>Request Early Access</p>
        </button>
      </div>
      <div className="gpt3__footer_about">
        <div className="gpt3__footer_about-A">
          <h1>GPT-3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer_about-B">
          <div className="gpt3__footer_about-B-links">
            <h1>Links</h1>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer_about-B-company">
            <h1>Company</h1>
            <p>Term & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer_about-B-getInTouch">
            <h1>Get in touch</h1>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>
        </div>
      </div>
      <div className="gpt3__footer_rights">
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>
      <div className="toTop" id="Top">
        <AnchorLink href = "#home" offset={200}><button>top</button></AnchorLink>
      </div>
    </div>
  );
};

export default Footer;
