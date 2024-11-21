import React, { useState, useEffect, useRef } from 'react';

import { Button, Card, Form, InputGroup, Col, Container, Dropdown, OverlayTrigger,Accordion, Row, Tab, Tabs, Tooltip, Alert, Badge, ProgressBar } from 'react-bootstrap';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import SuiLaunchpadCard from './LaunchpadCards/SuiLaunchpadCard';

const DutchAuction = ({ balanceOfTokens }) => {
  return (
    <>
    <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>
    <div className='Dashboard_main_wrapper' style={{paddingBottom: "120px", minHeight: '80vh', backgroundColor: '#040718'}}>
    <Row className='justify-content-center'>
      <Col md="auto" style={{maxWidth: '480px', width: '100%', backgroundColor: '#040718'}}>
        {/* <DutchAuctionCard balanceOfTokens={balanceOfTokens}/> */}
        <SuiLaunchpadCard balanceOfTokens={balanceOfTokens}/>
      </Col>
      {/* <Col md="auto" style={{maxWidth: '480px', width: '100%'}}>
        <PreSaleCard balanceOfTokens={balanceOfTokens}/>
      </Col> */}
    </Row>
    </div>
        {/* <ConfirmStackMercurypop onAprroved={true} handleClose={handleClose} open={open} /> */}
    </>
)
};

export default DutchAuction;