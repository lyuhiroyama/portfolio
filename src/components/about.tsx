import Dropdown from "./dropdown";
import castlePosePhoto from "../assets/about-image.jpeg";
import { useTranslation } from "react-i18next";

export default function About() {
    const { i18n, t } = useTranslation();

    return (
        <div className="about-component">
            <div className="about-container">
                <div className="main-div">
                    <div className="castlePhotoContainer">
                        <img 
                            className="castlePosePhoto"
                            src={castlePosePhoto} 
                            alt="Author posing infront of Fukuoka Castle">
                        </img>
                        {/* 
                        <p className="castlePosePhoto-text">
                            {t("aboutComp.castleImgText1")}
                            <a 
                                className="karatsu-castle-link"
                                href={t("aboutComp.castleImgLink")} 
                                target="_blank" 
                                rel="noopener noreferrer">
                                {t("aboutComp.castleImgText2")}
                            </a>
                            {t("aboutComp.castleImgText3")}
                        </p>
                        */}

                    </div>
                    <div className="main-text">
                        <h3>こんにちは！</h3>
                        <p>    
                            {t("aboutComp.mainText.intro1")}
                            <b>{t("aboutComp.mainText.intro1Bold1")}</b>
                            {t("aboutComp.mainText.intro1Part2")}
                            <b>{t("aboutComp.mainText.intro1Bold2")}</b>
                            {t("aboutComp.mainText.intro1End")}
                        </p>

                        <p>
                            {t("aboutComp.mainText.intro2")}
                            <b>{t("aboutComp.mainText.intro2Bold1")}</b>
                            {t("aboutComp.mainText.intro2Part2")}
                            <b>{t("aboutComp.mainText.intro2Bold2")}</b>
                            {t("aboutComp.mainText.intro2Part3")}
                            <b>{t("aboutComp.mainText.intro2Bold3")}</b>
                            {t("aboutComp.mainText.intro2End")}
                        </p>
                        <p>
                            {t("aboutComp.mainText.intro3")}
                            <b>{t("aboutComp.mainText.intro3Bold1")}</b>
                            {t("aboutComp.mainText.intro3Part2")}
                            <b>{t("aboutComp.mainText.intro3Bold2")}</b>
                            {t("aboutComp.mainText.intro3Part3")}
                            <b>{t("aboutComp.mainText.intro3Bold3")}</b>
                            {t("aboutComp.mainText.intro3Part4")}
                            <b>{t("aboutComp.mainText.intro3Bold4")}</b>
                            {t("aboutComp.mainText.intro3End")}
                        </p>

                        <p id="free-time-p">{t("aboutComp.mainText.freeTimeHeader")}</p>
                        <ul id="free-time-ul">
                            <li>{t("aboutComp.mainText.freeTime1")}</li>
                            <li>{t("aboutComp.mainText.freeTime2")}</li>
                            <li>{t("aboutComp.mainText.freeTime3")}</li>
                        </ul>
                    </div>
                </div>
                
                <div className="dropdown-container">
                    <h3 id="faq-header">FAQ:</h3>
                    {i18n.language === "en" && ( <>
                        <Dropdown
                            question={i18n.language === "en" 
                                ? "What got you into coding?"
                                : "プログラミングを始めたきっかけは？"
                            }
                            answer={i18n.language === "en" ? (
                            <>
                                It was <a id="yt-clip-1" href="https://www.youtube.com/clip/UgkxfSU5WTSHJBCoJR2djyAWtkTRgWlU2O-W?si=inOAEfzYBYFtVphU" target="_blank" rel="noopener noreferrer">a series</a> <a id="yt-clip-2" href="https://www.youtube.com/clip/UgkxXLVVdQiQm4iatysdnYb8AjcnM33fkthO?si=pBYsjSHIV3OY_FKm" target="_blank" rel="noopener noreferrer">of videos</a> <a id="yt-clip-3" href="https://www.youtube.com/clip/UgkxY3Qv7ZwyZD18mfVYoszQBpl0MP6Xsqg-?si=L2nbz7rObD5fqCHF" target="_blank" rel="noopener noreferrer">like these</a> that I happened to find sometime during the summer of 2021. 
                                <br/><br/>
                                I felt very intrigued and inspired, which basically led me to try out some coding in <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp</a>, a free tutorial website (I did have some prior experience with HTML/CSS from high school). 
                                <br/><br/>
                                I then went on to study that field at the University of the Fraser Valley, coding both in and outside of class.
                            </>
                            ) : (
                                <>
                                    2021年の夏頃に<a id="yt-clip-1" href="https://www.youtube.com/clip/UgkxfSU5WTSHJBCoJR2djyAWtkTRgWlU2O-W?si=inOAEfzYBYFtVphU" target="_blank" rel="noopener noreferrer">偶然見つけた</a><a id="yt-clip-2" href="https://www.youtube.com/clip/UgkxXLVVdQiQm4iatysdnYb8AjcnM33fkthO?si=pBYsjSHIV3OY_FKm" target="_blank" rel="noopener noreferrer">一連の</a><a id="yt-clip-3" href="https://www.youtube.com/clip/UgkxY3Qv7ZwyZD18mfVYoszQBpl0MP6Xsqg-?si=L2nbz7rObD5fqCHF" target="_blank" rel="noopener noreferrer">動画など</a>がきっかけでした。
                                    <br/><br/>
                                    とても興味を持ち、刺激を受けたので、無料のチュートリアルサイトである<a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp</a>でコーディングを試してみました（ ※ 高校時代にHTML/CSSの経験は少しありました）。
                                    <br/><br/>
                                    その後、フレーザーバレー大学でその分野を学び、授業内外でもコーディングを続けました。
                                </>
                            )}
                        />
                        <Dropdown
                            question={i18n.language === "en"
                                ? "What do you enjoy about coding? Why this profession?"
                                : "プログラミングの何が楽しい？なぜこの職業？"
                            }
                            answer={i18n.language === "en" ? (
                                <>
                                    I think a lot of things. In no specific order:
                                    <br/>
                                    <ul>
                                        <li>
                                            <a href="https://nav.al/product-media#:~:text=An%20army%20of%20robots%20is%20already%20here.%20It%E2%80%99s%20very%20cheaply%20available.%20The%20bottleneck%20is%20just%20figuring%20out%20intelligent%20and%20interesting%20things%20to%20do%20to%20them" target="_blank" rel="noopener noreferrer">The idea of using code to command an army of robots</a> is deeply captivating.
                                        </li>
                                        <li>
                                            The not knowing of what's possible. 
                                        </li>
                                        <li>
                                            Watching myself do something I didn't know I could do.
                                        </li>
                                        <li>
                                            I happen to genuinely enjoy it for the sake of it.
                                        </li>
                                    </ul>
                                    But ultimately, it's what I find myself doing. And so it was naturally fitting that I pursue this as a career!
                                </>
                            ) : (
                                <>
                                    色々あります。順不同ですが：
                                    <br/>
                                    <ul>
                                        <li>
                                            <a href="https://nav.al/product-media#:~:text=An%20army%20of%20robots%20is%20already%20here.%20It%E2%80%99s%20very%20cheaply%20available.%20The%20bottleneck%20is%20just%20figuring%20out%20intelligent%20and%20interesting%20things%20to%20do%20to%20them" target="_blank" rel="noopener noreferrer">コードでロボットの軍団をコマンドするという発想</a>の魅力
                                        </li>
                                        <li>
                                            何が可能なのか分からないところ
                                        </li>
                                        <li>
                                            自分ができると思っていなかったことをやること
                                        </li>
                                        <li>
                                            単純に楽しい
                                        </li>
                                    </ul>

                                    といった流れで自然にこの職に惹かれました！
                                </>
                            )}
                        />
                    </>)}
                    <Dropdown
                        question={i18n.language === "en"
                            ? "How do you approach learning a new technology?"
                            : "新しい技術をどのように学びますか？"
                        }
                        answer={i18n.language === "en" ? (
                            <>
                                I approach it differently depending on:
                                <ul>
                                    <li>How deep I want to, or need to go in understanding the underlying details.</li>
                                    <li>How time-sensitive it is.</li>
                                </ul>
                                I generally prefer to really get into the <a href="https://cuddly-sunflower-42d.notion.site/Ruby-on-Rails-0-1e9828fc96918009bd35f972ab38500c" target="_blank" rel="noopener noreferrer">details of things</a>, but if it's time-sensitive I won't get too deep into it.
                                <br/>
                                <br/>
                                If it involves anything safety critical that I can't mess up, then that is also another big consideration.
                                <br/>
                                I then take measures (e.g. preparing test environments, understanding the effects of running certain processes beforehand), while also minding how much time is being spent.
                            </>
                        ) : (
                            <>
                                状況によって異なりますが、以下の点を考慮します：
                                <ul>
                                    <li>基礎知識をどれだけ深く理解する必要があるか</li>
                                    <li>どれだけ時間があるか</li>
                                </ul>
                                基本的には<a href="https://cuddly-sunflower-42d.notion.site/Ruby-on-Rails-0-1e9828fc96918009bd35f972ab38500c" target="_blank" rel="noopener noreferrer">奥深く</a>学ぶことが好きですが、時間が限られている場合は深入りしないようにします。
                                <br/>
                                <br/>
                                ミスができないような重要な作業の場合は、それも大きな考慮ポイントです。
                                <br/>
                                その場合は、時間配分に気を張りながら、テスト環境の準備・実行するコードなどの影響を事前に理解するなどの対策を取ります。
                            </>
                        )}
                    />
                    <Dropdown
                            question={i18n.language === "en"
                                ? "How do you stay up to date with new technology?"
                                : "新しい技術の情報をどうやって得ていますか？"
                            }
                            answer={i18n.language === "en" ? (
                                <>
                                    <a href="https://x.com/leejaxas" target="_blank" rel="noopener noreferrer">X (Twitter)</a>, Youtube, meetup events, and sometimes  <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">Hacker News</a>
                                </>
                            ) : (
                                <>
                                    主に <a href="https://x.com/leejaxas" target="_blank" rel="noopener noreferrer">X (Twitter)</a>、Youtube、イベントなどで情報収集しています。<a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">Hacker News</a>も時々チェックします。
                                </>
                            )}
                        />
                    {/* <Dropdown
                        question={i18n.language === "en"
                            ? "What are your interests outside of tech?"
                            : "テクノロジー分野以外では何に興味がありますか？"
                        }
                        answer={i18n.language === "en" ? (
                            <>
                                I've been enjoying lifting weights and riding the stationary bike the past year!
                                I also like to play basketball and skateboard sometimes, but not often anymore.
                                But I do follow them both! 
                                <br/><br/>
                                <a href="https://www.youtube.com/watch?v=_aHCiWvMGXQ" target="_blank" rel="noopener noreferrer">Yuki Kawamura</a> and <a href="https://www.youtube.com/watch?v=ds14jKDhvz4" target="_blank" rel="noopener noreferrer">Patrick Beverley</a> are my two favorite basketball players, and <a href={t("sciFiLink")} target="_blank" rel="noopener noreferrer">Sci-Fi Fantasy</a> currently has my favorite team of skateboarders.
                            </>
                        ) : (
                            <>
                                ここ最近はは筋トレとエアロバイクを楽しんでいます！
                                バスケットボールとスケートボードも好きですが、最近はあまりやっていません。
                                ですが両方ともチェックしています！
                                <br/><br/>
                                好きなバスケ選手は<a href={t("yukiLink")} target="_blank" rel="noopener noreferrer">河村勇輝</a>と<a href="https://www.youtube.com/watch?v=ds14jKDhvz4" target="_blank" rel="noopener noreferrer">パトリック・ベバリー</a>です。スケボーでは、<a href={t("sciFiLink")} target="_blank" rel="noopener noreferrer">Sci-Fi Fantasy</a>のチームが一番好きです。
                            </>
                        )}
                    /> */}
                </div>
                
            </div>
        </div>
    )
}