import axios from "axios";
import { SERVER_FETCH_PATH } from "../constants/paths";

export const ApiClient = axios.create({
    baseURL: SERVER_FETCH_PATH,
});
