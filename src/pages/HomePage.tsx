import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import HeroBox from "../components/HeroBox";
import "./HomePage.css";

const HomePage: FunctionComponent = () => {
  return (
    <div className="homepage">
      <FrameComponent />
      <HeroBox />
    </div>
  );
};

export default HomePage;
