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
        <div className={"flex flex-col bg-white justify-center py-10 mx-32"}>
            <h1 className={"text-4xl text-black text-center justify-center mb-10 font-semiBold"}>Recent projects</h1>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-10"}>
                {
                    <Create_gallery/>
                }
            </div>
        </div>
    );
}

export default Project_gallery;