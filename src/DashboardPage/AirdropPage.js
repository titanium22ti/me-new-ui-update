import React, { useState, useEffect, useRef } from 'react';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import { Button, Card, Form, InputGroup, Col, Container, Dropdown, OverlayTrigger,Accordion, Row, Tab, Tabs, Tooltip, Alert, Badge, ProgressBar } from 'react-bootstrap';
 import Vemercury_page_logo from '../assets/images/Dashboard/Vemercury_page_logo.svg';
import akar_icons_question from '../assets/images/Dashboard/akar_icons_question.svg';
import Boost_Calculator_icon from '../assets/images/Dashboard/Boost_Calculator_icon.svg';
import ConfirmStackMercurypop from '../DashboardComponent/Common/ConfirmStackMercurypop';
import SwapTokensPop from '../DashboardComponent/Common/SwapTokensPop';
import animeswap from '../assets/images/Dashboard/animeswap.png';
import aux from '../assets/images/Dashboard/liquidity.jpg';
import { WebOffBotton } from '../component/common/WebOffBotton';
import PageFilter from '../DashboardComponent/Common/PageFilter';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { deployeraddress1, pooladdress1, deployeraddress, pooladdress, tokencreator1,tokencreator,liquidiswapbalance, liabilitycal, lpassetbalance,poolassetbalance, lpstakingbalane, mebalance, animeswapswapbalance, createtpairhistory } from '../config';
import { AptosClient, Types } from 'aptos';
import { WebBotton } from '../component/common/WebBotton';
import usdc_1 from '../assets/images/Dashboard/usdc_1.svg';
import usdc_3 from '../assets/images/Dashboard/usdc_3.svg';
import mer_dai_icon from '../assets/images/Dashboard/mer_dai_icon.svg';
import { click } from '@testing-library/user-event/dist/click';
import ButtonLoad from 'react-bootstrap-button-loader';
import AirdropCard from './LaunchpadCards/AirdropCard';
import AirdropCoinCard from './LaunchpadCards/AirdropCoinCard';
import PreSaleCard from './LaunchpadCards/PreSaleCard';

const AidropPage = ({ balanceOfTokens }) => {
  return (
    <>
    <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>
    <div className='Dashboard_main_wrapper' style={{paddingBottom: "120px", minHeight: '80vh'}}>
    <Row className='justify-content-center'>
      <Col md="auto" style={{maxWidth: '480px', width: '100%'}}>
        <AirdropCard balanceOfTokens={balanceOfTokens} CampaignId={"wtHNTJhh4E"}/>
      </Col>
      {/* <Col md="auto" style={{maxWidth: '480px', width: '100%'}}>
        <AirdropCoinCard balanceOfTokens={balanceOfTokens} CampaignId={"UOjoLvrBDc"}/>
      </Col> */}
      {/* <Col md="auto" style={{maxWidth: '480px', width: '100%'}}>
        <PreSaleCard balanceOfTokens={balanceOfTokens}/>
      </Col> */}
    </Row>
    </div>
        {/* <ConfirmStackMercurypop onAprroved={true} handleClose={handleClose} open={open} /> */}
    </>
)
};

export default AidropPage;