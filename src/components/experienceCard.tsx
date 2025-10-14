import { Fragment, ReactNode } from "react"; // <> </> に属性を追加するため
import { useTranslation } from "react-i18next";

interface ExperienceCardProps {
    title: string;
    titleDate: string;
    isAnimated: boolean;
    description: string;
    subSecTitle: string;
    keyList: ReactNode[];
    keyListLang: string[];
    techList: string[];
}

export default function ExperienceCard({
    title,
    titleDate,
    isAnimated,
    description,
    subSecTitle,
    keyList,
    keyListLang,
    techList,
}: ExperienceCardProps){

    const { t } = useTranslation();

    return (
        <div className="experienceCard-component">
            <div className="timeline-marker">
                <div
                    className={`timeline-circle ${
                        isAnimated ? "is-animated" : ""
                    }`}
                ></div>
                <div className="timeline-line"></div>
            </div>
            <div className="experienceCard-div">
                <div className="experienceCard-title-div">
                    <div className="experienceCard-title">{title}</div>
                    <div className="experienceCard-date">{titleDate}</div>
                </div>
                <div className="main-description">{description}</div>
                <div className="sub-section-title">{subSecTitle}</div>
                <ul className="key-list-ul">
                    {keyList.map((key, index) => (
                        <li>
                            <div className="key-list-line">{key}</div>
                            <div className="key-list-parentheses">{keyListLang[index]}</div>
                        </li>
                    ))}
                </ul>
                <div className="tech-list">
                    <strong>{t('languages')}{" "}</strong>
                    {techList.map((tech, index) => (
                        <Fragment key={index}>
                            <span>{tech}</span>
                            {index < techList.length - 1 && " / "}
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
