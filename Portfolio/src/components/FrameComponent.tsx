import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BrandonMarriott from "./BrandonMarriott";
import NavBar from "./NavBar";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNavBarClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <header className={`brandon-marriott-container ${className}`}>
      <BrandonMarriott />
      <nav className="nav-bar-wrapper">
        <NavBar />
      </nav>
    </header>
  );
};

export default FrameComponent;
