// Import Css
import "./../Components/navbar.css"

function Navbar (){
    return(
        <>
            <nav className="navbar fontKanit container-fluid px-sm-5 px-4 fixed-top">
                <a className=" navTommy" href="/">Tommy Boentoro</a>
                <a className="d-flex" href="/about" >
                    <div className="navAbout " >
                        About
                    </div>
                    <div className="navAbout " >
                        .
                    </div>
                </a>
            </nav>
        </>
    )
}

export default Navbar