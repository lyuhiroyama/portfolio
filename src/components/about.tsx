import ExperienceCard from "./experienceCard";
import React, { Fragment } from 'react'; 

export default function About(){
    
    const experienceData = [
        {
            title: "株式会社 PLAY&co",
            titleDate: "Oct 2023 - Now",
            isAnimated: true,
            description: "ホステル運営会社のシステム部署にて勤務 ",
            subSecTitle: "業務例",
            keyList: [
                "自動議事録生成 & Slack通知ボットの開発",
                "清掃済み部屋・共用エリアの追跡ツール作成",
                "CSVアップロードの受信・追記・保存スクリプト作成",
                "末チェックインゲストのデータをシステムから抽出",
                "現場でのフロント・清掃業務にも従事"
            ],
            keyListLang: ["(GAS・Slack API)", "(GAS)", "(GAS)", "(Python・Selenium)"],
            techList: ["Google Apps Script", "JavaScript", "HTML", "CSS", "Python", "Selenium"]
        },
        {
            title: "University of the Fraser Valley",
            titleDate: "Jan 2022 - June 2023",
            isAnimated: false,
            description: "Computer Information Systems certificate プログラムを卒業",
            subSecTitle: "履修科目・課外活動",
            keyList: [
                "コンピューティングの原理",
                "プログラミング入門",
                "ウェブパブリッシング",
                "情報システム設計",
                "マルチメディアとコミュニケーション入門",
                "微積分１",
                "統計学入門",
                "Computing Students Association の代表委員",
                <>
                    <a 
                    href="https://chromewebstore.google.com/detail/ufv-course-outline-finder/mndjamfkhbpmaejlgmmmimpanhhhfkfd?hl=en" 
                    style={{ 
                        textDecoration: "none",
                        color: "green",
                        fontWeight: "bold"
                    }}
                    >UFV Course Outline Finder</a>を開発
                </>

            ],
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