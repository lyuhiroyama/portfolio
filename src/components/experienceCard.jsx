import { Fragment } from 'react'; // <> </> に属性を追加するため

export default function ExperienceCard(
    {title, titleDate, isAnimated, description, subSecTitle, keyList, keyListLang, techList}
) {

    return (
        <div className="experience-component">
            <div className="timeline-marker">
                <div className={`timeline-circle ${isAnimated ? 'is-animated' : ''}`}></div>
                <div className="timeline-line"></div>
            </div>
            <div className="experience-div">
                <div className="experience-title-div">
                    <div className='experience-title'>{title}</div>
                    <div className='experience-date'>{titleDate}</div>
                </div>
                <div className="main-description">{description}</div>
                <div className="sub-section-title">{subSecTitle}</div>
                <ul className="key-list-ul">
                    {keyList.map((key, index) => (
                        <li>
                            <div className='key-list-line'>{key}</div>
                            <div>{keyListLang[index]}</div>
                        </li>
                    ))}
                </ul>
                <div className="tech-list">
                    使用言語:  {
                        techList.map((tech, index) => (
                            <Fragment key={index}>
                                <span>{tech}</span>
                                {index < techList.length - 1 && " / "}
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}