import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import PageNotFound from './Pages/PageNotFound';


const NavRoutes = () => {
  return (
    <Routes>
      <Route exact path='/ciscutie' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
export default NavRoutes;
