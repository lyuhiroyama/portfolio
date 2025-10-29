import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub, faLinkedin, faMedium, faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import snrThumbnail from '../assets/snr-thumbnail.png';
import prtThumbnail from '../assets/prt-thumbnail.png';
import ufvThumbnail from '../assets/ufv-thumbnail.png';
import selfPhoto from '../assets/self-photo.png';
import ProjectCard from "./projectCard";

export default function Home(){
    const { t } = useTranslation();

    const projectsData = [
        {
            projectTitle: "sets-n-reps.com",
            thumbnail: snrThumbnail,
            technologies: ["TypeScript", "React", "Ruby on Rails", "PostgreSQL", "VPS"],
            description: t("projectDescSetsNReps"),
            buttonText: t("buttonText"),
            gitHubLink: "https://github.com/lyuhiroyama/sets-n-reps?tab=readme-ov-file",
            youtubeLink: "https://www.youtube.com/watch?v=a8TEfTkuYi0",
            youtubeText: t("watchDemo"),
            projectLink: "https://sets-n-reps.com",
            votes: 0
        },
        {
            projectTitle: t("projectTitlePortfolio"),
            thumbnail: prtThumbnail,
            technologies: ["TypeScript", "React", "PHP", "MySQL", "VPS"],
            description: t("projectDescPortfolio"),
            buttonText: t("buttonText"),
            gitHubLink: "https://github.com/lyuhiroyama/portfolio",
            youtubeLink: "",
            youtubeText: "",
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
            youtubeLink: "",
            youtubeText: "",
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
                        <div className='home-icons-container'>
                            <a href="https://github.com/lyuhiroyama">
                                <FontAwesomeIcon className="home-icons" icon={faGithub} />
                            </a>
                            <a href="https://medium.com/@lyuhiroyama">
                                <FontAwesomeIcon className="home-icons" icon={faMedium} />
                            </a>
                            <a href="https://x.com/leejaxas">
                                <FontAwesomeIcon className="home-icons" icon={faXTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/in/ryu-hiroyama-168436157/">
                                <FontAwesomeIcon className="home-icons" icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className='tech-list'>
                        <div><b>{t("languages")}</b> TypeScript・JavaScript・Ruby・Shell</div>
                        <div><b>{t("technologies")}</b> React・Ruby on Rails・CSS・Git・VPS</div>
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
