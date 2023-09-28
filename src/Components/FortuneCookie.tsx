import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";

interface IMessages {
  slip: {
    advice: string;
  };
}

const MINUTES = 1000 * 60 * 30;

const apiUrl = "https://api.adviceslip.com/advice";

const FortuneCookie = () => {
  const [messages, setMessages] = useState<IMessages>();
  const { data, loading } = useFetch<IMessages>(apiUrl, undefined, MINUTES);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return <span className="font-size-3">{messages?.slip.advice}</span>;
};

export default FortuneCookie;
