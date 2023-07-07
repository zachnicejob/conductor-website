import './Navbar.scss';

function Navbar() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://www.zachnicely.com">
                    <div class="title bg-variant-title">
                        Zach Nicely
                    </div>
                    <div class="subtitle bg-variant-subtitle">
                        Conductor
                    </div>
                {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar-menu" class="navbar-menu">
                <div class="navbar-start">
                    {/* <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                        More
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div> */}
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="navbar-item">
                            Bio
                        </a>

                        <a class="navbar-item">
                            Media
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;