import React,{useRef, useEffect} from "react"
import gsap,{Power3} from "gsap"
import {useIntersection} from "react-use"
import "./../Jati/jati.css"
import CSSRulePlugin from "gsap/CSSRulePlugin"

// Import Images
import JatiTest from "./../../assets/Jati/testing.jpg"
import JatiJumbotron from "./../../assets/Jati/JatiJumbotron.png"
import Jati1 from "./../../assets/Jati/Jati1.png"
import Jati2 from "./../../assets/Jati/Jati2.png"
import Jati3 from "./../../assets/Jati/Jati3.png"

function Jati(){

    let imageJati = useRef(null)
    let imageJatiInner = useRef(null)
    let initialJati = useRef(null)
    let jatiText = useRef(null)
    let jatiProject = useRef(null)
    let jatiDeveloper = useRef(null)

    let tl = gsap.timeline({delay:".8"})
    let imageJatiReveal = CSSRulePlugin.getRule(`.image-outer:after`)

    useEffect (() => {
        gsap.to(initialJati, {duration:0, css:{visibility:"visible"}})
        // IMAGE
        tl.to(imageJatiReveal, {duration:1.4, width:"0%", ease:Power3.easeOut})
        .from(imageJatiInner, {duration:1.4, scale:1.6, ease:Power3.easeOut, delay:"-1.4"})
        .from(jatiText, {duration:1.4, y:55, ease:Power3.easeOut})
        .from(jatiProject, {duration:1.4, y:100, ease:Power3.easeOut, delay:"-1"})
        .from(jatiDeveloper, {duration:1.4, y:100, ease:Power3.easeOut, delay:"-1.4"})
        
    })

    // INTERSECTION

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    });

    const fadeIn = (sectionRef) => {
        gsap.to(sectionRef, {
            duration: 1,
            opacity: 1,
            y: -60,
            ease: "Power4.out",
            stagger: {
                amount: .3
            }
        })
    }

    const fadeOut = (sectionRef) => {
        gsap.to(sectionRef, {
            duration: 0,
            opacity: 1,
            y: -20,
            ease: "Power4.out",
        })
    }


    intersection && intersection.intersectionRatio < 0.8 ?
    fadeOut (".bgJatiBody")
    : fadeIn(".bgJatiBody")

    return(
        <>
        <div ref={el => initialJati = el} className="initialJati">
            <div className="bgJati">
                <div className="d-flex">
                    <div className="headerJati d-flex px-0">
                        <div ref={el => imageJati = el} className="col-12 px-0">
                            <div className="image-outer" style={{overflow:"hidden"}}>
                                <img ref={ el => imageJatiInner = el} src={JatiTest} alt="" className="imageJumbotron" />
                            </div>
                            <div className="overlay-black">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"20px"}}>
                    <div>
                        <div className = "fontPlay fontHeader1" style={{overflow:"hidden"}}>
                            <div ref={el => jatiText = el}>
                                Jati Furniture
                            </div>
                        </div>
                        <div className = "fontKanit fontHeader2" style={{overflow:"hidden"}}>
                            <div ref={el => jatiProject = el}>
                                Personal project - On going
                            </div>
                        </div>
                        <div className = "fontKanit fontHeader3" style={{overflow:"hidden"}}>
                            <div ref={el => jatiDeveloper = el}>
                                Front-end Developer
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="bgJatiBody" style={{overflow:"hidden"}}>
                <div className="container">
                    <div className="d-flex">
                        <div className="body1 px-0">
                            <div className="textHeaderProject">
                                Jati
                            </div>
                            <div className="textBodyProject col-7 px-0">
                                Jati is a furniture online shop type of project such as IKEA or fabelio.
                                Unfortunately i made Jati with front-end only so i used a fake-server as the back-end
                                I made this project to learn more about MERN and how to applied it in online bussiness model.
                                I am not really focusing on the design appeareances but the flow of online business model itself.

                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="body2">
                            <div>
                                <img src={Jati1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="col">

                        </div>
                        <div className="body3 px-0 col">
                            <div className="textHeaderProject">
                                Flow & Features
                            </div>
                            <div className="textBodyProject px-0">
                                Jati contains quite lot of pages because normally e-commerce required a long flow
                                from the user to login until checking out the product.It contains register/login page,
                                home page, product page, detail product page, check-out page. Whilst the features has a basic
                                e-commerce features such as search by product/category, add-to-cart, forgot password and so on.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex px-0">
                        <div className="body2">
                            <div>
                                <img src={Jati2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="body3 px-0 col">
                            <div className="textHeaderProject">
                                Tools
                            </div>
                            <div className="textBodyProject col-7 px-0">
                                I used HTML, CSS, bootstrap, and of course reactJS library to made Jati.For handle the
                                back-end I use JSON server and create the fake-server.I used a library called validator just to 
                                help me making a validation in register and login page more easier. 
                                Using JSON web token "SHA256" to secure user's informations
                                and also local storage to send and map the data.
                                Last but not least, I also use redux becauseredux allows me to manage Jati's state in a single place. 
                                moreover, it also predictable and traceable.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="body2">
                            <div>
                                <img src={Jati3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Jati