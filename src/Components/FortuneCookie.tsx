import { useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";
import Loading from "./Loading";

interface IMessages {
  frases: {
    [key: string]: {
      texto: string;
    };
  };
}

const apiUrl = import.meta.env.VITE_REACT_APP_FORTUNE_COOKIE;

const FortuneCookie = () => {
  const [messages, setMessages] = useState<IMessages>();
  const { data, loading } = useFetch<IMessages>(apiUrl);

  useEffect(() => {
    if (data) {
      setMessages(data);
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {messages &&
        Object.keys(messages.frases).map((key) => {
          const message = messages.frases[key];

          return (
            <div key={key}>
              <ul>
                <li className="color-1">
                  <p className="font-size-2">{message.texto}</p>
                </li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default FortuneCookie;
