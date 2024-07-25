import { React, useState } from 'react';

import {
  Buttons,
  Footer,
  Navbar,
  SessionData,
  SessionType,
  StudentObs,
} from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <SessionType />
      <StudentObs />
      <SessionData />
      <Buttons />
      <Footer />
    </div>
  );
};

export default App;
