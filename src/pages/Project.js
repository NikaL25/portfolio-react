import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtbGitHub";
import { projects } from "../components/helpers/projectsList";
import img from "./../img/projects/02-big.jpg";


const Project = () => {
    const {id} = useParams();
    const project = projects[id];
    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>
              
             

                <img src={project.imgBig} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Stack: {project.skills}</p>
                </div>

                <a href={project.githubLink}>
                    View Project
                </a>
                
                {project.BtnGitHub && (
                    <BtnGitHub link={project.githubLink}/>
                )}

               
            </div>
        </div>
    </main>
      );
}
 
export default Project;