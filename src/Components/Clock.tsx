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
    <div>
      <span className="bold font-size-8">{hour}</span>
      <div className="font-size-3">{data.toUpperCase()}</div>
    </div>
  );
};

export default Clock;
