import React from 'react'
import { StyledFooter, StyledSocial } from './footerComponents'

const Footer = () => {
  return (
    <StyledFooter>
      <div>vascosilvaa@gmail.com</div>
      <StyledSocial>
        <a href="http://www.facebook.com/vascorafaelsilva" target="blank"><i className="fab fa-facebook-f" ></i></a>
        <a href="http://twitter.com/vascorsilva" target="blank"><i className="fab fa-twitter"></i></a>
        <a href="http://www.linkedin.com/in/vasco-silva-83a003109/" target="blank"><i className="fab fa-linkedin"></i></a>
        <a href="http://www.instagram.com/vascorafaelsilva/" target="blank"><i className="fab fa-instagram"></i></a>
        <a href="https://github.com/vascosilvaa" target="blank"><i className="fab fa-github"></i></a>
      </StyledSocial>
    </StyledFooter>
  )
}
  
export default Footer;