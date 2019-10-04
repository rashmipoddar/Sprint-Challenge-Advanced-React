import React from 'react';

import useDarkMode from '../hooks/useDarkMode';

const NavBar = () => {
  const [ darkMode, setDarkMode ] = useDarkMode();

  const toggle = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
    <nav className="navbar">
      <h1>Women's World Cup Player Ranks</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggle}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );

}

export default NavBar;