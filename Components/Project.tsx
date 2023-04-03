// @ts-ignore
import React from "react";
// @ts-ignore
import { Icon } from '@material-ui/core';
import { project } from "../Types/Project";


interface Props {
    project: project
}
function Project(prop: Props): JSX.Element {

    let image = '/images/projects/' + prop.project.project_image_link
    return (
        <div className={"flex flex-col bg-white rounded-md w-full filter drop-shadow-lg"} >
            <div className={"rounded-md h-1/2"}>
                <img className={"object-cover rounded-t-md h-56"} src={image}/>
            </div>
            <div className={"p-10 text-center h-full flex flex-col justify-between"}>
                <div>
                <Icon fontSize={"large"}>{prop.project.icon}</Icon>
                <h2 className={"text-xl text-black font-semiBold"}>{prop.project.project_name}</h2>
                </div>
                <p className={"text-lg text-black text-left my-3"}>{prop.project.project_description}</p>
                <button className={"bg-primary rounded-full mt-5 md:w-1/2 lg:w-1/3 self-center h-10 hover:bg-primary-active"}>
                    <a className={"text-center text-white m-5 font-semiBold"} href={prop.project.project_link}>Check it out</a>
                </button>
            </div>
        </div>
    );
}

export default Project;
