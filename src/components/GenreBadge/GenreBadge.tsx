import React from 'react';
import {IGenre} from "../../models/Genre";
import {NavLink} from "react-router-dom";

const GenreBadge = ({genre}: any) => {
    return (
        <div>
            <NavLink to={'/genre/' + genre.id}>{genre.name}</NavLink>
        </div>
    );
};

export default GenreBadge;
