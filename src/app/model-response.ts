

export interface Hotels {
    hotels: Hotel[];
    checkIn: Date;
    total: number;
    checkOut: Date;
}

export interface Hotel {
    code?: number;
    name?: string;
    categoryCode?: string;
    categoryName?: string;
    destinationCode?: string;
    destinationName?: string;
    zoneCode?: number;
    zoneName?: string;
    latitude?: string;
    longitude?: string;
    rooms?: Room[];
    minRate?: string;
    maxRate?: string;
    currency?: string;
    description?: Description;
    ranking?: number,
    images?: any
    address: Address
}




export interface Room {
    code: string;
    name: string;
    rates: Rate[];
}

export interface Rate {
    rateKey: string;
    rateClass: string;
    rateType: string;
    net: string;
    sellingRate?: string;
    hotelMandatory?: boolean;
    allotment: number;
    paymentType: string;
    packaging: boolean;
    boardCode: string;
    boardName: string;
    cancellationPolicies: CancellationPolicy[];
    taxes: Taxes;
    rooms: number;
    adults: number;
    children: number;
    promotions?: Promotion[];
    rateCommentsId?: string;
    offers?: Offer[];
}



export interface CancellationPolicy {
    amount: string;
    from: Date;
}

export interface Offer {
    code: string;
    name: string;
    amount: string;
}




export interface Promotion {
    code: string;
    name: string;
}



export interface Address {
    street: string;
    number: string;
    content: string;
}





export interface Taxes {
    taxes: Tax[];
    allIncluded: boolean;
}
export interface Name  {
    content: string;
}
export interface Description  {
    content: string;
}

export interface Tax {
    included: boolean;
    amount: string;
    currency: string;
    clientAmount: string;
    clientCurrency: string;
}


