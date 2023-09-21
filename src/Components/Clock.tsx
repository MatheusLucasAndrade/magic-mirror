import { useEffect, useState } from "react";
import FormatDate from "../Common/FormatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons/Icons";

const clock = <FontAwesomeIcon icon={icons.clock} shake />;
const calendar = <FontAwesomeIcon icon={icons.calendarDays} />;

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
        <span className="font-size-2">{clock}</span>
        <div className="bold font-size-6">{hour}</div>
      </li>
      <li className="font-size-2">
        <span>{calendar}</span>
        {data.toUpperCase()}
      </li>
    </ul>
  );
};

export default Clock;
