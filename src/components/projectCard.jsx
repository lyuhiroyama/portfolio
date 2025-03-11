import { useState, useEffect } from "react";
import { Fragment } from "react"; // <> </> に属性を追加するため
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome 使用のため
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Font Awesome GitHub icon
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function ProjectCard({
    projectTitle,
    thumbnail,
    technologies,
    description,
    buttonText,
    gitHubLink,
    projectLink,
    votes,
}) {
    const [voteCount, setVoteCount] = useState(votes);
    const [hasVoted, setHasVoted] = useState(false);

    const fetchVoteCount = async () => {
        const response = await fetch(
            "http://localhost/portfolio_react/backend/get_votes.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    project_id: projectTitle
                }),
            }
        );
        const data = await response.json();
        if (data.success) {
            setVoteCount(data.votes);
            setHasVoted(data.hasVoted);
        }
    }

    const handleUpVote = async () => {
        if (hasVoted) return;

        try { 
            // for testing: http://localhost/portfolio_react/backend/handle_votes.php
            // for deployment: http://ryuhiroyama.com/backend/handle_votes.php
            const response = await fetch(
                "http://localhost/portfolio_react/backend/handle_votes.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        project_id: projectTitle,
                    }),
                }
            );

            // デバッグ用
            const responseText = await response.text();
            console.log("Raw server response:", responseText);

            try {
                const data = JSON.parse(responseText);
                console.log("Parsed response:", data);

                if (data.success) {
                    setVoteCount(data.votes);
                    setHasVoted(true);
                } else {
                    console.error("投票に失敗しました:", data.message);
                }
            } catch (parseError) {
                console.error(
                    "Server returned non-JSON response:",
                    responseText
                );
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    useEffect(() => {
        fetchVoteCount();
    }, []);

    return (
        <div className="projects-component">
            <div className="projects-sub-component-1">
                <div className="voting-container">
                    <button
                        onClick={handleUpVote}
                        disabled={hasVoted}
                        className={`vote-button ${hasVoted ? "voted" : ""}`}
                    >
                        <FontAwesomeIcon icon={faCaretUp} />
                    </button>
                    <div className={`vote-count ${hasVoted ? 'voted' : ''}`}>
                        {voteCount}
                    </div>
                </div>
            </div>
            <div className="projects-sub-component-2">
                <div className="project-thumbnail-container">
                    <a href={projectLink}>
                        <img src={thumbnail} alt={projectTitle} />
                    </a>
                </div>
                <div className="project-content">
                    <div className="project-title">
                        <h2>{projectTitle}</h2>
                        <div className="voting-container-mobile">
                            <button
                                onClick={handleUpVote}
                                disabled={hasVoted}
                                className={`vote-button ${
                                    hasVoted ? "voted" : ""
                                }`}
                            >
                                <FontAwesomeIcon icon={faCaretUp} />
                            </button>
                            <div 
                                className={`vote-count ${hasVoted ? 'voted' : ''}`}
                            >
                                {voteCount}
                            </div>
                        </div>
                    </div>
                    <div className="project-technologies">
                        <div>
                            {technologies.map((tech, index) => (
                                <Fragment key={index}>
                                    <span>{tech}</span>
                                    {index < technologies.length - 1 && " / "}
                                </Fragment>
                            ))}
                        </div>
                        <div className="github-div">
                            <FontAwesomeIcon
                                className="github-icon-projects"
                                icon={faGithub}
                            />
                            {/* conditional rendering: */}
                            {gitHubLink && (
                                <a href={gitHubLink} className="github-link">
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="project-description">
                        <p>{description}</p>
                    </div>
                    <div className="project-details-button">
                        <button
                            onClick={() => (window.location.href = projectLink)}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
