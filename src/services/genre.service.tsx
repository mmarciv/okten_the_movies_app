import {axiosService} from "./axios.service";
import {apiKey, urls} from "../configs/urls";
import {IGenre} from "../models/Genre";

export const genreService = {
    getAll: (): Promise<IGenre[]> => axiosService.get(`${urls.genre}/movie/list?api_key=${apiKey}`).then(value => value.data.genres)
}
