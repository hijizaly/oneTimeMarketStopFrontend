import {axiosRequest} from "../../common/utilities/axios-utils.ts";
import { useQuery } from 'react-query'


function allProductRequest() {
    return axiosRequest({ url: `/product` });
}

export const useGetAllProducts = () => {
    return useQuery(['products'], allProductRequest);
};