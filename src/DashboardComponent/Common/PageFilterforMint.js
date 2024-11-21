import React, { useState } from 'react';
import page_filter_icon from '../../assets/images/Dashboard/page_filter_icon.svg';
import SettingsPop from '../SettingsPop';
import { NavLink } from 'react-router-dom';

const PageFilter1 = () => {

    const [Settings, setSettingsOpen] = useState(false);
    const SettingsOpen = () => setSettingsOpen(true);
    const SettingsClose = () => setSettingsOpen(false);

    return (
        <>
            <div className='page_filter_block'>
               
                <ul>
                    <li>
                        <NavLink to="/mint">Overall TBS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mint">My TBS</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/ME"> BurnVault</NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink to="/faucetpage">Faucet</NavLink>
                    </li> */}
                    {/* <li onClick={SettingsOpen} >
                        <a href="#0" ><img src={page_filter_icon} alt="page_filter_icon" /></a>
                    </li> */}
                </ul>
                <SettingsPop SettingsClose={SettingsClose} Settings={Settings} SettingsOpen={SettingsOpen}/>
            </div>
        </>
    )
}

export default PageFilter1;