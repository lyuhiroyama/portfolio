import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Font Awesome 使用のため
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Font Awesome GitHub icon
import prtThumbnail from '../assets/prt-thumbnail.png';
import ufvThumbnail from '../assets/ufv-thumbnail.png';
import jhrThumbnail from '../assets/jhr-thumbnail.png';
import cmlThumbnail from '../assets/cml-thumbnail.png';
import selfPhoto from '../assets/self-photo.png';
import ProjectCard from "./projectCard";

export default function Home(){

    const projectsData = [
        {
            projectTitle: "ポートフォリオ",
            thumbnail: prtThumbnail,
            technologies: ["React", "PHP", "MySQL", "SCSS", "VPS"],
            description: "自身のポートフォリオサイト",
            buttonText: "プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/portfolio",
            projectLink: "",
            votes: 0
        },
        {
            projectTitle: "UFV Course Outline Finder",
            thumbnail: ufvThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: <>
                授業シラバスを素早くアクセスする為の Google Chrome Extension アプリ
                <br/>
                <b>（ユーザー数：20~30人）</b>
            </>,
            buttonText: "プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/UFV-Course-Outline-Finder",
            projectLink: "https://chromewebstore.google.com/detail/ufv-course-outline-finder/mndjamfkhbpmaejlgmmmimpanhhhfkfd?hl=en",
            votes: 0
        },
        {
            projectTitle: "CommandL.ai",
            thumbnail: cmlThumbnail,
            technologies: ["jQuery", "PHP"],
            description: "AIチャット Google Chrome Extension アプリ",
            buttonText: "デモ動画を見る",
            gitHubLink: "https://github.com/lyuhiroyama/commandL.ai",
            projectLink: "https://www.youtube.com/watch?v=-w3hiKZFUD4",
            votes: 0
        },
        {
            projectTitle: "japanhostelreviews.com",
            thumbnail: jhrThumbnail,
            technologies: ["jQuery", "PHP", "SQLite", "VPS"],
            description: "国内ホステルの口コミサイト",
            buttonText: "開発中プロジェクトを見る",
            gitHubLink: "https://github.com/lyuhiroyama/japanhostelreviews.com",
            projectLink: "https://japanhostelreviews.com/",
            votes: 0
        }
    ]

    return (
        <div className='home-component'>
            <div className='home-top'>
                <div className='home-top-texts'>
                    <div className='name-kanji'>
                        廣山 龍
                        <a href="https://github.com/lyuhiroyama">
                            <FontAwesomeIcon className="home-icons" icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/ryu-h-168436157/">
                            <FontAwesomeIcon className="home-icons" icon={faLinkedin} />
                        </a>
                    </div>
                    <div className='tech-list'>
                        <div><b>使用言語 :</b> React・PHP・MySQL・ JavaScript・HTML・CSS・SCSS</div>
                        <div><b>使用テクノロジー :</b> Git・GitHub・VPS</div>
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