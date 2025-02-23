import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome 使用のため
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Font Awesome GitHub icon
import prtThumbnail from '../assets/prt-thumbnail.png';
import ufvThumbnail from '../assets/ufv-thumbnail.png';
import jhrThumbnail from '../assets/jhr-thumbnail.png';
import cmlThumbnail from '../assets/cml-thumbnail.png';
import etcThumbnail from '../assets/etc-thumbnail.png';
import selfPhoto from '../assets/self-photo.png';
import ProjectCard from "./projectCard";

export default function Home(){

    const projectsData = [
        {
            projectTitle: "ポートフォリオ",
            thumbnail: prtThumbnail,
            technologies: ["React","JavaScript", "HTML", "SCSS"],
            description: "自身のポートフォリオ",
            buttonText: "プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/portfolio",
            projectLink: ""
        },
        {
            projectTitle: "UFV Course Outline Finder",
            thumbnail: ufvThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "授業シラバスへのアクセスを素早くアクセスする為の Google Chrome 拡張機能",
            buttonText: "プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/UFV-Course-Outline-Finder",
            projectLink: "https://chromewebstore.google.com/detail/ufv-course-outline-finder/mndjamfkhbpmaejlgmmmimpanhhhfkfd?hl=en"
        },
        {
            projectTitle: "CommandL.ai (開発中)",
            thumbnail: cmlThumbnail,
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP"],
            description: "ChatGPTのChrome拡張機能版",
            buttonText: "デモ動画を見る",
            gitHubLink: "https://github.com/lyuhiroyama/commandL.ai",
            projectLink: "https://www.youtube.com/watch?v=-w3hiKZFUD4"
        },
        {
            projectTitle: "japanhostelreviews.com (開発中)",
            thumbnail: jhrThumbnail,
            technologies: ["JavaScript", "HTML", "CSS", "jQuery", "PHP", "SQLite"],
            description: "国内ホステルの口コミサイト",
            buttonText: "開発中プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/japanhostelreviews.com",
            projectLink: "https://japanhostelreviews.com/"
        },
        {
            projectTitle: "お絵かきボード",
            thumbnail: etcThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: "マウスでなぞってお絵かきができるグリッド",
            buttonText: "プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/Etch-a-Sketch?tab=readme-ov-file",
            projectLink: "https://lyuhiroyama.github.io/Etch-a-Sketch/"
        }
    ]

    return (
        <div className='home-component'>
            <div className='home-top'>
                <div className='home-top-texts'>
                    <div className='name-kanji'>
                        廣山 龍
                        <a href="https://github.com/lyuhiroyama">
                            <FontAwesomeIcon className="github-icon-main" icon={faGithub} />
                        </a>
                    </div>
                    <div className='tech-list'>
                        <div><b>使用言語</b> : JavaScript・HTML・CSS・SCSS・React</div>
                        <div><b>使用テクノロジー</b> : Git・GitHub・Slack・Google Drive</div>
                    </div>
                </div>
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