import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";

const MINUTES = 1000 * 60;

const urlDollar = "https://economia.awesomeapi.com.br/USD/1";
const urlEuro = "https://economia.awesomeapi.com.br/EUR/1";

interface ICoin {
  0: {
    code: string;
    bid: number;
  };
}

const CoinValue = () => {
  const [dollar, setDollar] = useState<ICoin>();
  const [euro, setEuro] = useState<ICoin>();

  const { data: dataDollar, loading: loadingDollar } = useFetch<ICoin>(
    urlDollar,
    undefined,
    30 * MINUTES
  );
  const { data: dataEuro, loading: loadingEuro } = useFetch<ICoin>(
    urlEuro,
    undefined,
    30 * MINUTES
  );

  useEffect(() => {
    if (dataDollar) {
      const bidNumber = Number(dataDollar[0]?.bid);
      setDollar({ [0]: { ...dataDollar[0], bid: bidNumber } });
    }

    if (dataEuro) {
      const bidNumber = Number(dataEuro[0]?.bid);
      setEuro({ [0]: { ...dataEuro[0], bid: bidNumber } });
    }
  }, [dataDollar, dataEuro]);

  if (loadingDollar || loadingEuro) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <span className="font-size-4">{dollar?.[0].code}</span>
        <span className="font-size-4"> - {dollar?.[0].bid.toFixed(2)}</span>
      </div>
      <div>
        <span className="font-size-4">{euro?.[0].code}</span>
        <span className="font-size-4"> - {euro?.[0].bid.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CoinValue;
