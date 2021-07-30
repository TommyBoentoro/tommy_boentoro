// Import Css
import "./../Components/navbar.css"

function Navbar (){
    return(
        <>
            <nav className="navbar container-fluid px-5 fixed-top">
                <a className="navTommy fontKanit" href="/" style={{textDecoration:"none", fontSize:"18px", fontWeight:"700"}}>Tommy Boentoro</a>
                <a className="d-flex" href="/about2" style={{textDecoration:"none"}}>
                    <div className="navAbout fontKanit" style={{fontSize:"18px", fontWeight:"700"}}>
                        About
                    </div>
                    <div className="navAbout fontKanit" style={{fontSize:"18px", fontWeight:"700"}}>
                        .
                    </div>
                </a>
            </nav>
        </>
    )
}

export default Navbar