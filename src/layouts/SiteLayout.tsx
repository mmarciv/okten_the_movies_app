import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const SiteLayout = () => {
    return (
        <div>
            <div>
                header
            </div>
            <div>
                content
                <Outlet/>
            </div>
            <div>
                footer
            </div>
        </div>
    );
};

export default SiteLayout;
