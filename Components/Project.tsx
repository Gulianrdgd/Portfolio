// @ts-ignore
import React from "react";
// @ts-ignore
import { Icon } from '@material-ui/core';

interface Props {
    icon: string,
    project_name: string,
    project_description: string,
    project_link: string,
    project_image_link: string
}
function Project(prop: Props): JSX.Element {

    let image = '/images/projects/' + prop.project_image_link
    return (
        <div className={"flex flex-col bg-white rounded-md transform w-full hover:scale-105 transition-all"} >
            <div className={"rounded-md h-1/2"}>
                <img className={"object-cover rounded-t-md h-56 "} src={image}/>
            </div>
            <div className={"p-10 text-center"}>
                <Icon fontSize={"large"}>{prop.icon}</Icon>
                <h2 className={"text-xl text-black font-semiBold"}>{prop.project_name}</h2>
                <p className={"text-lg text-black text-left mt-3"}>{prop.project_description}</p>
                <button className={"bg-primary rounded-full mt-5 h-10 transform hover:scale-110 transition-all"}>
                    <a className={"text-center text-white m-5 font-semiBold"} href={prop.project_link}>Check it out</a>
                </button>
            </div>
        </div>
    );
}

export default Project;