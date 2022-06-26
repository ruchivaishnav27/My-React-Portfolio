import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
  const {
    languages = [],
    setCurrentLanguage,
    footerSelected,
    currentLanguage,
    setFooterSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentLanguage.name);
  }, [currentLanguage]);

  return (
    <header className="nav-1">
      <h2>
        <a data-testid="link" href="/">
          Hello There!
        </a>
      </h2>
      <nav>
        <ul className="nav-2">
          <li className="nav-3">
            <a data-testid="header" href="#header" onClick={() => setFooterSelected(false)}>
              About Me
            </a>
          </li>
          <li className={`nav-3 ${footerSelected && 'navigationActive'}`}>
            <span onClick={() => setFooterSelected(true)}>Contact</span>
          </li>
          {languages.map((languages) => (
            <li
              className={`nav-4 ${
                currentLanguage.name === languages.name && !footerSelected && 'navigationActive'
                }`}
              key={languages.name}
            >
              <span
                onClick={() => {
                  setCurrentLanguage(languages);
                  setFooterSelected(false);
                }}
              >
                {capitalizeFirstLetter(languages.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
