import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroBox.css";

export type HeroBoxType = {
  className?: string;
};

const HeroBox: FunctionComponent<HeroBoxType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLetsConnectButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className={`hero-box ${className}`}>
      <img className="img-icon" loading="lazy" alt="" src="/img@2x.png" />
      <div className="hero-content">
        <div className="i-am-a-full-stack-developer-ba-parent">
          <div className="i-am-a">
            I am a Full Stack Developer based in Washington
          </div>
          <div className="lets-connect-button-parent">
            <button
              className="lets-connect-button"
              onClick={onLetsConnectButtonClick}
            >
            Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBox;
