import type { NextPage } from 'next'
import Head from 'next/head'
import Project_gallery from "../Components/Project_gallery";
import Script from 'next/script';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vdhorst | WIP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.cdnfonts.com/css/chakra-petch" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" strategy="beforeInteractive"/>
        <Script defer type="text/javascript" src="./js/frontpage.js" strategy="afterInteractive"/>

        <nav id="navbar" className="fixed top-0 bg-black h-10 z-10 w-screen opacity-0 fade-in">
          <div className="grid grid-cols-5 justify-center items-center gap-0 lg:mx-025 h-full">
            <h1 id="nav-about"
                className="self-center md:text-xs md:text-2xl text-white font-semiBold text-center opacity-0">ABOUT</h1>
            <h1 id="nav-projects"
                className="md:text-xs md:text-2xl text-white font-semiBold text-center opacity-0">PROJECTS</h1>
            <div className="flex justify-center self-center place-content-center">
              <img id="nav-logo" className="absolute z-20 w-28 h-28 top-0 opacity-0"
                   src="/images/logo.png"/>
            </div>
            <h1 id="nav-pictures"
                className="md:text-xs md:text-2xl  text-white font-semiBold text-center opacity-0">PICTURES</h1>
            <h1 id="nav-contact"
                className="md:text-xs md:text-2xl  text-white font-semiBold text-center opacity-0">CONTACT</h1>
          </div>
        </nav>

        <div className="h-full w-screen min-h-screen flex justify-center md:justify-start">
          <div className=" z-1 right-0 top-0 absolute invisible sm:visible">
            <img className="h-screen object-cover object-none object-center w-full"
                 src="/images/julian.jpg" />
          </div>
          <div className="bg-black welcomeDiv h-screen w-screen sm:w-6/10 absolute">
          </div>
          <div className="mt-20 md:ml-28 absolute text-center md:text-left ">
            <div className="w-full flex justify-center md:justify-start">
              <img id="welcome-logo" className="opacity-100 "
                   src="/images/logo.png"/>
            </div>
            <h1 className=" text-3xl lg:text-5xl text-primary mt-20 mb-0 font-semiBold text-center md:text-left">JULIAN VAN
              DER HORST</h1>
            <h1 className="text-4xl mt-2 font-semiBold text-white text-center md:text-left">DEVELOPER</h1>
            <h3 id="welcome-about"
                className="text-4xl text-white inline-block font-semiBold mt-32 relative opacity-100 text-center md:text-left">ABOUT</h3><br/>
            <h3 id="welcome-projects"
                className="text-4xl text-white inline-block font-semiBold mt-10 relative opacity-100 text-center md:text-left">PROJECTS</h3><br/>
            <h3 id="welcome-pictures"
                className="text-4xl text-white inline-block font-semiBold mt-10 relative opacity-100 text-center md:text-left">PICTURES</h3><br/>
            <h3 id="welcome-contact"
                className="text-4xl text-white inline-block font-semiBold mt-10 relative opacity-100 text-center md:text-left">CONTACT</h3>
          </div>
        </div>


        <div className="h-2/3 bg-white z-0 flex w-screen md:px-32 md:pt-10 flex-col">
          <h1 id={"scroll-about"} className="text-5xl text-black text-center mt-10 md:mt-0 justify-center mb-10 font-semiBold">About</h1>
          <div className="flex md:flex-row flex-col justify-center mx-20">
            <div className="justify-center md:justify-end w-full md:w-1/2">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1 className="text-5xl text-black font-semiBold">Hi, I'm Julian van der Horst</h1>
              <h2 className="text-2xl text-black mt-2">A fourth year Computing science student in Nijmegen, The
                Netherlands</h2>
              <p className="text-xl text-black mt-5">I enjoy creating all kinds of projects ranging from drinking games
                to well...
                drinking games. In a more serious note my hobbies are numerous and I hope this website is a place where
                all of these hobbies can have a place.
                So please do feel free to discover all of my weird 3D printer projects, my online drinking games,
                my analog photography or one of my other equally awesome projects.
              </p>
              <p className="text-xl text-black mt-3">Enjoy!</p>
            </div>
            <div className="justify-center md:justify-end">
              <img src="/images/julian-grey.png"/>
            </div>
          </div>
        </div>
        <Project_gallery/>
        <h1 id={"scroll-pictures"} className="text-5xl text-black text-center mt-10 md:mt-0 justify-center mb-10 font-semiBold">Pictures</h1>
        <h1 id={"scroll-contact"} className="text-5xl text-black text-center mt-10 md:mt-0 justify-center mb-10 font-semiBold">Contact</h1>

      </main>
    </div>
  )
}

export default Home
