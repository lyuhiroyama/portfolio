import { Fragment } from 'react'; // <> </> に属性を追加するため

export default function ExperienceCard(
    {title, titleDate, description, subSecTitle, keyList, techList}
) {

    return (
        <div className="experience-component">
            <div className="timeline-marker">
                <div className="timeline-circle"></div>
                <div className="timeline-line"></div>
            </div>
            <div className="experience-div">
                <div className="experience-title-div">
                    <div className='experience-title'>{title}</div>
                    <div className='experience-date'>{titleDate}</div>
                </div>
                <div className="main-description">{description}</div>
                <div className="sub-section-title">{subSecTitle}</div>
                <ul className="key-list">
                    {keyList.map(key => (
                        <li>{key}</li>
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