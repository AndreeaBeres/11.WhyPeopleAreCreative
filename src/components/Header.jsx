import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Unleashing Your Creative Potential</h1>
      <nav aria-label="Main navigation">
        <ul>
          <li><a href="#what-is-creativity" aria-label="Learn what is creativity">What is Creativity?</a></li>
          <li><a href="#types-of-creativity" aria-label="Explore types of creativity">Types of Creativity</a></li>
          <li><a href="#boost-creativity" aria-label="Learn how to boost creativity">How to Boost Creativity</a></li>
          <li><a href="#famous-creatives" aria-label="Read about famous creative people">Famous Creative People</a></li>
          <li><a href="#resources" aria-label="Access creativity resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;