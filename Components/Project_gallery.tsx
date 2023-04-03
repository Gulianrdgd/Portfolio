import React from "react";
import {projects} from "../_projects";
import Project from "./Project";


function Create_gallery(): JSX.Element {
    const arr = [];
    for(let i=0; i<projects.length; i++){
        arr.push(
            <Project key={"project-" +i} project={projects[i]}/>
        )
    }
    return <>{arr}</>;
}

function Project_gallery(): JSX.Element {
    return (
        <div className={"w-screen flex justify-center"}>
        <div className={"flex flex-col bg-white container justify-center py-10"}>
            <h1 id={"scroll-projects"} className={"text-5xl text-black text-center justify-center mb-10 font-semiBold"}>Projects</h1>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-10 md:mx-0"}>
                {
                    <Create_gallery/>
                }
            </div>
        </div>
        </div>
    );
}

export default Project_gallery;
