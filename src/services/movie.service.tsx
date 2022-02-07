import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: () => axiosService.get(urls.movie).then(value => value.data),
    getById: (id:number) => axiosService.get(`${urls.movie}/${id}`).then(value => value.data)
}
