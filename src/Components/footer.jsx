// import CSS
import "./../Components/footer.css"

function Footer (){
    return(
        <div className="bgFooter d-flex align-items-center">
            <div className="container-fluid d-flex px-5" style={{color:"white"}}>
                <div className="col px-0 fontPlay">
                    <div className="footer1" >
                        Tommyboentoro@gmail.com 
                    </div>
                    <div className="fontKanit">
                        <div className="footerBody col-md-6 col-12 px-0">
                            23 years old from Indonesia who like to turn your ideas into an outstanding 
                            website.I am a full-stack developer who using MERN Stack and find a oportunity to collaborate
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
                            <a className="contactMe" target="_blank" href="https://www.instagram.com/tommyboentoro/">Instagram</a>
                        </div>
                        <div className="footerBody fontKanit">
                            Twitter
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer