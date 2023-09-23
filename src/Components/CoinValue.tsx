import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";

const MINUTES = 1000 * 60;

const urlApi = "https://economia.awesomeapi.com.br/USD/1";

interface ICoin {
  0: {
    code: string;
    bid: number;
  };
}

const CoinValue = () => {
  const [coin, setCoin] = useState<ICoin>();
  const { data, loading } = useFetch<ICoin>(urlApi, undefined, 30 * MINUTES);

  useEffect(() => {
    if (data) {
      setCoin(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <ul>
        <li className="font-size-4">{coin?.[0].code}</li>
        <li className="font-size-4">R$: {coin?.[0].bid}</li>
      </ul>
    </div>
  );
};

export default CoinValue;
