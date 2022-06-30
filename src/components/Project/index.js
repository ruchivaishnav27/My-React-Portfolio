import React, { useState } from 'react';

const Projects = ({ language }) => {

  const [projects] = useState([
    {
      name: 'Film Advisor',
      language: 'HTML, CSS, and JavaScript',
      description:
        'A database where one can review a movie and view reviews of other movies.'
    },
    {
      name: 'My Company Website',
      language: 'HTML and CSS',
      description:
        'A website that allows my company to be viewed on a global platform and highlights what it can provide to its customers.'
    },
    {
      name: 'My Portfolio',
      language: 'HTML and CSS',
      description:
        'A simpler version of my portfolio, demonstrating the coding languages that I have learnt.'
    },
    {
      name: 'Secure Your Info',
      language: 'JavaScript',
      description:
        'A website that will generate a secure password for those who need one for protecting any sensitive information.'
    },
    {
      name: 'Get It, Got It, Code It',
      language: 'JavaScript',
      description:
        'A website that provides a quiz on coding so you can test your knowledge of initial coding concepts.'
    },
    {
      name: 'The Day Ahead',
      language: 'JavaScript',
      description:
        'A website that displays a daily schedule where one can keep track of the events in their day.'
    },
    {
      name: 'Whats the Weather?',
      language: 'JavaScript',
      description:
        'A website that gives a five-day weather forcast of any city in the world.'
    },
    {
      name: 'Create Me A README',
      language: 'Node.js',
      description:
        'An application that generates a ReadMe file.'
    },
    {
      name: 'Take A Note',
      language: 'Express.js',
      description:
        'An application where one can take and save notes on a digital platform.'
    },
    {
      name: 'My Companys Employee Tracker',
      language: 'MySQL',
      description:
        'An application that lets a company keep track of their employees.'
    }
  ]);
};