import { useState, useEffect } from "react";
import { Fragment, ReactNode } from "react"; // <> </> に属性を追加するため
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Font Awesome 使用のため
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"; // Font Awesome GitHub icon
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
    projectTitle: string;
    thumbnail: string;
    technologies: string[];
    description: string | ReactNode;
    buttonText: string;
    gitHubLink: string;
    youtubeLink: string;
    youtubeText: string,
    projectLink: string;
    votes: number;
}


export default function ProjectCard({
    projectTitle,
    thumbnail,
    technologies,
    description,
    buttonText,
    youtubeLink,
    youtubeText,
    gitHubLink,
    projectLink,
    votes,
}: ProjectCardProps ) {
    const [voteCount, setVoteCount] = useState(votes);
    const [hasVoted, setHasVoted] = useState(false);

    const fetchVoteCount = async () => {
        // for testing: http://localhost/portfolio_react/backend/get_votes.php
        // for deployment: https://ryuhiroyama.com/backend/get_votes.php
        const response = await fetch(
            "https://ryuhiroyama.com/backend/get_votes.php",
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
            // for deployment: https://ryuhiroyama.com/backend/handle_votes.php
            const response = await fetch(
                "https://ryuhiroyama.com/backend/handle_votes.php",
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
                    <div className="project-technologies-github-yt-container">
                        <div className="project-technologies-div">
                            {technologies.map((tech, index) => (
                                <Fragment key={index}>
                                    <span>{tech}</span>
                                    {index < technologies.length - 1 && " / "}
                                </Fragment>
                            ))}
                        </div>
                        {gitHubLink && (
                            <div className="github-yt-div">
                                <FontAwesomeIcon
                                    className="github-yt-icon-projects"
                                    icon={faGithub}
                                />
                                <a href={gitHubLink} className="github-yt-link">
                                    GitHub
                                </a>
                            </div>
                        )}
                        {youtubeLink && (
                            <div className="github-yt-div">
                                <FontAwesomeIcon
                                    className="github-yt-icon-projects"
                                    icon={faYoutube}
                                />
                                <a href={youtubeLink} className="github-yt-link">
                                    {youtubeText}
                                </a>
                            </div>
                        )}
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
