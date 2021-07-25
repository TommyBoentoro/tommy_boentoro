import React from "react"
import "./../Supports/utils.css"
import "./../Supports/home.css"

// Images
import gambarHome from "./../assets/Home/gambarHome.png"
import gambarCard1 from "./../assets/Home/gambarCard1.png"
import gambarCard2 from "./../assets/Home/gambarCard2.png"
import gambarCard3 from "./../assets/Home/gambarCard3.png"
import gambarCard4 from "./../assets/Home/gambarCard4.png"
import cardTest from "./../assets/Home/cardTest.jpg"
import JatiJumbotron from "./../assets/Jati/JatiJumbotron.png"

// import Function
import Scroll from "../helpers/smoothScroll"

function Home(){
        return(
            <div id="scroll">
                {/* Home Head and Navbar */}
                <div className="bg">
                    <div className="container-fluid px-5">
                        <div className="navbar px-0 fontKanit sticky-top">
                            
                        </div>
                        <div className="hello fontPlay">
                            Hello !
                        </div>
    
                        <div className="d-flex">
                            <div className="col px-0">
                                
                            </div>
                            <div className="col px-0">
                                <div className="full-stack fontkanit">
                                    <div>
                                        Full-stack Developer
                                    </div>
                                    <div className="garisPertama"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-flex fontKanit" style={{color:"white"}}>
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
    
                        <div className="fontKanit">
                            <div className="indonesian d-flex justify-content-center">
                                Indonesian
                            </div>
                            <div className="d-flex justify-content-center indonesian2 fontPlay">
                                Full Stack Developer
                            </div>
                        </div>
    
                        <div className="d-flex sectionWelcome">
                            <div className="col-2 px-0">
                                1
                            </div>
                            <div className="col-4 fontPlay px-0">
                                <div className="welcome">
                                    Welcome.
                                </div>
                                <div className="selamatDatang">
                                    Selamat Datang !
                                </div>
                            </div>
                            <div className="col-5 px-0">
                                <div className="bodyWelcome fontKanit">
                                    Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                                    In porttitor in ligula eget placerat. Nunc odio nulla, 
                                    sollicitudin at diam non, pulvinar facilisis sapien. 
                                    Aenean vel porttitor metus. 
                                    Morbi laoreet turpis sit amet magna varius facilisis. 
                                    Vivamus euismod dui ac nisi dapibus, 
                                    sed malesuada urna tincidunt. Integer suscipit augue neci.
                                </div>
                            </div>
                            <div className="col-1 px-0">
                                5
                            </div>
                        </div>
    
                        
                    </div>
                </div>
    
                {/* Home Body */}
                <div className="bgBody">
                    <div className="container d-flex justify-content-center">
                        <div className="d-flex col-12 px-0" style={{marginTop:"130px"}}>
                            <div className="col px-0">
                                <div className="col-10 px-0" style={{marginTop:"130px"}}>
                                    <img src={gambarCard1} alt="" className="cardImg-1" />
                                    <div className="textCardHeading fontPlay">
                                        Medium
                                    </div>
                                    <div className="textCardBody fontKanit col-10 px-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                                        ligula eget placerat. 
                                    </div>
                                    <div className="textViewProject fontKanit">
                                        View Project.
                                    </div>
                                </div>
    
                                <div className="col-10 px-0" style={{marginTop:"100px"}}>
                                    <img src={gambarCard2} alt="" className="cardImg-1"/>
                                    <div className="textCardHeading fontPlay">
                                        Medium
                                    </div>
                                    <div className="textCardBody fontKanit col-10 px-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                                        ligula eget placerat. 
                                    </div>
                                    <div className="textViewProject fontKanit">
                                        View Project.
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column align-items-end">
                                <div className="px-0" style={{width:"85%"}}>
                                    <a href="/jati">
                                        <img src={JatiJumbotron} alt="" className="cardImg-2" />
                                    </a>
                                    <div className="textCardHeading fontPlay">
                                        Jati
                                    </div>
                                    <div className="textCardBody fontKanit col-9 px-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                                        ligula eget placerat. 
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="textViewProject fontKanit">
                                            <a className="textViewProject fontKanit" href="/jati">View Project.</a>
                                        </div>
                                    </div>
                                </div>
                                <div  style={{marginTop:"100px", width:"85%"}}>
                                    <img src={gambarCard4} alt="" className="cardImg-2"/>
                                    <div className="textCardHeading fontPlay">
                                        Furniture
                                    </div>
                                    <div className="textCardBody fontKanit col-9 px-0">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                                        ligula eget placerat. 
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <div className="textViewProject fontKanit">
                                            View Project.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
}

export default Home