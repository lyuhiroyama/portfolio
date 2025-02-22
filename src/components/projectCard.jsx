import { Fragment } from 'react'; // <> </> に属性を追加するため
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome 使用のため
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Font Awesome GitHub icon

export default function ProjectCard({
        projectTitle, thumbnail, technologies, description, buttonText, gitHubLink, projectLink
    }){

    return (
        <div className="projects-component">

            <div className="project-thumbnail-container">
                <a href={projectLink}>
                    <img src={thumbnail} alt={projectTitle} />
                </a>
            </div>
            <div className="project-content">

                <div className="project-title">
                    <h2>{projectTitle}</h2>
                </div>
                <div className="project-technologies">
                    <div>
                        {technologies.map((tech, index) => (
                            <Fragment key={index}>
                                <span>{tech}</span>
                                {index < technologies.length - 1 && " / "}
                            </Fragment>
                        ))}
                    </div>
                    <div className='github-div'>
                        <FontAwesomeIcon className="github-icon-projects" icon={faGithub} />
                        {/* conditional rendering: */}
                        {gitHubLink && (
                            <a href={gitHubLink} className="github-link">GitHub</a>
                        )}
                    </div>
                </div>
                <div className="project-description">
                    <p>{description}</p>
                </div>
                <div className="project-details-button">
                    <button onClick={() => window.location.href = projectLink}>{buttonText}</button>
                </div>

            </div>
        </div>
            
    )
}