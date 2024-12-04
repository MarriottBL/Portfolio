import { FunctionComponent } from "react";
import "./Image1.css";

export type Image1Type = {
  className?: string;
};

const Image1: FunctionComponent<Image1Type> = ({ className = "" }) => {
  return (
    <section className={`image-container ${className}`}>
      <div className="card">
        <a href="https://marriottbl.github.io/Landin-Page/" target="_blank" rel="noopener noreferrer">
          <img
            className="card-image"
            loading="lazy"
            alt="landing page"
            src="/img-card@2x.png"
          />
        </a>
        <div className="card-title">
          <h3>Ecommerce Landing Page</h3>
        </div>
        <div className="card-description">
          This is a customizable e-commerce landing page template originally
          designed for Tropical Baking Sweets. It features a clean layout with
          a header, social links, image gallery, and a "View Code" button
          linking to GitHub. The template is versatile and can be adapted for
          various projects.
        </div>
        <div className="button-container">
          <a href="https://github.com/MarriottBL/Landin-Page" target="_blank" rel="noopener noreferrer">
            <div className="button">
              <div>View Code</div>
            </div>
          </a>
        </div>
      </div>
      <div className="card">
        <a href="https://marriottbl.github.io/metalfriends/" target="_blank" rel="noopener noreferrer">
          <img className="card-image" alt="friends" src="/img-card-1@2x.png" />
        </a>
        <div className="card-title">
          <h3>Ecommerce Landing Page</h3>
        </div>
        <div className="card-description">
          This is a customizable e-commerce landing page template originally
          designed for Tropical Baking Sweets. It features a clean layout with
          a header, social links, image gallery, and a "View Code" button
          linking to GitHub. The template is versatile and can be adapted for
          various projects.
        </div>
        <div className="button-container">
          <a href="https://github.com/MarriottBL/metalfriends" target="_blank" rel="noopener noreferrer">
            <div className="button">
              <div>View Code</div>
            </div>
          </a>
        </div>
      </div>
      <div className="card">
        <a href="https://marriottbl.github.io/background-generator/" target="_blank" rel="noopener noreferrer">
          <img className="card-image large-image" alt="background generator" src="/img-card-2@2x.png" />
        </a>
        <div className="card-title">
          <h3>Ecommerce Landing Page</h3>
        </div>
        <div className="card-description">
          This is a customizable e-commerce landing page template originally
          designed for Tropical Baking Sweets. It features a clean layout with
          a header, social links, image gallery, and a "View Code" button
          linking to GitHub. The template is versatile and can be adapted for
          various projects.
        </div>
        <div className="button-container">
          <a href="https://github.com/MarriottBL/background-generator" target="_blank" rel="noopener noreferrer">
            <div className="button">
              <div>View Code</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Image1;
