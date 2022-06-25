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
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Hello There!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="header" href="#header" onClick={() => setFooterSelected(false)}>
              About Me
            </a>
          </li>
          <li className={`mx-2 ${footerSelected && 'navigationActive'}`}>
            <span onClick={() => setFooterSelected(true)}>Contact</span>
          </li>
          {languages.map((languages) => (
            <li
              className={`mx-1 ${
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
