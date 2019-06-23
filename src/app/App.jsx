import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import SpeakersPage from './pages/SpeakersPage';
import Schedule from './pages/Schedule';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/speakers" component={SpeakersPage} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
