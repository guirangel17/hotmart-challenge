import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import OrangeBanner from './components/OrangeBanner/OrangeBanner';
import Footer from './components/Footer/Footer';
import Lecturers from './components/Lecturers/Lecturers';

library.add(fab);

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <OrangeBanner/>
        </header>
        <section>
          <Lecturers/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
      
    );
  }
}

export default App;
