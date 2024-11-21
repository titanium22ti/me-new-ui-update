import React, { useEffect, useState } from 'react';
import { WebBotton } from './common/WebBotton';
import Container from 'react-bootstrap/Container';
import hero_1_1 from '../assets/images/HomePage/hero_1_1.svg';
import hero_2 from '../assets/images/HomePage/hero_2.png';
import aptoslogo from '../assets/images/HomePage/aptoslogo2.svg';
import solonalogo from '../assets/images/HomePage/solanalogo.png';
import avaxlogo from '../assets/images/HomePage/avaxlogo.svg';
import base from '../assets/images/HomePage/base.png';
import Fade from 'react-reveal/Fade';
import ButtonLoad from 'react-bootstrap-button-loader';
import { Link } from "react-router-dom";
import {recordUserVisits} from  '../abi/firebasecode';


const HeroSec = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        recordUserVisits("Not Connected", "LandingPage");

      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
  
      // Attach the event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <section className='hero_sec'>
            <Container>
                <div className='row hero_sec_row'>
                    <div className='col-md-6 col-12 '>
                        <Fade bottom duration={1000}>
                            <h1 >
                              
                            ME <span style={{ color: '#AA14F0' }}>COLLATERAL</span>
                                
                                </h1>
                             
                                
                        </Fade>
                        <Fade bottom duration={1000}>
                            <h2 className='hero_desc1' style={{ "margin-top": "2rem!important","margin-bottom": "2rem!important"}}>
                                {/* Ultramodern Single-Sided DeFi 2.0
                                StableSwap. */}
                                Next Generation Framework for MEME Economics
                                </h2>
                                
                        </Fade>
                        <br/>
                        <Fade bottom duration={1500}>
                        <p className='hero_desc' style={{    "margin-top": "2rem!important","margin-bottom": "2rem!important"}}>
                        Say goodbye to price volatility! An intelligent non-depreciating asset class that transitions from a price-based trading strategy to time-based dynamics, ensuring enhanced reliability and price independence.
                                            </p>
                            {/* <WebBotton WebBotton="Read Documentation" link="https://docs.mercuryfi.exchange/" target="_blank" rel="noreferrer" /> */}
                        </Fade>
                        <br/>
                        {/* <Fade bottom duration={1500}> */}
{/* <div class="trade_btn_row"> */}
  
                        <div className='hero_btn' >
                                            {/* <a   href="https://docs.mercuryfi.exchange/" target="_blank" rel="noreferrer" >Read Documentation
                                            
                                            </a> */}
                                            {/* &nbsp; <ButtonLoad>hi</ButtonLoad> */}
                                               <a   href="https://www.youtube.com/watch?v=J7BdAbFR5UU" target="_blank" rel="noreferrer" style={{"margin-top": "0.5rem!important"}}> Explainer video </a>
                                            {/* <Link to="https://www.youtube.com/@mecollateral" target="_blank" rel="noreferrer" style={{"margin-top": "0.5rem!important"}}>
                                      

                                            Explainer video
                                        </Link> */}
                                            </div>
    {/* </div> */}
                            {/* <WebBotton WebBotton="Read Documentation" link="https://docs.mercuryfi.exchange/" target="_blank" rel="noreferrer" /> */}
                        {/* </Fade> */}
                        {/* <ButtonLoad style={{"margin-top": "0.5rem!important"}} onclick={()=>window.open("https://docs.mercuryfi.exchange/")}>Read Documentation</ButtonLoad>&nbsp;<ButtonLoad style={{"margin-top": "0.5rem!important"}}>hi</ButtonLoad> */}
                    <br/>
                        <Fade bottom duration={2000}>
                           
                        {/* <h6 className='px-4'>Powered by &nbsp;<img src={avaxlogo} style={{height:"55x",width:"55px"}} />  &nbsp;AVALANCHE</h6> */}
                        {/* <h6 className={`justify-content-center ${isMobile ? 'px-5' : ''}`}>
      Powered by&nbsp;
      <img src={avaxlogo} style={{ height: '55px', width: '55px' }} alt="Avalanche Logo" />&nbsp;
      AVALANCHE
    </h6> */}
     {/* <h6 className={`text-center ${isMobile ? 'px-2' : 'px-5'}`}>
      <div className="d-flex justify-content-center">
        Powered by&nbsp;
        <img src={avaxlogo} style={{ height: '55px', width: '55px' }} alt="Avalanche Logo" />&nbsp;
        AVALANCHE
      </div>
    </h6> */}
     <h6 >
      <div className={` d-flex ${isMobile ? 'px-2 justify-content-center align-items-center' : 'justify-content-start align-items-center'}`}>
        Powered by&nbsp;
          <img src={base} style={{ height: '30px' }} alt="Avalanche Logo" />&nbsp;
        <b><span> BASE</span></b>
      </div>
    </h6>
                        </Fade>
                        
                       
                    </div>
                    <div className='col-md-6 col-12'>
                        <div className='video_block' >
                            <video loop muted autoPlay playsInline> 
                                <source src={require('../assets/images/HomePage/Logo_Animation.mp4')} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </Container>
            <div className='hero_left'>
                <img src={hero_1_1} alt="hero_1" />
            </div>
            <div className='hero_right'>
                <img src={hero_2} alt="hero_2" />
            </div>
        </section>
    )
}

export default HeroSec;
