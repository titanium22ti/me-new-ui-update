import React from 'react';
import { useLocation } from "react-router-dom";

const DashboardFooter = () => {
    let location = useLocation();

    if (location.pathname === "/") {
        return null
    } else {
        return (
            <div className='dashboard_footer'>
                <div className='copy_right_block'>
                    <p>Copyright © {new Date().getFullYear()} <a href="#0">ME Collateral</a></p>
                </div>
            </div>
        )
    }
}

export default DashboardFooter;