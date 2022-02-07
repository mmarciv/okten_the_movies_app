import React from 'react';
import {IGenre} from "../../models/Genre";

const GenreBadge = ({genre}:any) => {
    return (
        <div>
            <a href={''}>{ genre.name }</a>
        </div>
    );
};

export default GenreBadge;
