import './Home.scss';

function Home() {
    return (  
      <div className="container">
        <section class="section">
            <div class="container">
            <h1 class="title">
                Zach Nicely
            </h1>
            <p class="subtitle">
                Conductor
            </p>
            </div>
        </section>
        <section>
            <figure className="image is 6150x3389">
                <img src={require("../assets/nicely-lightning-portrait.jpg")} alt="lightning firing from Zach's baton"/>
            </figure>
        </section>
      </div>
    )
}

export default Home;