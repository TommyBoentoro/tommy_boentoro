import React,{useRef, useEffect} from "react"
import gsap,{Power3} from "gsap"
import {useIntersection} from "react-use"
import "./../Jati/jati.css"
import CSSRulePlugin from "gsap/CSSRulePlugin"

// Import Images
import JoshuaHome from "./../../assets/Joshua/JoshuaHome.JPG"
import JoshuaContact from "./../../assets/Joshua/contact.png"
import JoshuaProject from "./../../assets/Joshua/home.png"
import JoshuaProject2 from "./../../assets/Joshua/home2.png"
import JoshuaProject3 from "./../../assets/Joshua/home3.png"

// Footer
import Footer from "../../Components/footer"

function Joshua(){

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
        .from(jatiText, {duration:1.4, opacity:0, ease:Power3.easeOut})
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
                        <div  className="col-12 px-0">
                            <div className="image-outer" style={{overflow:"hidden"}}> 
                                <img ref={ el => imageJatiInner = el} src={JoshuaHome} alt="" className="imageJumbotron" />
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
                                Joshua + partners
                            </div>
                        </div>
                        <div className = "fontKanit fontHeader2" style={{overflow:"hidden"}}>
                            <div ref={el => jatiProject = el}>
                                Commercial project - Deploying
                            </div>
                        </div>
                        <div className = "fontKanit fontHeader3" style={{overflow:"hidden"}}>
                            <div ref={el => jatiDeveloper = el}>
                                Full-stack Developer
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
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="textHeaderProject">
                                    Joshua Aditama + partners
                                </div>
                                <div className="mx-3 textlink">
                                     Contact me for the link!
                                </div>
                            </div>
                            <div className="textBodyProject col-md-7 col-12 px-0">
                                Joshua Aditama + partners is a multidiciplinary design studio which focused on spatial experience. They create a connection 
                                between art and human to experience interior and architectural spaces. From commercial to personal spaces drive their to explore 
                                the specialty of each projects as works of art.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="bodyImage1">
                            <img src={JoshuaHome} alt="" className="imageProject" />
                        </div>
                    </div>
                    <div className="d-flex flex-md-row flex-column">
                        <div className="col">

                        </div>
                        <div className="body3 px-0 col">
                            <div className="textHeaderProject">
                                Flow & Features
                            </div>
                            <div className="textBodyProject px-0">
                                Joshua's required 5 pages consist of home, project, project detail, studio, contact and not to mention 
                                the admin page. The features consist of nodemailer, JSON web token, post, edit and delete. It's quite tricky while making this website
                                is a lot of customization in hover and slider effect. 
                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex px-0">
                        <div className="bodyImage2 d-flex">
                            <img src={JoshuaProject} alt="" className="imageProject" style={{objectFit:"scale-down"}} />
                            <img src={JoshuaProject2} alt="" className="imageProject mx-4" style={{objectFit:"scale-down"}} />
                            <img src={JoshuaProject3} alt="" className="imageProject" style={{objectFit:"scale-down"}} />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="body3 px-0 col">
                            <div className="textHeaderProject">
                                Tools
                            </div>
                            <div className="textBodyProject col-md-7 col-12 px-0">
                                I used reactJS, html, css, bootstrap to make Joshua's website. There are some 
                                library that i used in order to create the front-end such as react-slick, react-strap
                                and react-icon. While in the
                                back-end I am using MySQL as a database, nodeJS, express and also 
                                JSON web token "SHA256" to secure user's informations.
                                Also use redux to passing the data from back to front and vice versa.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="bodyImage3">
                           <img src={JoshuaContact} alt="" className="imageProject2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
    )
}

export default Joshua