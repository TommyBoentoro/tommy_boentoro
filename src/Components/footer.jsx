// import CSS
import "./../Components/footer.css"

function Footer (){
    return(
        <div className="bgFooter d-flex align-items-center">
            <div className="container-fluid d-flex px-sm-5" style={{color:"white"}}>
                <div className="col px-0 fontPlay displayFooter">
                    <div className="footer1" >
                        Tommyboentoro@gmail.com 
                    </div>
                    <div className="fontKanit">
                        <div className="footerBody col-md-6 col-12 px-0">
                            23 years old from Indonesia who like to turn your ideas into an outstanding 
                            website.I am a full-stack developer who using MERN and find an oportunity to collaborate
                            with you!.
                        </div>
                    </div>
                </div>
                <div className="footerRight d-flex flex-column fontPlay align-items-end col px-0">
                    <div>
                        <div className="footer1">
                            Contact Me
                        </div>
                        <div className="footerBody fontKanit">
                            <a className="contactMe" href="https://www.instagram.com/tommyboentoro/">Instagram</a>
                        </div>
                        <div className="footerBody fontKanit">
                            <a className="contactMe" href="mailto:tommyboentoro@gmail.com">Email</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer