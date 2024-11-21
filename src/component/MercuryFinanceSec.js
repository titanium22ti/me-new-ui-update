import React from 'react';
import Container from 'react-bootstrap/Container';
import WebHeading from './common/WebHeading';
import Fade from 'react-reveal/Fade';
import mercury_finance_animation from '../assets/images/HomePage/mercury_finance_animation.png';

const MercuryFinanceSec = () => {
    return (
        <section className='mercury_finance_sec sam_padding'>
            <Container>
                <WebHeading heading_text="ME" heading_text_color=" Vs " heading_text2="MEME" />
                <Fade bottom duration={1000}>
                    <div className='table_main_block'>
                        <table className='table_block'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>ME</th>
                                    <th>MEME</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Capital Efficiency</td>
                                    <td>Excellent</td>
                                    <td>Bad</td>
                                </tr>
                                <tr>
                                    <td>Cash Out protection</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Anti - Whale Farming</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Time Bound Sell Ratio</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Automated LP Protection</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                                {/* <tr>
                                    <td>Exponential Rewards</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr> */}
                                <tr>
                                    <td>DeFi UseCases</td>
                                    <td>Yes</td>
                                    <td>No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Fade>
            </Container>
            <div className='mercury_finance_animation'>
                <img src={mercury_finance_animation} alt="" />
            </div>
        </section>
    )
}

export default MercuryFinanceSec;