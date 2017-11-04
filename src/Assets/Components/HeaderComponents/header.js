import React, { Component } from 'react';
import {  Link } from 'react-router';


class Header extends Component {
  render() {
    return (
    <header >
        <div className="logo">
        LOGO
        </div>
            <nav>
            <ul>
              <li className="first">
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#"> Articles </a>
              </li>
              <li>

                <a href="#"> Contact </a>
              </li>
              <li className="last">
                <a href="ta"> About </a>
              </li>
            </ul>
            </nav>
    </header >
    );
  }
}

export default Header;
