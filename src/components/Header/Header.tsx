import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store";
import {IGenre} from "../../models/Genre";
import GenreBadge from "../GenreBadge/GenreBadge";
import {NavLink} from "react-router-dom";

import '../../layouts/SiteLayout.css';

const Header = () => {

    const {genres, status, error} = useSelector((state: any) => {
        return state['genreReducer'];
    });

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres());
    }, []);

    return (
        <>
            <div className={'header__link'}>
                <NavLink to={''}>Popular</NavLink>
            </div>
            {genres && genres.map((genre:IGenre) => {
                return <GenreBadge key={genre.id} genre={genre}/>
            })}
        </>
    );
};

export default Header;
