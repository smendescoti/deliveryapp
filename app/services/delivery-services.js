import axios from "axios";
import * as config from '../config/api-config';

export const getCategorias = () => {
    return axios.get(`${config.getBaseUri()}/api/categorias`)
        .then(
            response => {
                return response.data;
            }
        )
}

export const getProducts = (idCategoria = 0) => {

    var resource = "/api/cardapio";

    if (idCategoria > 0)
        resource = resource + "/" + idCategoria;

    return axios.get(`${config.getBaseUri()}${resource}`)
        .then(
            response => {
                return response.data;
            }
        )
}