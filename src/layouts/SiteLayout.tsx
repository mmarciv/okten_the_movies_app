import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import './SiteLayout.css';
import Header from "../components/Header/Header";

const SiteLayout = () => {
    return (
        <div>
            <div className={'header'}>
                <Header/>
            </div>
            <div className={'content'}>
                <Outlet/>
            </div>
            <div className={'footer'}>
                footer
            </div>
        </div>
    );
};

export default SiteLayout;
