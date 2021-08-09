import React,{useRef, useEffect} from "react"
import "./../Supports/utils.css"
import "./../Supports/home.css"
import gsap,{Power3} from "gsap"

// Images
import JatiHome from "./../assets/Jati/testing.jpg"
import JoshuaHome from "./../assets/Joshua/JoshuaHome.JPG"


// Footer
import Footer from "../Components/footer"

function Home(){
    let tl = gsap.timeline({delay:0.4})
    
    let hello = useRef(null)
    let initiateHome = useRef(null)
    let firstLine = useRef(null)
    let secondLine = useRef(null)
    let thirdLine = useRef(null)
    let fourthLine = useRef(null)
    let fifthLine = useRef(null)
    let sixthLine = useRef(null)
    let seventhLine = useRef(null)

    useEffect(() => {
        

        gsap.to(initiateHome, {duration:0, css:{visibility:"visible"}})

        tl.from(hello, {duration:0.5,opacity:0, x:-400, ease:Power3.easeOut })
        .from(firstLine, {duration:0.5, opacity:0, x:400, ease:Power3.easeOut}, .2)
        .from(secondLine, {duration:0.5, opacity:0, x:-400, ease:Power3.easeOut}, .4)
        .from(thirdLine, {duration:1.2, y:40, ease:Power3.easeOut},1.4)
        .from(fourthLine, {duration:1.2, y:100, ease:Power3.easeOut},1.4)
        .from(fifthLine, {duration:1.2, y:45, ease:Power3.easeOut},2.1)
        .from(sixthLine, {duration:1.2, y:80, ease:Power3.easeOut}, 2.1)
        .from(seventhLine, {duration:1, y:250, ease:Power3.easeOut}, 1.9)
    })

    return(
        <>
        <div ref={el => initiateHome = el} className="HomeAwal scrollSmooth">
            {/* Home Head and Navbar */}
            <div className="bg">
                <div className="container-fluid px-5" style={{overflow:"hidden"}}>
                    <div className="navbar px-0 fontKanit sticky-top">
                        
                    </div>
                    <div ref={el => hello = el} className="hello fontPlay">
                        Hello !
                    </div>

                    <div className="d-flex">
                        <div className="col px-0">
                            
                        </div>
                        <div className="col px-0 containergarispertama">
                            <div ref={el => firstLine = el} className="full-stack fontkanit">
                                <div>
                                    Full-stack Developer
                                </div>
                                <div className="garisPertama"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div ref={el => secondLine = el} className="d-flex fontKanit containergariskedua">
                        <div className="col-1 px-0">
                            
                        </div>
                        <div className="col-2 px-0">
                            <div className="textTahun">
                                2020-2021
                            </div>
                            <div className="garisKedua">

                            </div>
                        </div>
                        <div className="col-9 px-0 fontPlay">
                            <div className="web">
                                Web / Mobile App
                            </div>
                        </div>
                    </div>

                    <div  className="fontKanit">
                        <div className="indonesian d-flex justify-content-center" style={{overflow:"hidden"}}>
                            <div ref={el => thirdLine = el}>
                                Indonesian
                            </div>
                        </div>
                        <div className="d-flex justify-content-center indonesian2 fontPlay" style={{overflow:"hidden"}}>
                            <div ref={el => fourthLine = el}>
                                Full Stack Developer
                            </div>
                        </div>
                      
                    </div>

                    <div className="d-flex container sectionWelcome">
                        <div className="col-2 px-0">
                            
                        </div>
                        <div className="col-3 fontPlay px-0">
                            <div className="welcome" style={{overflow:"hidden"}}>
                                <div ref={el => fifthLine = el}>
                                    Welcome.
                                </div>
                            </div>
                            <div className="selamatDatang" style={{overflow:"hidden"}}>
                                <div ref={el => sixthLine = el}>
                                    Selamat Datang !
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-8">
                            <div className="bodyWelcome fontKanit col-12 py-2" style={{overflow:"hidden"}}>
                                <div ref={el => seventhLine = el}>
                                23 years old from Indonesia who like to turn your ideas into an outstanding 
                                website.I am a full-stack developer who using MERN Stack and find an oportunity to collaborate
                                with you!.
                                </div>
                            </div>
                        </div>
                        
                    </div> 
                </div>
            </div>

            {/* Home Body */}
            <div className="bgBody">
                <div className="container justify-content-center d-flex px-0">
                    <div className="d-flex col-12 flex-column flex-md-row px-0 scroll martopBody">
                        <div className="col px-0">
                            <div className="col-md-11 col-12 px-md-0 px-3 martopJati">
                                    <a href="/jati">
                                        <img src={JatiHome} alt="" className="cardImg-1" />
                                    </a>
                                <div className="textCardHeading fontPlay">
                                    Jati
                                </div>
                                <div className="textCardBody fontKanit col-11 px-0">
                                    Non-commercial personal project with furniture ecommerce theme.
                                    Using features such as JWT, add-to-cart, etc.
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="textViewProject fontKanit">
                                        <a className="textViewProject fontKanit" href="/jati">View Project.</a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-10 px-0" style={{marginTop:"100px"}}>
                                <img src={TommyHome} alt="" className="cardImg-1"/>
                                <div className="textCardHeading fontPlay">
                                   Tommy Boentoro's
                                </div>
                                <div className="textCardBody fontKanit col-11 px-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                                    ligula eget placerat. 
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="textViewProject fontKanit">
                                        View Project.
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="col d-flex flex-column align-md-items-end px-0">
                            <div className="px-md-0 px-3 col widthJoshua">
                                <a href="/joshua">
                                    <img src={JoshuaHome} alt="" className="cardImg-2" />
                                </a>
                                <div className="textCardHeading fontPlay">
                                    Joshua + partners 
                                </div>
                                <div className="textCardBody fontKanit col-10 px-0">
                                    Profesional website portofolio that engaged in interior design and architecture
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="textViewProject fontKanit">
                                        <a className="textViewProject fontKanit" href="/joshua">View Project.</a>
                                    </div>
                                    <div className="textViewProject fontKanit">
                                        <a className="textViewProject fontKanit" href="https://joshuaaditama.com/">View Site.</a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="px-md-0 px-3 col widthJoshua marginRegister">
                                <a href="/todolist">
                                    <img src={Register} alt="" className="cardImg-2"/>
                                </a>
                                <div className="textCardHeading fontPlay">
                                    To-do-list 
                                </div>
                                <div className="textCardBody fontKanit col-11 px-0">
                                    My very first project with full front and back-end. Very simple yet nostalgic.
                                </div>
                                <div className="d-flex justify-content-end">
                                    <div className="textViewProject fontKanit">
                                        <a className="textViewProject fontKanit" href="/todolist">View Project.</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
        
    )
}

export default Home