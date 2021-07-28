import React,{useEffect,useRef} from "react"
import gsap,{Power2,Power3} from "gsap"
import "./../Supports/about.css"

// Images
import Foto from "./../assets/About/FotoImage.jpg"
import Github from "./../assets/About/github.png"
import Instagram from "./../assets/About/instagram.png"



function About(){

    // TIMELINE GSAP
    let tl = gsap.timeline({delay:.8})

    // REF

        let initial = useRef(null)

        // Image ref
        let imageAbout = useRef(null)
        let fotoImage = useRef(null)

        // Text ref
        let content = useRef(null)
        let button = useRef(null)
        let icon = useRef(null)

    // EFFECT
    useEffect (() => {
        gsap.to(initial, {duration:0, css:{visibility:"visible"}})

        // image
        tl.from(imageAbout, {duration:1, y:1280, ease:Power2.easeOut}, "start")
        .from(fotoImage, {duration:1.5, scale:1.6, ease:Power2.easeOut}, .2)

        // text
        let headlineFirst = content.children[0];
        let headlinerSecond = headlineFirst.nextSibling;
        let body = headlinerSecond.nextSibling;

        // tl.from(headlineFirst, {duration:1.2,opacity:1, y:80, ease:Power3.easeOut})
        tl.from([headlineFirst.children[0], headlinerSecond.children[0]], {duration:1, opacity:1, y:80, ease:Power3.easeInOut, stagger: 0.1}, 0.5, "start")
        .from(body.children[0], {duration:1.2, opacity:1, y:200, ease:Power3.easeOut})
        .from(button, {duration:1.2, opacity:0, x:80, ease:Power3.easeInOut, delay:"-1"})
        .from(icon, {duration:1.2, opacity:0})

    })

    return(
        <>
            <div ref={el => {initial = el}} className="initial bgAbout textWhite">
                <div className="container d-flex" style={{overflow:"hidden"}}>
                    <div ref={el => content = el} className="col">
                        <div className="d-flex flex-column px-5 py-0" style={{overflow:"hidden"}}>
                                <div className="headerAbout1 fontPlay py-0">
                                    Hi
                                </div>
                        </div>
                        <div className="d-flex flex-column align-items-end px-5" style={{overflow:"hidden"}}>
                            <div className="headerAbout2 fontKanit">
                                They called me Tommy
                            </div>
                        </div>
                        <div className="bodyAbout fontKanit px-5" style={{overflow:"hidden"}}>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor in 
                                ligula eget placerat. Nunc odio nulla, sollicitudin at diam non, pulvinar 
                                facilisis sapien. Aenean vel porttitor metus. Morbi laoreet turpis sit amet
                                magna varius facilisis. Vivamus euismod dui ac nisi dapibus, 
                                sed malesuada urna tincidunt. Integer suscipit augue neci.
                            </div>
                        </div>
                        <div className="px-5 d-flex" style={{marginTop:"20px"}}>
                            <input ref={el => {button =el}} type="button" value="Contact Me" className="button-success" />
                        </div>

                        {/* <div className="bodyAbout fontKanit px-5">
                            HTML, CSS, Javascript, Native, React Js, Docker, MySql, MongoDb 
                        </div> */}

                        <div ref={el => { icon = el}} className="d-flex px-5">
                            <div className="divImageContact">
                                <img src={Github} alt="" className="imageContact"/>
                            </div>
                            <div className="divImageContact" style={{marginLeft:"20px"}}>
                                <img src={Instagram} alt=""  className="imageContact" />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-start">
                            <div ref={el => imageAbout = el} className="imageAbout">
                                <img ref={el => fotoImage = el} src={Foto} alt="" className="fotoImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About