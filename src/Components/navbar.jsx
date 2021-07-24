// Import Css
import "./../Components/navbar.css"

function Navbar (){
    return(
        <>
            <nav className="navbar container-fluid px-5 fixed-top">
                <a className="navTommy fontKanit" href="/">Tommy Boentoro</a>
                <a className="d-flex" href="/about">
                    <div className="navAbout fontKanit">
                        About
                    </div>
                    <div className="navAbout fontKanit">
                        .
                    </div>
                </a>
            </nav>
        </>
    )
}

export default Navbar