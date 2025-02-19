import ufvThumbnail from '../assets/ufv-thumbnail.png';
import jhrThumbnail from '../assets/jhr-thumbnail.png';
import cmlThumbnail from '../assets/cml-thumbnail.png';
import etcThumbnail from '../assets/etc-thumbnail.png';
import ProjectCard from "./projectCard"

export default function Projects(){

    const projectsData = [
        {
            projectTitle: "UFV Course Outline Finder",
            thumbnail: ufvThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "授業シラバスへのアクセスを素早くアクセスする為の Google Chrome 拡張機能",
            gitHubLink: "https://github.com/lyuhiroyama/UFV-Course-Outline-Finder"
        },
        {
            projectTitle: "japanhostelreviews.com",
            thumbnail: jhrThumbnail,
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "SQLite"],
            description: "国内ホステルの口コミサイト",
            gitHubLink: "https://github.com/lyuhiroyama/japanhostelreviews.com"
        },
        {
            projectTitle: "comandL.ai",
            thumbnail: cmlThumbnail,
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP"],
            description: "ChatGPTのChrome拡張機能版",
            gitHubLink: "https://github.com/lyuhiroyama/commandL.ai"
        },
        {
            projectTitle: "お絵かきボード",
            thumbnail: etcThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "マウスでなぞってお絵かきができるグリッド",
            gitHubLink: "https://github.com/lyuhiroyama/Etch-a-Sketch?tab=readme-ov-file"
        }
    ]

    return (
        <div className="projects-container">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    )
}