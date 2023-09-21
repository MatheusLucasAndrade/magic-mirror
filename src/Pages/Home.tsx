import Clock from "../Components/Clock";
import FortuneCookie from "../Components/FortuneCookie";
import Weather from "../Components/Weather";

const Home = () => {
  return (
    <>
      <div className="container-top">
        <Clock />
        <Weather />
      </div>
      <div className="container-middle">
        <FortuneCookie />
      </div>
    </>
  );
};

export default Home;
