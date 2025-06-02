import React from 'react';

function NavBar() {
  return (
      <nav id="navbar" className="fixed top-0 bg-black h-10 z-10 w-screen opacity-0 fade-in">
        <div className="grid grid-cols-5 justify-center items-center gap-0 lg:mx-025 h-full">
          <h1 id="nav-about"
              className="self-center md:text-2xl text-white font-semiBold text-center opacity-0">ABOUT</h1>
          <h1 id="nav-projects"
              className="md:text-2xl text-white font-semiBold text-center opacity-0">PROJECTS</h1>
          <div className="flex justify-center self-center place-content-center">
            <img id="nav-logo" className="absolute z-10 w-16 h-16 md:w-28 md:h-28 top-0 opacity-0"
                 src="/images/logo.png" alt="vdhorst logo"/>
          </div>
          <h1 id="nav-cv"
              className="md:text-2xl text-white font-semiBold text-center opacity-0">CV</h1>
          <h1 id="nav-contact"
              className="md:text-2xl text-white font-semiBold text-center opacity-0">CONTACT</h1>
        </div>
      </nav>
  );
}

export default NavBar;