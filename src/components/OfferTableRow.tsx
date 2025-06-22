import type { IOfferData } from "../types";

type Props = {
  offerData: IOfferData;
};

export const OfferTableRow = ({ offerData }: Props) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {offerData.offer.name}
          </p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center justify-center w-20 h-20">
          {offerData.image ? (
            <img
              className="w-full h-full object-contain rounded"
              src={offerData.image}
              alt={`${offerData.offer.name} image`}
            />
          ) : (
            <span className="text-gray-500 text-xs italic">No image available</span>
          )}
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{offerData.offer.price}</p>
        <p className="text-gray-600 whitespace-no-wrap">{offerData.offer.currency_iso}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a
          href={offerData.offer.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block"
        >
          Merchant's page
        </a>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span
          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <img
            className="w-full h-full rounded-full"
            src={offerData.merchant.logo_url}
            alt={`${offerData.merchant.name} logo`}
          />
        </span>
      </td>
    </tr>
  );
};
