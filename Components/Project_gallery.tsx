import React from "react";
import Project from "./Project";

function Project_gallery(): JSX.Element {
    return (
        <div className={"flex flex-col bg-primary w-screen justify-center py-10"}>
            <h1 className={"text-4xl text-white text-center justify-center mb-10 font-semiBold"}>Recent projects</h1>
            <div className={"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-10"}>
                <Project project_name={"Centurion website"} project_link={"vdhorst.dev"} project_description={""+
                "This is my first web app project. It's an online drinking game called centurion. " +
                "This web app includes and chat and reconnecting capabilities. " +
                "The formatting could use some work but I decided it was fine for now. " +
                "This was build using Django and Javascript."} icon={"music_note"} project_image_link={"centurion.png"}/>
            </div>
        </div>
    );
}

export default Project_gallery;