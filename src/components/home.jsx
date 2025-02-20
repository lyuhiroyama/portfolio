import ufvThumbnail from '../assets/ufv-thumbnail.png';
import jhrThumbnail from '../assets/jhr-thumbnail.png';
import cmlThumbnail from '../assets/cml-thumbnail.png';
import etcThumbnail from '../assets/etc-thumbnail.png';
import selfPhoto from '../assets/self-photo.png';
import ProjectCard from "./projectCard";

export default function Home(){

    const projectsData = [
        {
            projectTitle: "UFV Course Outline Finder",
            thumbnail: ufvThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "授業シラバスへのアクセスを素早くアクセスする為の Google Chrome 拡張機能",
            gitHubLink: "https://github.com/lyuhiroyama/UFV-Course-Outline-Finder",
            projectLink: "https://chromewebstore.google.com/detail/ufv-course-outline-finder/mndjamfkhbpmaejlgmmmimpanhhhfkfd?hl=en"
        },
        {
            projectTitle: "japanhostelreviews.com",
            thumbnail: jhrThumbnail,
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "SQLite"],
            description: "国内ホステルの口コミサイト",
            gitHubLink: "https://github.com/lyuhiroyama/japanhostelreviews.com",
            projectLink: "https://japanhostelreviews.com/"
        },
        {
            projectTitle: "comandL.ai",
            thumbnail: cmlThumbnail,
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP"],
            description: "ChatGPTのChrome拡張機能版",
            gitHubLink: "https://github.com/lyuhiroyama/commandL.ai",
            projectLink: ""
        },
        {
            projectTitle: "お絵かきボード",
            thumbnail: etcThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "マウスでなぞってお絵かきができるグリッド",
            gitHubLink: "https://github.com/lyuhiroyama/Etch-a-Sketch?tab=readme-ov-file",
            projectLink: "https://lyuhiroyama.github.io/Etch-a-Sketch/"
        }
    ]

    return (
        <div className='home-component'>
            <div className='home-top'>

                <img src={selfPhoto} className="headshot" alt="headshot"></img>
            </div>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}