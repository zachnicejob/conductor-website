import './Navbar.scss';

function Navbar() {
    return (
        <div class="navbar">
            {/* <div class="navbar-start">
                <div class="container">
                    <h1 class="title is-1 bg-variant-title">
                        Zach Nicely
                    </h1>
                    <p class="subtitle is-1 bg-variant-subtitle">
                        Conductor
                    </p>
                </div>
            </div> */}
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item title is-3 bg-variant-title">
                        Home
                    </a>
                    <a class="navbar-item title is-3 bg-variant-title">
                        Media
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Navbar;