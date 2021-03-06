import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";
import MovieInfo from "../MovieInfo/MovieInfo";
// @ts-ignore
import StarRatings from 'react-star-ratings';
import "./MoviesListCard.css"
import {NavLink} from "react-router-dom";

const MoviesListCard: any = ({card}: any) => {
    return (
        <div className={'card'}>
                <PosterPreview poster_path={card.poster_path}/>
                <NavLink to={'/movie/' + card.id}>
                    <MovieInfo card={card}/>
                </NavLink>
                <div className={'card__rating'}>
                    <StarRatings key={card.id}
                                 rating={3}
                                 starRatedColor="black"
                                 numberOfStars={5}
                                 starDimension="30px"
                                 starSpacing="10px"
                                 name='rating'/>
                </div>
        </div>
    );
};

export default MoviesListCard;
