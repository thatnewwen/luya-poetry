import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

class Navigation extends React.Component {
  myFunction() {
    var x = document.getElementById('myLinks')
    if (x.style.display === 'flex') {
      x.style.display = 'none'
    } else {
      x.style.display = 'flex'
    }
  }
  render() {
    return (
      <nav role="navigation">
        <ul id="desktopLinks" className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
        <a
          href="javascript:void(0);"
          className="icon"
          onClick={this.myFunction.bind(this)}
        >
          <i class="fa fa-bars"></i>
        </a>
      </nav>
    )
  }
}

export default Navigation
