import type { IOfferData } from "../types";

import { OfferTableRow } from "./OfferTableRow";

type Props = {
  offers: IOfferData[];
};

const tableLabels = ['Name','Image', 'Price', 'Merchant\'s page', 'Merchant' ];

export const OfferTable = ({ offers }: Props) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
      <tr>
        {tableLabels.map((label) => (
          <th
            key={label}
            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider text-center"
          >
            {label}
          </th>
        ))}
      </tr>
      </thead>
      <tbody>
      {offers.map((offerData: IOfferData) => (
        <OfferTableRow key={offerData.id} offerData={offerData} />
      ))}
      </tbody>
    </table>
  );
};
