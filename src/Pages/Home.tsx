import Clock from "../Components/Clock";
import CoinValue from "../Components/CoinValue";
import FortuneCookie from "../Components/FortuneCookie";
import Weather from "../Components/Weather";

const Home = () => {
  return (
    <>
      <div className="container container-top">
        <Clock />
        <Weather />
      </div>
      <div className="container">
        <FortuneCookie />
        <CoinValue />
      </div>
    </>
  );
};

export default Home;
