import './Home.scss';
import { info } from '../assets/constants.info';
function Home() {
    return (  
        <body>
            <section class="section">
                <div class="container">
                <h1 class="title is-1">
                    Zach Nicely
                </h1>
                <p class="subtitle is-1">
                    Conductor
                </p>
                </div>
            </section>
            <section>
                <figure className="image is 6150x3389">
                    <img src={require("../assets/nicely-lightning-portrait.jpg")} alt="lightning firing from Zach's baton"/>
                </figure>
            </section>
            <section className="bio">
                <level>
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <p className="title is-spaced">
                                    {info.bio.hd}
                                    <span>{info.bio.span}</span>
                                </p>
                                <p className="subtitle">
                                    {info.bio.p1}
                                </p>
                                <p className="subtitle">
                                    {info.bio.p2}
                                </p>
                                <p className="subtitle">
                                    {info.bio.p3}
                                </p>
                            </div>
                        </div>
                    </div>
                </level>
            </section>
        </body>
    )
}

export default Home;