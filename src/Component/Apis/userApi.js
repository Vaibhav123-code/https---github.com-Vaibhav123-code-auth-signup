import axios from "axios";

const useApi = axios.create({
    baseURL : "https://fakestoreapi.com/"  
})

export default useApi;