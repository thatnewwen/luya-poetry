import React from 'react'
import { Link } from 'gatsby'
import logo from '../../static/luya-logo.png'
import '../styles/global.css'
import styles from './navigation.module.css'

import Container from './container'
import Navigation from './navigation'
import luyaIcon from '../../static/luya-icon.png'
import headerImage from '../../static/luya-header-min.png'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Parallax } from 'react-scroll-parallax'
import { Helmet } from 'react-helmet'

import downArrow from '../../static/down-arrow.png'
import cloud1 from '../../static/ulap01.png'
import cloud2 from '../../static/ulap02.png'
import cloud3 from '../../static/ulap03.png'
import cloud4 from '../../static/ulap04.png'
import cloud7 from '../../static/ulap07.png'
import cloud8 from '../../static/ulap08.png'
import cloud9 from '../../static/ulap09.png'
import cloud10 from '../../static/ulap10.png'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <div className="header-container">
          <img className="header-background" src={headerImage} />
          <Parallax className="cloud cloud1" y={[-100, 100]} tagOuter="figure">
            <img src={cloud1} />
          </Parallax>
          <Parallax className="cloud cloud2" y={[-100, 100]} tagOuter="figure">
            <img src={cloud2} />
          </Parallax>
          <Parallax className="cloud cloud3" y={[-100, 100]} tagOuter="figure">
            <img src={cloud3} />
          </Parallax>
          <Parallax className="cloud cloud4" y={[-100, 100]} tagOuter="figure">
            <img src={cloud4} />
          </Parallax>
          <Navigation />
          <ul id="myLinks">
            <li className={styles.navigationItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
          <div className="first-page">
            <img className="header-logo" src={logo} />
            <Parallax y={[-50, 50]} tagOuter="figure">
              <div className="logo-container">
                <h2>#21: Land</h2>
                <h3>Houseparty Edition</h3>
                <p>
                  What is your connection to the land? What do we take from it,
                  and what do we give back to nourish it? Centuries of violence
                  have severed many of our connections to land, displacing
                  indigenous people from ancestral lands, and forcing people to
                  leave and find homes in new lands. When land can be stolen,
                  divided, bought and sold on a whim, what becomes of its
                  people?{' '}
                </p>
              </div>
              <div className="post-section">
                <a href="#houseparty">
                  <p>JOIN US</p>
                </a>
                <a href="#houseparty">
                  <img className="down-arrow" alt="⬇" src={downArrow} />
                </a>
              </div>
            </Parallax>
          </div>
        </div>
      )
    } else {
      header = (
        <div className="page-header">
          <img src={logo} />
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          ></h3>
          <Navigation />
          <ul id="myLinks">
            <li className={styles.navigationItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.navigationItem}>
              <Link to="/blog/">Blog</Link>
            </li>
          </ul>
        </div>
      )
    }
    return (
      <ParallaxProvider>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <Helmet>
            <meta charSet="utf-8" />
            <title>Luya Poetry</title>
            <link rel="canonical" href="https://luyapoetry.com/" />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <meta property="og:title" content="Luya Poetry" />
            <meta property="og:url" content="https://luyapoetry.com/" />
            <meta property="og:image" content={luyaIcon} />
            <meta
              name="viewport"
              content="width=device-width, initial-scale = 1.0, maximum-scale=1.0"
            />
          </Helmet>
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            <Parallax className="cloud cloud7" y={[-50, 50]} tagOuter="figure">
              <img src={cloud7} />
            </Parallax>
            <Parallax
              className="cloud cloud8"
              y={[-100, 100]}
              tagOuter="figure"
            >
              <img src={cloud8} />
            </Parallax>
            <Parallax
              className="cloud cloud9"
              y={[-100, 100]}
              tagOuter="figure"
            >
              <img src={cloud9} />
            </Parallax>
            <Parallax
              className="cloud cloud10"
              y={[-100, 100]}
              tagOuter="figure"
            >
              <img src={cloud10} />
            </Parallax>
          </footer>
        </div>
      </ParallaxProvider>
    )
  }
}

export default Template
