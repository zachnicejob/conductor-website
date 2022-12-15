import './Footer.scss';

function Footer () {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                This website was built by...<strong>me!</strong> In addition to being a conductor, I'm a full-stack software engineer specializing in Java Cloud. This website is a React app and working sandbox to practice and demonstrate my front-end capabilities.
                </p>
            </div>
            {/* <figure className="icon">
                <img className="center" src={require("../assets/Spirtual_Stones.png")} />
            </figure> */}
        </footer>
    )
}

export default Footer;