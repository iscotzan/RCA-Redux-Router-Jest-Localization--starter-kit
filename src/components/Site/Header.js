// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import LanguageToggle from '../../common/LanguageSelector'
const Header = () => {
  return (
    <div className="site-header">
      <img src={logo} className="site-logo" alt="logo" />
      <h2>Welcome to React</h2>
      <ul className="site-nav">
        <li><LanguageToggle /></li>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>
  );
};

export default Header;
