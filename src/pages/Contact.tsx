import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BrandonMarriott from "../components/BrandonMarriott";
import NavBar from "../components/NavBar";
import EmailFrame from "../components/EmailFrame";
import "./Contact.css";

const Contact: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBrandonMarriottContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavBarClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onProjectsTextClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="contact">
      <header className="header">
        <BrandonMarriott
          onBrandonMarriottContainerClick={onBrandonMarriottContainerClick}
          brandonMarriottMargin="unset"
          brandonMarriottFontWeight="unset"
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
      <main className="main-content">
        <h1 className="title-container">
          <span>Let's talk</span>
          <span className="highlight-text"> about how can I help.</span>
        </h1>
        <div className="form-container">
          <EmailFrame />
        </div>
        <a href="https://www.linkedin.com/in/marriott-brandon/" target="_blank" rel="noopener noreferrer">
          <img
            className="icon icon-linkedin"
            loading="lazy"
            alt="LinkedIn"
            src="/linkedin.svg"
          />
        </a>
        <a href="https://github.com/MarriottBL" target="_blank" rel="noopener noreferrer">
          <img
            className="icon icon-github"
            loading="lazy"
            alt="GitHub"
            src="/github.svg"
          />
        </a>
      </main>
    </div>
  );
};

export default Contact;
