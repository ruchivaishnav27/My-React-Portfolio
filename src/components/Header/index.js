import React from 'react';
import coverImage from '../../assets/images/cover-image';
function Header() {
  return (
    <section className="hd-1">
      <h1 id="header">Ruchi Vaishnav</h1>
      <img src={coverImage} className="hd-2" style={{ width: "100%" }} alt="cover" />
      <div className="hd-2">
        <p>
        I am a creative individual who has a crazy knack for colors.  I have had five years of professional experience accros various professions including Journalist, Sales Associate, and Inventory Specialst.  After much struggle I had decided to shift gears and pursue my dream career as a Front End Web Developer with minor experience in Back End Web Development as well as other Web Applications.                  My goal is to fulfill all of the requirements that are needed in order to become a successful Front End Web Developer at a well-renowed company.  To prepare for this career I have completed an online Coding Boot Camp through the University of Connecticut. Below is a snapshot of my work that I have created through this Boot Camp and a few projects of my own.
        </p>
      </div>
    </section>
  );
}

export default Header;
