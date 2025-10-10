import ExperienceCard from "./experienceCard";
import React, { Fragment } from 'react'; 
import { useTranslation } from 'react-i18next';

export default function About(){
    const { t } = useTranslation();
    
    const experienceData = [
        {
            title: t("expTitlePlay&co"),
            titleDate: "Oct 2023 - Present",
            isAnimated: true,
            description: t("expDescPlay&co"),
            subSecTitle: t("expSubSecTitlePlay&co"),
            keyList: t("expKeyListPlay&co", { returnObjects: true }) as string[],
            keyListLang: t("expKeyListLangPlay&co", { returnObjects: true }) as string[],
            techList: ["Google Apps Script", "JavaScript", "HTML", "CSS"]
        },
        {
            title: t("expTitleUfv"),
            titleDate: "Jan 2022 - June 2023",
            isAnimated: false,
            description: t("expDescUfv"),
            subSecTitle: t("expSubSecTitleUfv"),
            keyList: t("expKeyListUfv", { returnObjects: true }) as string[],
            keyListLang: [],
            techList: ["Assembly", "JavaScript", "jQuery", "HTML", "CSS", "Python"]
        }
    ]
    
    return (
        <div className="about-component">
            <div className="about-container">
                <div style={{fontSize: "1.3rem"}}>Relevant Experience</div>

                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </div>
    )
}