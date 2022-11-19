import "./navbar.css"
import logo from "../../assets/logo.svg"
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import {useState} from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";


const Menu = ()=>(
  <>  <p><AnchorLink  href="#"><p>home</p> </AnchorLink></p>
      <p><AnchorLink offset={50}  href="#whatGpt3"><p>What is GPT?</p></AnchorLink></p>
      <p><AnchorLink offset={100}  href="#OpenAI"><p>Open AI</p></AnchorLink></p>
      <p><AnchorLink offset={-200} href="#CaseStudies"><p>Case Studies</p></AnchorLink></p>
      <p><AnchorLink offset={-170} duration = {200} href="#Library"><p>Library</p></AnchorLink></p>
  </>
)
const Navbar = () => {
  const  [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links-logo">
          <img src={logo} alt="logo"/>
        </div>
      <div className="navbar__links-container">
        <Menu/> 
      </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="white" size={27} onClick = {()=> setToggleMenu(false)}/>
          : <RiMenu3Line color="white" size={27} onClick = {()=> setToggleMenu(true)}/>
        }
        {toggleMenu &&(
          <div className=" gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
                <Menu/>
                <div className="gpt3__navbar-menu_container-links-sign">
                     <p>Sign in</p>
                    <button>Sign up</button>
                </div>
            </div>  
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar
