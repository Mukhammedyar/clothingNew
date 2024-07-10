import axios from "axios"
import { createCategoryType } from "../helpers/types";

const apiUrl = "http://localhost:8080/api/"

export interface dataFetchingType {
    type: string | undefined,
    data: createCategoryType | undefined,
    id: string | undefined
}

export const categoryFetching = async ({type, data, id}: dataFetchingType): Promise<any> => {
    switch (type) {
        case 'get':
            return await axios.get(apiUrl + "categories/get-all")
        case 'create':
            return await axios.post(apiUrl + "categories/create", data)
        case 'delete':
            return await axios.post(apiUrl +"categories/delete-one/"+ id)
        default:
            throw new Error("Invalid type");
    }
}
export const productFetching = async ({type, data, id}: dataFetchingType): Promise<any> => {
    switch (type) {
        case 'get':
            return await axios.get(apiUrl + "products/get-all")
        case 'create':
            return await axios.post(apiUrl + "products/create", data)
        case 'delete':
            return await axios.post(apiUrl +"products/delete-one/"+ id)
        case 'edit':
            return await axios.put(apiUrl +"products/delete-one/"+id, data)
        default:
            throw new Error("Invalid type");
    }
}