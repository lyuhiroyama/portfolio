import ExperienceCard from "./experienceCard";
import { useTranslation } from 'react-i18next';

export default function Experience(){
    const { t } = useTranslation();
    
    const experienceData = [
        {
            title: t("expTitlePlay&co"),
            titleDate: t("expTitleDatePlay&co"),
            isAnimated: true,
            description: t("expDescPlay&co"),
            subSecTitle: t("expSubSecTitlePlay&co"),
            keyList: t("expKeyListPlay&co", { returnObjects: true }) as string[],
            keyListLang: t("expKeyListLangPlay&co", { returnObjects: true }) as string[],
            techList: ["Google Apps Script", "JavaScript", "HTML", "CSS"]
        },
        {
            title: t("expTitleUfv"),
            titleDate: t("expTitleDateUfv"),
            isAnimated: false,
            description: t("expDescUfv"),
            subSecTitle: t("expSubSecTitleUfv"),
            keyList: t("expKeyListUfv", { returnObjects: true }) as string[],
            keyListLang: [],
            techList: ["Assembly", "JavaScript", "jQuery", "HTML", "CSS", "Python"]
        }
    ]
    
    return (
        <div className="experience-component">
            <div className="experience-container">
                <div style={{fontSize: "1.3rem"}}>{t("expTitleMain")}</div>

                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </div>
    )
}