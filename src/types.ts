export interface IOfferData {
  id: number;
  image: string;
  merchant: {
    name: string;
    logo_url: string;
  };
  offer: IOffer
}

export interface IOffer {
  name: string;
  price: string;
  currency_iso: string;
  currency_symbol?: string;
  link: string;
}


export interface IApiResponse {
  widget: {
    data: {
      offers: IOfferData[];
    };
  };
}
