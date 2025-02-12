import React from 'react';
import WhatIsCreativity from '../components/WhatIsCreativity';
import TypesOfCreativity from '../components/TypesOfCreativity';
import BoostCreativity from '../components/BoostCreativity';
import FamousCreatives from '../components/FamousCreatives';
import Resources from '../components/Resources';

const Section = () => {
  return (
    <main>
      <WhatIsCreativity />
      <TypesOfCreativity />
      <BoostCreativity />
      <FamousCreatives />
      <Resources />
    </main>
  );
};

export default Section;