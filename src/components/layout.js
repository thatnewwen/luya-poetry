import React from "react";
import { Link } from "gatsby";
import logo from "../../content/assets/luya-logo.png";
import headerImage from "../../content/assets/luya-header.png";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import cloud1 from "../../content/assets/ulap01.png";
import cloud2 from "../../content/assets/ulap02.png";
import cloud3 from "../../content/assets/ulap03.png";
import cloud4 from "../../content/assets/ulap04.png";
import cloud7 from "../../content/assets/ulap07.png";
import cloud8 from "../../content/assets/ulap08.png";
import cloud9 from "../../content/assets/ulap09.png";
import cloud10 from "../../content/assets/ulap10.png";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <div className="header-container">
        <img className="header-background" src={headerImage} />
        <Parallax className="cloud cloud1" y={[-50, 50]} tagOuter="figure">
          <img src={cloud1} />
        </Parallax>
        <Parallax className="cloud cloud2" y={[-50, 50]} tagOuter="figure">
          <img src={cloud2} />
        </Parallax>
        <Parallax className="cloud cloud3" y={[-50, 50]} tagOuter="figure">
          <img src={cloud3} />
        </Parallax>
        <Parallax className="cloud cloud4" y={[-50, 50]} tagOuter="figure">
          <img src={cloud4} />
        </Parallax>
        <div className="first-page">
          <img className="header-logo" src={logo} />
          <div className="logo-container">
            <h2>#20: See You Soon</h2>
            <h3>Houseparty Edition</h3>
            <p>
              This month we meditate on the endpoints we are looking forward to,
              the inherent uncertainty of our anticipation, and the surprises we
              didn’t know we were hoping for.{" "}
            </p>
          </div>
          <div className="post-section">
            <a href="#houseparty">
              <p>JOIN US</p>
            </a>
            <a href="#houseparty">
              <p>⬇</p>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <ParallaxProvider>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <Parallax className="cloud cloud7" y={[-30, 30]} tagOuter="figure">
            <img src={cloud7} />
          </Parallax>
          <Parallax className="cloud cloud8" y={[-30, 30]} tagOuter="figure">
            <img src={cloud8} />
          </Parallax>
          <Parallax className="cloud cloud9" y={[-30, 30]} tagOuter="figure">
            <img src={cloud9} />
          </Parallax>
          <Parallax className="cloud cloud10" y={[-30, 30]} tagOuter="figure">
            <img src={cloud10} />
          </Parallax>
        </footer>
      </div>
    </ParallaxProvider>
  );
};

export default Layout;
