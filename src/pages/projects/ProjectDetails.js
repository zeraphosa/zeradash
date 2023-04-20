import { useParams } from "react-router-dom"

export default function ProjectDetails(){
    const {projectName} = useParams();
    return(
        <div>
            <h1>{projectName}</h1>
            <p>This page is for {projectName}.</p>
        </div>
    )
}