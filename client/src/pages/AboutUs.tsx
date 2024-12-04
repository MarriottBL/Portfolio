import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BrandonMarriott from "../components/BrandonMarriott";
import NavBar from "../components/NavBar";
import "./AboutUs.css";

const AboutUs: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBrandonMarriottContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="container">
      <header className="header-group">
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
      <footer className="content-wrapper">
        <h1 className="title">About Us</h1>
        <section className="content">
          <img
            className="image"
            loading="lazy"
            alt=""
            src="/frame-16@2x.png"
          />
          <div className="description">
            I am Brandon Marriott, a versatile and driven software engineer with a robust foundation in technology, leadership, and problem-solving. My professional journey encompasses various industries, highlighted by a decade of service in the U.S. Navy, where I cultivated exceptional organizational and technical expertise, led teams, and ensured mission-critical outcomes.
            My transition into software engineering has been significantly enhanced by my completion of the Zero to Mastery Bootcamp, during which I acquired comprehensive skills in web development. Furthermore, I gained practical experience as a contractor at Microsoft in the Azure division, where I addressed complex projects related to government identity solutions, enhanced security protocols, and improved system uptime.
            Currently, I specialize in the development of full-stack applications utilizing technologies such as React, Node.js, MongoDB, and cloud services including Azure and Amazon S3. My recent projects encompass the creation of an eCommerce landing page with real-time data integration and a stock prediction tool that employs artificial intelligence to optimize investment strategies. In addition, I have engaged in freelancing to provide innovative solutions aimed at fostering business growth.
            Beyond my technology expertise, I possess a diverse background in real estate investment and property management, which enables me to blend analytical skills with entrepreneurial vision. My objective is to leverage my unique skill set to develop impactful solutions that effectively address real-world challenges.
          </div>
        </section>
      </footer>
    </div>
  );
};

export default AboutUs;
