import axios from "axios";
import { DutyPharmacyRequestProps, DutyPharmacyResponse } from "./types";

const instance = axios.create({
    baseURL: "https://api.collectapi.com/health/dutyPharmacy",
    headers: {
        Authorization: "apikey 3Iqa7XM0LjIugXBnSUoBJw:3XZ3bfmCBKEgQcYB2cpdoo"
    }
});

export const getPharmacies = async ({ county, district }: DutyPharmacyRequestProps): Promise<DutyPharmacyResponse> => {
    let params = new URLSearchParams();
    params.append("il", county)
    params.append("ilce", district);
    const response = await instance.get("/", {
        params: params
    });
    return response.data;
}