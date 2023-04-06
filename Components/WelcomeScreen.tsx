import React, {FunctionComponent} from 'react';

interface OwnProps {}

type Props = OwnProps;

const WelcomeScreen: FunctionComponent<Props> = (_) => {
  return (
      <div className="h-full w-screen min-h-screen flex justify-center md:justify-start">
          <div className=" z-1 right-0 top-0 absolute invisible sm:visible">
              <img className="h-screen object-cover object-none object-center w-full"
                   src="/images/julian.jpg" alt={"Picture of Julian van der Horst"}/>
          </div>
          <div className="bg-black z-0 welcomeDiv h-screen w-screen sm:w-6/10 absolute">
              <div className={"h-full w-screen absolute flex justify-center"}>
                  <div className={"container flex justify-center h-full"}>
                      <div className={"flex justify-center md:justify-start w-full h-full"}>
                          <div className={"mt-20 absolute z-10 text-center md:text-left"}>
                              <div className="w-full flex justify-center md:justify-start">
                                  <img id="welcome-logo" className="opacity-100 "
                                       src="/images/logo.png" alt={"vdhorst logo"}/>
                              </div>
                              <h1 className=" text-3xl lg:text-5xl text-primary mt-20 mb-0 font-semiBold text-center md:text-left">JULIAN
                                  VAN
                                  DER HORST</h1>
                              <h1 className="text-4xl mt-2 font-semiBold text-white text-center md:text-left">DEVELOPER</h1>
                              <h3 id="welcome-about"
                                  className="text-4xl text-white inline-block font-semiBold mt-32 relative opacity-100 text-center md:text-left">ABOUT</h3>
                              <br/>
                              <h3 id="welcome-projects"
                                  className="text-4xl text-white inline-block font-semiBold mt-10 relative opacity-100 text-center md:text-left">PROJECTS</h3>
                              <br/>
                              <h3 id="welcome-cv"
                                  className="text-4xl text-white inline-block font-semiBold mt-10 relative opacity-100 text-center md:text-left">CV</h3>
                              <br/>
                              <h3 id="welcome-contact"
                                  className="text-4xl text-white inline-block font-semiBold mt-10 relative opacity-100 text-center md:text-left">CONTACT</h3>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>);
};

export default WelcomeScreen;
