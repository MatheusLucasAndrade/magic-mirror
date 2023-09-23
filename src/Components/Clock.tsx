import { useEffect, useState } from "react";
import FormatDate from "../Common/FormatDate";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { data, hour } = FormatDate(currentTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ul>
      <li>
        <div className="bold font-size-8">{hour}</div>
      </li>
      <li className="font-size-3">{data.toUpperCase()}</li>
    </ul>
  );
};

export default Clock;
