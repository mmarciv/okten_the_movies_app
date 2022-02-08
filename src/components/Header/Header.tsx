import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store";
import {IGenre} from "../../models/Genre";
import GenreBadge from "../GenreBadge/GenreBadge";
import {NavLink} from "react-router-dom";

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
            {/*{status === 'pending' && <h1>Loading ...</h1>}*/}
            {/*{error && <h1>{error}</h1>}*/}
            <div>
                <NavLink to={''}>POPULAR</NavLink>
            </div>
            {genres && genres.map((genre:IGenre) => {
                return <GenreBadge key={genre.id} genre={genre}/>
            })}
        </>
    );
};

export default Header;
