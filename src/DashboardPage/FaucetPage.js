import React, { useState, useRef } from 'react';
import ConnectPop_logo from '../assets/images/Dashboard/ConnectPop_logo.svg';
import mer_dai_min_logo from '../assets/images/Dashboard/mer_dai_min_logo.svg';
import mer_dai_icon from '../assets/images/Dashboard/mer_dai_icon.svg';
import mer_dai_bottem_arrow from '../assets/images/Dashboard/mer_dai_bottem_arrow.svg';
import View_on_Explorer_icon from '../assets/images/Dashboard/View_on_Explorer_icon.svg';
import mer_dai_drop_item_logo_1 from '../assets/images/Dashboard/mer_dai_drop_item_logo_1.svg';
import mer_dai_drop_item_logo_2 from '../assets/images/Dashboard/mer_dai_drop_item_logo_2.svg';
import { WebOffBotton } from '../component/common/WebOffBotton';
import { WebBotton } from '../component/common/WebBotton';
import { MainPoolBoxData } from '../AllData/MainPoolBoxData';
import  MainPoolBoxfaucetpage  from '../DashboardComponent/Common/MainPoolBoxFaucetpage';
import PageFilter from '../DashboardComponent/Common/PageFilter';
import MainPoolBoxfaucetpage1 from '../DashboardComponent/Common/MainPoolBoxFaucetpage1';
import MainPoolBoxfaucetpage2 from '../DashboardComponent/Common/MainPoolBoxFaucetpage2';
import MainPoolBoxfaucetpage3 from '../DashboardComponent/Common/MainPoolBoxFaucetpage3';
import MainPoolBoxfaucetpage4 from '../DashboardComponent/Common/MainPoolBoxFaucetpage4';
import MainPoolBoxfaucetpage5 from '../DashboardComponent/Common/MainPoolBoxFaucetpage5';
import Sidebar_menu_btn from '../assets/images/Dashboard/Sidebar_menu_btn.svg';

const PoolPage = ({ gbalances, balanceOfTokens}) => {

    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    const MainPoolBoxDatas = [ 
        {
            item_logo: Sidebar_menu_btn,
            item_logo_name : "ME",
            CoverageRatio: "115.86%",
            PoolDepositsNum:"$ 6.37M",
            PoolDepositsNum2:"6.36M USDC",
            Volume24HNum:"$ 58,134.25",
            Volume24HNum2:"58,076.18 USDC",
            MyDepositsNum:"$ 0.00",
            MyDepositsNum2:"0.00 USDC",
        },
    ]
    return (
        <>
            <div className='Dashboard_main_wrapper' style={{paddingBottom: "200px"}}>
                {/* <div className='Pool_Page_main'> */}
                    
                   
                    <div className='Main_Pool_block'>
                        <h2 className='pt-5'>Faucet </h2>
                       
                          {/* <MainPoolBoxfaucetpage Item={MainPoolBoxData[0]} />
                          <MainPoolBoxfaucetpage1 Item={MainPoolBoxData[1]} />
                          <MainPoolBoxfaucetpage2 Item={MainPoolBoxData[2]} /> */}
                          <MainPoolBoxfaucetpage3 Item={MainPoolBoxDatas[0]} balanceOfTokens={balanceOfTokens} />
                          <MainPoolBoxfaucetpage5 Item={MainPoolBoxDatas[0]} balanceOfTokens={balanceOfTokens} gbalances={gbalances}/>
                          <MainPoolBoxfaucetpage4 Item={MainPoolBoxDatas[0]} balanceOfTokens={balanceOfTokens} gbalances={gbalances}/>
                       
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default PoolPage;