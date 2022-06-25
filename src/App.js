import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [languages] = useState([
    { name: 'HTML', description: 'Film Advisor, Passion Project, Company Website, Personal Website' },
    { name: 'CSS', description: 'Film Advisor, Passion Project, Company Website, Personal Website' },
    { name: 'JavaScript', description: 'Film Advisor, Passion Project, Password Generator, Coding Quiz, Workday Scheduler, Weather Dashboard' },
    { name: 'Node.js', description: 'Professional README Generator' },
    { name: 'Express.js', description: 'Note Taker' },
    { name: 'MySQL', description: 'Employee Tracker' }
  ]);

  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const [footerSelected, setFooterSelected] = useState(false);

  return (
    <div>
      <Navigation
        languages={languages}
        setCurrentLanguage={setCurrentLanguage}
        currentLanguage={currentLanguage}
        footerSelected={footerSelected}
        setFooterSelected={setFooterSelected}
      ></Navigation>
      <main>
        {!footerSelected ? (
          <>
            <Project currentLanguage={currentLanguage}></Project>
            <Header></Header>
          </>
        ) : (
          <Footer></Footer>
        )}
      </main>
    </div>
  );
}

export default App;
