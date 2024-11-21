import React from 'react';
import Container from 'react-bootstrap/Container';
import WebHeading from './common/WebHeading';
// import liability_centric_img from '../assets/images/HomePage/liability_centric_img.png';
import tbscoin from '../assets/images/HomePage/Tbscoin.png';
import liability_animation_1 from '../assets/images/HomePage/liability_animation_1.png';
import liability_animation_2 from '../assets/images/HomePage/liability_animation_2.png';
// import timeboundgif from '../assets/images/HomePage/Timebound.gif';
// import Rectangle_1 from '../assets/images/HomePage/Rectangle_1.svg';
// import Rectangle_2 from '../assets/images/HomePage/Rectangle_2.svg';
// import Rectangle_3 from '../assets/images/HomePage/Rectangle_3.svg';
import Fade from 'react-reveal/Fade';


const TimeboundSec = () => {
    return (
        <section className='liability_centric_sec'  style={{marginBottom:"0px"}}>
            <Container>
                <div className='liability_centric_row'>
                <div className='liability_img_block'>
                        <div className='liability_img'>
                            <img src={tbscoin} alt="liability_centric_img" />
                           
                        </div>
                    </div>
                    
                    <div className='liability_text' >
                    <WebHeading  heading_text="Time-Bound Token Standard  " />
                       
                       
                                    <p   style={{ margin: 0 }}>
                               Advanced Next Generation Framework with a novel time lock mechanism to absorb the sell pressure arising from orthogonal asset class models
                              </p>
                             
                    </div>
                    
                   
                </div>
            </Container>
            <div className='liability_animation_1'>
                <img src={liability_animation_1} alt="liability_animation_1" />
            </div>
            <div className='liability_animation_2'>
                <img src={liability_animation_2} alt="liability_animation_2" />
            </div>
         
        </section>
        
    )
}

export default TimeboundSec;