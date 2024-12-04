import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BrandonMarriott from "../components/BrandonMarriott";
import NavBar from "../components/NavBar";
import Image1 from "../components/Image1";
import "./Projects.css";

const Projects: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBrandonMarriottContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavBarClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className="projects">
      <header className="main">
        <BrandonMarriott
          onBrandonMarriottContainerClick={onBrandonMarriottContainerClick}
          brandonMarriottMargin="0"
          brandonMarriottFontWeight="400"
          brandonMarriottHeight="4.563rem"
          brandonMarriottWidth="15.25rem"
          brandonMarriottPadding="0rem 0rem var(--padding-16xl)"
          brandonMarriottHeight1="2.375rem"
          brandonMarriottWidth1="15.313rem"
          brandonMarriottFontSize="32px"
        />
        <NavBar
          navBarWidth="24.125rem"
          navBarHeight="1.875rem"
          projectsHeight="3.375rem"
          projectsWidth="5.5rem"
          aboutUsHeight="3.375rem"
          aboutUsWidth="unset"
          contactHeight="3.375rem"
          contactWidth="unset"
        />
      </header>
      <main className="projects-parent">
        <h1 className="projects1">Projects</h1>
        <Image1 />
      </main>
    </div>
  );
};

export default Projects;
