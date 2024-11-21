import React from 'react';
import Container from 'react-bootstrap/Container';
import footer_logo from '../assets/images/HomePage/footer_logo.svg';
import footer_icon_1 from '../assets/images/HomePage/footer_icon_1.svg';
import footer_icon_2 from '../assets/images/HomePage/footer_icon_2.svg';
import footer_icon_3 from '../assets/images/HomePage/footer_icon_3.svg';
import footer_icon_4 from '../assets/images/HomePage/footer_icon_4.svg';
import footer_icon_5 from '../assets/images/HomePage/footer_icon_5.svg';

import aptoslogo from '../assets/images/HomePage/aptoslogo2.svg';


const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        {/* <div className='footer_block'>
          <div className='row'>
            <div className='col-6'>
              <a href="https://www.mercuryfi.exchange/" className='footer_logo'>
                <img src={footer_logo} alt="footer_logo" />
              </a>
            </div>
            
                       
            <div className='col-6'>
              <ul className='footer_icons'>
                <li><a href="https://twitter.com/MercurySwap" target="/"><img src={footer_icon_1} alt="footer_icon" /></a></li>
                <li><a href="https://www.reddit.com/user/Mercury_Fi/" target="/"><img src={footer_icon_2} alt="footer_icon" /></a></li>
                <li><a href="https://medium.com/@mercuryfi.exchange" target="/"><img src={footer_icon_3} alt="footer_icon" /></a></li>
                <li><a href="https://discord.gg/rrsFuPMD7p" target="/"><img src={footer_icon_4} alt="footer_icon" /></a></li>
                {/* <li><a href="https://discord.gg/rrsFuPMD7p" target="/"><img src={footer_icon_5} alt="footer_icon" /></a></li> */}

              {/* </ul>
            </div>
          </div> */}
          {/* <br/> */}
          {/* <h4>Powered by <img src={aptoslogo}/> </h4> */}

        {/* </div> */} 
        <div className='copyright_block'>
            <p>©2024 <a href="#0">ME Protocol.All Rights Reserved</a></p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;