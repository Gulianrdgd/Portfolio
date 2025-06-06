    import type {NextPage} from 'next'
    import Head from 'next/head'
    import Project_gallery from "../components/Project_gallery";
    import React from "react";
    import NavBar from "../components/NavBar";
    import WelcomeScreen from "../components/WelcomeScreen";
    import dynamic from "next/dynamic";

    const CV = dynamic(() => import("../components/CV"), {
        ssr: false
    });

    const Home: NextPage = () => {
        return (
            <>
            <Head>
                <title>Vdhorst | Portfolio </title>
                <link rel="icon" href="/favicon.ico"/>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
                <main>
                    <NavBar />

                    <WelcomeScreen />

                    <div className={"w-screen flex justify-center"}>
                        <div className="h-2/3 bg-white z-0 flex container md:pt-10 flex-col">
                            <h1 id={"scroll-about"}
                                className="text-5xl text-black text-center mt-10 md:mt-0 mb-10 font-semiBold">About</h1>
                            <div className="flex md:flex-row flex-col justify-center mx-10 md:mx-0">
                                <div className="self-center justify-center w-full md:w-1/2">
                                    <h1 className="text-5xl text-black font-semiBold">Hi, I&apos;m Julian van der Horst</h1>
                                    <h2 className="text-2xl text-black mt-2">A software developer in
                                        Nijmegen, The
                                        Netherlands</h2>
                                    <p className="text-xl text-black mt-5">I recently completed my Computing Science degree and now work as a software developer.
                                        I enjoy creating all kinds of projects ranging from AI-powered applications to
                                        self-hosted infrastructure solutions. My work consists mostly of prototyping new AI solutions, managing infrastructure
                                        and full-stack development. I am always exploring new technologies and ways to solve problems through code.
                                    </p>
                                    <p className="text-xl text-black mt-5">I have many hobbies and I hope this
                                        website is a place where
                                        all of these hobbies can have a place.
                                        So please do feel free to discover all of my projects on this website
                                    </p>
                                    <p className="text-xl text-black mt-3">Enjoy!</p>
                                </div>
                                <div className="flex md:justify-end justify-center self-center w-full md:w-1/2">
                                    <img src={"/images/julian-grey-cutdown.png"} alt={"Grey image of Julian van der Horst"}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Project_gallery/>
                    <div className={"mb-10 mt-10 md:mt-0 "}>
                        <h1 id={"scroll-cv"}
                            className="text-5xl text-black text-center justify-center mb-10 font-semiBold">CV</h1>
                        <CV />
                    </div>
                    <h1 id={"scroll-contact"}
                        className="text-5xl text-black text-center mt-10 md:mt-0 justify-center mb-10 font-semiBold">Contact</h1>
                    <div className={"flex justify-center h-64"}>
                        <p className={"text-xl font-semiBold text-center self-center"}>Coming soon...</p>
                    </div>
                </main>
            </> )
    }

    export default Home
