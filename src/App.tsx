import { useEffect, useState } from "react";

import type { IOfferData, IApiResponse } from "./types";

import { OfferTable } from './components/OfferTable.tsx';
import { Spinner } from "./components/Spinner";

import "./App.css"

const API_URL =
  "https://search-api.fie.future.net.uk/widget.php?model_name=xbox_one_s&area=US&rows=10";

function App() {
  const [offers, setOffers] = useState<IOfferData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: IApiResponse) => {
        setOffers(data.widget.data.offers.slice(0, 4));
      })
      .catch(() => {
        setError('Error occurred while fetching data. Try to reload the page!');
      })
    .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />
  if (error) return <div className="text-center p-6">{error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Offers</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
          >
            <OfferTable offers={offers} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
