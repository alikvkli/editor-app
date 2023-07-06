

export interface DutyPharmacyResponse {
    success: boolean;
    result: {
        name: string;
        dist: string;
        address: string;
        phone: string;
        loc: string;
    }
}

export interface DutyPharmacyRequestProps{
    county:string;
    district:string;
}