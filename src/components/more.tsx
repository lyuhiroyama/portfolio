import Dropdown from "./dropdown";
import castlePosePhoto from "../assets/more-image.jpeg";

export default function More() {
    return (
        <div className="more-component">
            <div className="more-container">
                <div className="main-div">
                    <img 
                        className="castlePosePhoto"
                        src={castlePosePhoto} 
                        alt="Author posing infront of Fukuoka Castle">
                    </img>
                    <div className="main-text">
                        <h3>こんにちは！</h3>
                        <p>    
                            My name is <b>Ryu</b>, and I'm from <b>Sapporo</b>.
                        </p>

                        <p>
                            I'm a <b>software developer</b> in Tokyo at a company that manages hotels, hostels, and saunas, mostly working with <b>Google Apps Script</b> and <b>JavaScript</b>.
                        </p>
                        <p>I'm also currently <b>seeking full-time opportunities</b> in <b>frontend</b>, <b>backend</b>, or <b>fullstack development</b>!</p>

                        <p id="free-time-p">In my free time, you can find me:</p>
                        <ul id="free-time-ul">
                            <li>🧑‍💻 Learning new technologies</li>
                            <li>🏋️‍♀️ Working out and playing sports 🛹 🏀</li>
                            <li>🏡 Spending time with friends and family</li>
                        </ul>
                        {/* <p>  
                            In my free time enjoy coding, working out (weights & cardio), and spending time with family and friends. I'm also an uncle to three little nephews. 
                        </p> */}
                    </div>
                </div>
                <div className="dropdown-container">
                    <h3 id="faq-header">FAQ:</h3>
                    <Dropdown
                        question="What got you into coding?"
                        answer={<>
                            It was <a id="yt-clip-1" href="https://www.youtube.com/clip/UgkxfSU5WTSHJBCoJR2djyAWtkTRgWlU2O-W?si=inOAEfzYBYFtVphU" target="_blank" rel="noopener noreferrer">a series</a> <a id="yt-clip-2" href="https://www.youtube.com/clip/UgkxXLVVdQiQm4iatysdnYb8AjcnM33fkthO?si=pBYsjSHIV3OY_FKm" target="_blank" rel="noopener noreferrer">of videos</a> <a id="yt-clip-3" href="https://www.youtube.com/clip/UgkxY3Qv7ZwyZD18mfVYoszQBpl0MP6Xsqg-?si=L2nbz7rObD5fqCHF" target="_blank" rel="noopener noreferrer">like these</a> that I happened to find sometime during the summer of 2021. 
                            <br/><br/>
                            I felt very intrigued and inspired, which basically led me to try out some coding in <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp</a>, a free tutorial website (I did have some prior experience with HTML/CSS from high school). 
                            <br/><br/>
                            I then went on to study that field at the University of the Fraser Valley, coding both in and outside of class.
                        </>}
                    />
                    <Dropdown
                        question="What do you enjoy about coding? Why this profession?"
                        answer={<>
                            I think a lot of things. In no specific order:
                            <br/>
                            <ul>
                                <li>
                                    <a href="https://nav.al/product-media#:~:text=An%20army%20of%20robots%20is%20already%20here.%20It%E2%80%99s%20very%20cheaply%20available.%20The%20bottleneck%20is%20just%20figuring%20out%20intelligent%20and%20interesting%20things%20to%20do%20to%20them" target="_blank" rel="noopener noreferrer">The idea of using code to command an army of robots</a>, and how scalable it is, is deeply captivating.
                                </li>
                                <li>
                                    The not knowing of what's possible. 
                                </li>
                                <li>
                                    Watching myself do something I didn't know I could do.
                                </li>
                                <li>
                                    I genuinely enjoy it for the sake of it.
                                </li>
                            </ul>
                            But ultimately:
                            <ul>
                                <li>
                                    It's what I find myself doing. I never have to tell myself to code.
                                </li>
                            </ul>
                            And so it was naturally fitting that I pursue this as a career!
                        </>}
                    />
                     <Dropdown
                        question="How do you approach learning a new technology?"
                        answer={<>
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
                        </>}
                    />
                     <Dropdown
                        question="How do you stay up to date with new technology?"
                        answer={<>
                            <a href="https://x.com/leejaxas" target="_blank" rel="noopener noreferrer">Twitter</a>, Youtube, meetup events, and sometimes  <a href="https://news.ycombinator.com/" target="_blank" rel="noopener noreferrer">Hacker News</a>
                        </>}
                    />
                    <Dropdown
                        question="What are your interests outside of tech?"
                        answer={<>
                            I've been enjoying lifting weights and riding the stationary bike the past year!
                            I also like to play basketball and skateboard sometimes, but not often.
                            But I do follow them both! 
                            <br/><br/>
                            <a href="https://www.youtube.com/watch?v=_aHCiWvMGXQ" target="_blank" rel="noopener noreferrer">Yuki Kawamura</a> and <a href="https://www.youtube.com/watch?v=Gi1q0HF-9zQ" target="_blank" rel="noopener noreferrer">Patrick Beverley</a> are my two favorite basketball players, and <a href="https://scififantasy.co/" target="_blank" rel="noopener noreferrer">Sci-Fi Fantasy</a> currently has my favorite team of skateboarders.
                        </>}
                    />
                </div>
            </div>
        </div>
    )
}