import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import prtThumbnail from '../assets/prt-thumbnail.png';
import ufvThumbnail from '../assets/ufv-thumbnail.png';
import jhrThumbnail from '../assets/jhr-thumbnail.png';
import cmlThumbnail from '../assets/cml-thumbnail.png';
import selfPhoto from '../assets/self-photo.png';
import ProjectCard from "./projectCard";

export default function Home(){
    const { t } = useTranslation();

    const projectsData = [
        {
            projectTitle: t("projectTitlePortfolio"),
            thumbnail: prtThumbnail,
            technologies: ["React", "PHP", "MySQL", "SCSS", "VPS"],
            description: t("projectDescPortfolio"),
            buttonText: t("buttonText"),
            gitHubLink: "https://github.com/lyuhiroyama/portfolio",
            projectLink: "",
            votes: 0
        },
        {
            projectTitle: "UFV Course Outline Finder",
            thumbnail: ufvThumbnail,
            technologies: ["JavaScript", "HTML", "CSS"],
            description: <>
                {t("projectDescUfv")}
                <br/>
                <b>{t("projectDescUfvUserCount")}</b>
            </>,
            buttonText: t("buttonText"),
            gitHubLink: "https://github.com/lyuhiroyama/UFV-Course-Outline-Finder",
            projectLink: "https://chromewebstore.google.com/detail/ufv-course-outline-finder/mndjamfkhbpmaejlgmmmimpanhhhfkfd?hl=en",
            votes: 0
        }
    ]

    return (
        <div className='home-component'>
            <div className='home-top'>
                <div className='home-top-texts'>
                    <div className='name-kanji'>
                        {t("name")}
                        <a href="https://github.com/lyuhiroyama">
                            <FontAwesomeIcon className="home-icons" icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/ryu-h-168436157/">
                            <FontAwesomeIcon className="home-icons" icon={faLinkedin} />
                        </a>
                    </div>
                    <div className='tech-list'>
                        <div><b>{t("languages")}</b> TypeScript・Ruby・SQL</div>
                        <div><b>{t("technologies")}</b> React・SCSS・MySQL・Git・VPS</div>
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