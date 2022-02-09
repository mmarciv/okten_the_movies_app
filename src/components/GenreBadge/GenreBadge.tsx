import React from 'react';

import {NavLink} from "react-router-dom";

import '../../layouts/SiteLayout.css';

const GenreBadge = ({genre}: any) => {
    return (
        <div className={'header__link'}>
            <NavLink to={'/genre/' + genre.id}>{genre.name}</NavLink>
        </div>
    );
};

export default GenreBadge;
