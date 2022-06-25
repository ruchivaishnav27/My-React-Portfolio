import React, { useState } from 'react';

function Footer() {
  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <label htmlFor="github">GitHub:</label>
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn:</label>
        </div>
      </form>
    </section>
  );
};

export default Footer;
