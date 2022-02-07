import React from 'react';
import {baseURL, mediaURL} from "../../configs/urls";

const MoviesListCard: any = ({card}: any) => {
    return (
        <div>
            <img src={mediaURL + card.poster_path} alt="" height={'150px'} width={'100px'}/>
        </div>
    );
};

export default MoviesListCard;
