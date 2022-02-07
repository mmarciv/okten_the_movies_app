import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs/urls";
import {IMovie} from "../models/Movie";

export const movieService = {
    getPopular: (): any => axiosService.get(`${urls.movie}/popular?api_key=${apiKey}`).then(value => value.data),
    getById: (id:number): any => axiosService.get(`${urls.movie}/${id}`).then(value => value.data),
    getByGenreId: (id:number): any => axiosService.get(`${urls.discover}/movie/?api_key=${apiKey}&with_genres=${id}`).then(value => value.data)
}
