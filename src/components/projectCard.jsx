

export default function ProjectCard({projectTitle, technologies, description, githubLink}){
    return (
        <div className="projects-component">

            <div className="project-title">
                <h2>{projectTitle}</h2>
            </div>

            <div className="project-tech">
                {technologies.map(tech => (
                    <span className="technology>">{tech}</span>
                ))}
            </div>

            <div className="project-description">
                <p>{description}</p>
            </div>

            <div className="project-details">
                <button className="details-button">Details</button>
                {/* conditional rendering: */}
                {githubLink && (
                    <a href={githubLink} className="github-link">GitHub</a>
                )}
            </div>

        </div>
    )
}