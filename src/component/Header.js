import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
//import header_logo from '../assets/images/HomePage/header_logo.svg';
import header_logo from '../assets/images/HomePage/mercurylogonew.svg';

//import header_logob from '../assets/images/HomePage/Blacknewlogo.svg';
import LaunchAppModal from '../DashboardComponent/Launchapppop.js';
import twitter from '../assets/images/HomePage/x-twitter.svg';

const Header = () => {

    const [active, setactive] = useState(false);
    const [open4, setOpen4] = useState(false);
    const handleClose4 = () => setOpen4(false);

    const onactive = () => {
        setactive(!active);
        document.documentElement.classList.toggle("cm_overflow");
    }

    const remove_menu = () => {
        const doc = document.querySelector(".header_main_block");
        doc.classList.remove("open_menu");
        document.documentElement.classList.remove("cm_overflow");
      }

    const handleOpen4 = () => { setOpen4(true) };
    
    return (
        <div className={active ? "open_menu" : ""}>
            <header className="sticky">
                <Container>
                    <div className="in_header_block">
                        <div className="logo_hold">
                            <a href="#0">
                                <img src={header_logo} alt="logo" className="img-fluid" />
                            </a>
                        </div>
                        <div className="menu_block">
                            <div className="menu_list">
                                <ul className="navbar_nav">
                                    <li className="active nav-btn" data-row-id="banner_wrapper">
                                        <a href="https://docs.mecollateral.com/" target="_blank" rel="noreferrer" className="scroll_trigger">
                                            Docs
                                        </a>
                                    </li>
                                    {/* <li className="nav-btn"> */}
                                        {/* <a href="https://github.com/MercuryFi/Whitepaper/blob/main/Mercury%20Stableswap%20Whitepaper.pdf" target="_blank" rel="noreferrer">
                                            WhitePaper
                                        </a> */}
                                        {/* <a href="https://github.com/mecollateral/Whitepaper/blob/main/ME_Whitepaper.pdf" target="_blank" rel="noreferrer">
                                            Whitepaper
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href= "https://twitter.com/mecollateral" target= "_blank"  rel= "noreferrer">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3447 5.56337C18.7187 5.83961 18.0471 6.02715 17.3425 6.11078C18.0623 5.67995 18.6148 4.99567 18.8733 4.18215C18.1991 4.58257 17.454 4.87149 16.6608 5.02862C16.0247 4.35195 15.1199 3.92871 14.1163 3.92871C12.1927 3.92871 10.6316 5.48987 10.6316 7.41344C10.6316 7.68715 10.662 7.95326 10.7228 8.20669C7.82606 8.06223 5.25876 6.67341 3.54047 4.56483C3.24142 5.0793 3.06909 5.67741 3.06909 6.31607C3.06909 7.52495 3.68493 8.59191 4.62011 9.21536C4.04988 9.19762 3.5126 9.04049 3.04121 8.77945C3.04121 8.79466 3.04121 8.80733 3.04121 8.82254C3.04121 10.5104 4.24249 11.9195 5.83659 12.2388C5.54514 12.3174 5.23595 12.3605 4.91916 12.3605C4.6936 12.3605 4.47565 12.3377 4.26276 12.2971C4.70627 13.6809 5.99372 14.6896 7.51687 14.7174C6.32319 15.6526 4.82285 16.2102 3.1882 16.2102C2.90689 16.2102 2.63064 16.1924 2.35693 16.162C3.89782 17.1504 5.73015 17.7282 7.69934 17.7282C14.1087 17.7282 17.6137 12.4188 17.6137 7.81387C17.6137 7.66181 17.6112 7.51228 17.6036 7.36275C18.2853 6.87109 18.8758 6.25778 19.3421 5.5583L19.3447 5.56337Z" fill="currentColor"></path></svg>
                                        
                                        </a>
                                        </li>
                                        <li>
                                        <a href="https://discord.gg/eAZBnnpAMJ" target= "_blank"  rel= "noreferrer">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.23594 9.98145C8.68497 9.98145 8.25 10.4402 8.25 11C8.25 11.5597 8.69464 12.0185 9.23594 12.0185C9.78691 12.0185 10.2219 11.5597 10.2219 11C10.2315 10.4402 9.78691 9.98145 9.23594 9.98145ZM12.7641 9.98145C12.2131 9.98145 11.7781 10.4402 11.7781 11C11.7781 11.5597 12.2228 12.0185 12.7641 12.0185C13.315 12.0185 13.75 11.5597 13.75 11C13.75 10.4402 13.315 9.98145 12.7641 9.98145Z" fill="currentColor"></path><path d="M17.3171 1.8335H4.68286C3.61743 1.8335 2.75 2.67683 2.75 3.72183V16.1152C2.75 17.1602 3.61743 18.0035 4.68286 18.0035H15.3749L14.8751 16.3077L16.082 17.3985L17.2229 18.4252L19.25 20.1668V3.72183C19.25 2.67683 18.3826 1.8335 17.3171 1.8335ZM13.6777 13.8052C13.6777 13.8052 13.3383 13.411 13.0554 13.0627C14.2906 12.7235 14.762 11.9718 14.762 11.9718C14.3754 12.2193 14.0077 12.3935 13.6777 12.5127C13.2063 12.7052 12.7537 12.8335 12.3106 12.9068C11.4054 13.0718 10.5757 13.026 9.86857 12.8977C9.33114 12.7968 8.86914 12.6502 8.48257 12.5035C8.26571 12.421 8.03 12.3202 7.79429 12.1918C7.766 12.1735 7.73771 12.1643 7.70943 12.146C7.69057 12.1368 7.68114 12.1277 7.67171 12.1185C7.502 12.0268 7.40771 11.9627 7.40771 11.9627C7.40771 11.9627 7.86029 12.696 9.05771 13.0443C8.77486 13.3927 8.426 13.8052 8.426 13.8052C6.34229 13.741 5.55029 12.4118 5.55029 12.4118C5.55029 9.46016 6.908 7.06766 6.908 7.06766C8.26571 6.07766 9.55743 6.10516 9.55743 6.10516L9.65171 6.21516C7.95457 6.69183 7.172 7.416 7.172 7.416C7.172 7.416 7.37943 7.306 7.72829 7.15016C8.73714 6.71933 9.53857 6.60016 9.86857 6.57266C9.92514 6.5635 9.97229 6.55433 10.0289 6.55433C10.604 6.481 11.2546 6.46266 11.9334 6.536C12.8291 6.63683 13.7909 6.8935 14.7714 7.416C14.7714 7.416 14.0266 6.7285 12.4237 6.25183L12.5557 6.10516C12.5557 6.10516 13.8474 6.07766 15.2051 7.06766C15.2051 7.06766 16.5629 9.46016 16.5629 12.4118C16.5629 12.4118 15.7614 13.741 13.6777 13.8052Z" fill="currentColor"></path></svg>
                                        </a>
                                        </li>
                                        <li>
                                        <a href='https://t.me/mecollateral' target="_blank" rel="noopener noreferrer">
                                        <svg fill="currentColor" width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                                        </svg>
                                        </a>
                                        </li>
                                    <li className="nav-btn">
                                        {/* <a href="https://github.com/MercuryFi/Whitepaper/blob/main/Mercury%20Stableswap%20Whitepaper.pdf" target="_blank" rel="noreferrer">
                                            WhitePaper
                                        </a> */}
                                      <Link to="/dashboard" style={{"margin-top": "0.5rem!important"}}>LaunchApp</Link>

                                        {/* <a href="#0"  onClick={handleOpen4}>
                                            LaunchApp
                                        </a> */}
                                    </li>
                                    {/* <li>
                                        <Link to="/dashboard" onClick={remove_menu}> */}
                                        {/* <Link to="#0" onClick={remove_menu}> */}
{/* 
                                            LaunchApp
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="menu_btn"></div>
                        </div>
                        <div className="menu_toggle_btn" onClick={onactive}>
                            <span> </span>
                            <span> </span>
                            <span> </span>
                        </div>
                      
                    </div>
                    <LaunchAppModal open={open4} handleclose={handleClose4} />
                </Container>
            </header>
        </div>
    )
}

export default Header;