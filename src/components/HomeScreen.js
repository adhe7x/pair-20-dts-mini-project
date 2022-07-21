import * as React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Rows from './Rows';
import Footer from './Footer';

function HomeScreen() {
  return (
    <div>
            <Navbar />
            <Banner />
            <Rows />
            <Footer />
    </div>
  );
}

export default HomeScreen;
