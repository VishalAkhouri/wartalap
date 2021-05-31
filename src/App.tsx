import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import AppRouter from './components/app-router/appRouter';
import NavLinks from './components/nav-links/nav-links';
import {
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <BrowserRouter>
        <div  className="h-10">
          <Header></Header>
          <NavLinks></NavLinks>
        </div>

        <AppRouter></AppRouter>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
