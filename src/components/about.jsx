import ExperienceCard from "./experienceCard.jsx";

export default function About(){
    
    const experienceData = [
        {
            title: "株式会社 PLAY&co",
            titleDate: "Oct 2023 - Now",
            description: "ホステル運営会社のシステム部署にてアルバイトとして勤務 ",
            subSecTitle: "業務例",
            keyList: [
                "GASとSlack APIを活用し、自動議事録生成 & Slack通知ボットの開発",
                "GASを活用した定期清掃済み部屋・館内エリアの追跡ツールの作成",
                "スプレッドシートの数式・コードを活用し、財務管理に使用するツールの開発",
                "ユーザーからのCSVアップロードを受信・追記・保存するGASスクリプトを作成 (文字化けエラーに対応機能の実装を含む)"
            ],
            techList: ["Google Apps Script", "JavaScript", "HTML", "CSS", "Python"]
        },
        {
            title: "University of the Fraser Valley",
            titleDate: "Jan 2022 - June 2023",
            description: "Computer Information Systems certificate プログラムを卒業",
            subSecTitle: "修得授業・課外活動",
            keyList: [
                "コンピューティングの原理",
                "プログラミング入門",
                "ウェブパブリッシング",
                "情報システム設計",
                "マルチメディアとコミュニケーション入門",
                "微積分１",
                "統計学入門",
                "Computing Students Association の代表委員"
            ],
            techList: ["Assembly", "JavaScript", "jQuery", "HTML", "CSS", "Python"]
        }
    ]
    
    return (
        <div className="about-component">
            <div className="about-container">
                <div>Relevant Experience</div>
                {experienceData.map((experience, index) => (
                    <ExperienceCard key={index} {...experience} />
                ))}
            </div>
        </div>
    )
}