import React,{useRef, useEffect} from "react"
import gsap,{Power3} from "gsap"
import {useIntersection} from "react-use"
import "./../Jati/jati.css"
import CSSRulePlugin from "gsap/CSSRulePlugin"

// Import Images

import Register from "./../../assets/todo/register.png"
import HomeTodo from "./../../assets/todo/homeTodo.png"
import ModalTodo from "./../../assets/todo/modal.png"
import ActivateTodo from "./../../assets/todo/activate.png"

// Import Css
import "./../to-do-list/todo.css"

// Footer
import Footer from "../../Components/footer"

function Todo(){

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
        .from(imageJatiInner, {duration:1.4, scale:1, ease:Power3.easeOut, delay:"-1.4"})
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
                                <img ref={ el => imageJatiInner = el} src={Register} alt="" className="imageJumbotronTodo" />
                                
                            </div>
                            <div className="overlay-black-todo">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"20px"}}>
                    <div>
                        <div className = "fontPlay fontHeader1Todo" style={{overflow:"hidden"}}>
                            <div ref={el => jatiText = el}>
                                To-do-list
                            </div>
                        </div>
                        <div className = "fontKanit fontHeader2Todo" style={{overflow:"hidden"}}>
                            <div ref={el => jatiProject = el}>
                                Non commercial personal project
                            </div>
                        </div>
                        <div className = "fontKanit fontHeader3Todo" style={{overflow:"hidden"}}>
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
                                    To-do-list
                                </div>
                                <div className="mx-3 textlink">
                                     Contact me for the link!
                                </div>
                            </div>
                            <div className="textBodyProject col-md-7 col-12 px-0">
                                To-do-list is a website that can describe itself by looking at the name. It's a simple and clean
                                website reminder that you can write your to-do-list on it. You can add what you want to do
                                and tick it when it is done. You should make an account nad verified it before using this to-do-list website
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="bodyImage1Todo">
                            <img src={HomeTodo} alt="" className="imageProject" />
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
                                Due the clean and simple concept, to-do-list only has 2 pages, register/login page and home page.
                                Register/login page contains username and password while in home page there is a button called add data 
                                for you to add your activity and also looking your to-do-list directly in the same page.  
                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex px-0">
                        <div className="bodyImage2">
                            <img src={ModalTodo} alt="" className="imageProjectTodo2" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="body3 px-0 col">
                            <div className="textHeaderProject">
                                Tools
                            </div>
                            <div className="textBodyProject col-md-7 col-12 px-0">
                                I am a MERN stack developer so the tools that i use is React, HTML, CSS for the front-end
                                and nodejs, express, mysql for the back-end. Even this website only contains 2 pages there are
                                a lot of things that i must do to integritate the front and the back. Using redux as a bridge to sending the data
                                and mysql as database.  I used a library called validator just to 
                                help me making a validation in register and login page more easier. 
                                Using JSON web token "SHA256" to secure user's informations
                                and also local storage to send and get the data.
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="bodyImage3">
                           <img src={ActivateTodo} alt="" className="imageProject2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
    )
}

export default Todo