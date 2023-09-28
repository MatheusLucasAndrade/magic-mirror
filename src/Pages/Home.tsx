import Clock from "../Components/Clock";
import CoinValue from "../Components/CoinValue";
import FortuneCookie from "../Components/FortuneCookie";
import News from "../Components/News";
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
      <div className="container-bottom">
        <News />
      </div>
    </>
  );
};

export default Home;
