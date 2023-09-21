import Clock from "../Components/Clock";
import Weather from "../Components/Weather";

const Home = () => {
  return (
    <>
      <div className="container-top">
        <Clock />
        <Weather />
      </div>
    </>
  );
};

export default Home;
