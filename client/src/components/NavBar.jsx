
const NavBar = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div id="logo">
                    <h1><a href="index.html"><span>Mounjaro</span> by Lilly</a></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about-us">About</a></li>
                        <li><a className="nav-link scrollto" href="#features">Dosage</a></li>
                        <li><a className="nav-link scrollto" href="#screenshots">Warnings</a></li>
                        <li><a className="nav-link scrollto" href="#team">Tool</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Drug Interaction</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;