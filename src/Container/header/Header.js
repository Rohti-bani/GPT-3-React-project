import "./header.css"
import people from '../../assets/people.png';
import ai from '../../assets/ai.png'
import companies1 from'../../assets/google.png'
import companies2 from'../../assets/slack.png'
import companies3 from'../../assets/atlassian.png'
import companies4 from'../../assets/dropbox.png'
import companies5 from'../../assets/shopify.png'
const Header = ()=>{
  return(
    <div className="gpt3__header" id="home">
      <div className="header">
        <div className="header-gradient">
            <p>Let's Build Something amazing with GPT-3 OpenAI</p>
        </div>
        <div className="header-text">
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className="header-email">
            <input type="email" placeholder="Your Email Address"/>
            <button>Get Started</button>
        </div>
        <div className="header-footer">
            <img src={people} alt = "people"/>
            <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className = "header-footer-companies">
            <img src={companies1} alt = "company"/>
            <img src={companies2} alt = "company"/>
            <img src={companies3} alt = "company"/>
            <img src={companies4} alt = "company"/>
            <img src={companies5} alt = "company"/>
        </div>
      </div>
      <div className="gpt3__header-img">
        <img src={ai} alt = "ai iamge"/>
      </div>
    </div>
  )
}

export default Header
