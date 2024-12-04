import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export type NavBarType = {
  className?: string;

  /** Style props */
  navBarWidth?: CSSProperties["width"];
  navBarHeight?: CSSProperties["height"];
  projectsHeight?: CSSProperties["height"];
  projectsWidth?: CSSProperties["width"];
  aboutUsHeight?: CSSProperties["height"];
  aboutUsWidth?: CSSProperties["width"];
  contactHeight?: CSSProperties["height"];
  contactWidth?: CSSProperties["width"];
};

const NavBar: FunctionComponent<NavBarType> = ({
  className = "",
  navBarWidth,
  navBarHeight,
  projectsHeight,
  projectsWidth,
  aboutUsHeight,
  aboutUsWidth,
  contactHeight,
  contactWidth,
}) => {
  const navBarStyle: CSSProperties = useMemo(() => {
    return {
      width: navBarWidth,
      height: navBarHeight,
    };
  }, [navBarWidth, navBarHeight]);

  const projectsStyle: CSSProperties = useMemo(() => {
    return {
      height: projectsHeight,
      width: projectsWidth,
    };
  }, [projectsHeight, projectsWidth]);

  const aboutUsStyle: CSSProperties = useMemo(() => {
    return {
      height: aboutUsHeight,
      width: aboutUsWidth,
    };
  }, [aboutUsHeight, aboutUsWidth]);

  const contactStyle: CSSProperties = useMemo(() => {
    return {
      height: contactHeight,
      width: contactWidth,
    };
  }, [contactHeight, contactWidth]);

  const navigate = useNavigate();

  const onProjectsTextClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <nav
      className={`nav-bar ${className}`}
      style={navBarStyle}
    >
      <a
        className="projects2"
        onClick={onProjectsTextClick}
        style={projectsStyle}
      >
        Projects
      </a>
      <a
        className="about-us2"
        onClick={onAboutUsTextClick}
        style={aboutUsStyle}
      >
        About Us
      </a>
      <a
        className="contact1"
        onClick={onContactTextClick}
        style={contactStyle}
      >
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
