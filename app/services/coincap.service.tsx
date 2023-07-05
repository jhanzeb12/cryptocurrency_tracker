import { ICryptocurrencyProps } from "~/types/types";
import { Http } from "./http.service";

const API_URL = 'https://api.coincap.io/v2/';

export const fetchAllCurrenciesData = async (): Promise<ICryptocurrencyProps[]> => {
    const url = `${API_URL}assets`;

    const response = await Http.Get(url);

    return response;
}