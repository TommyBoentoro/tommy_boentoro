import React, {useRef, useEffect} from "react";
import gsap,{Power3} from "gsap";

import "./../Supports/about2.css"
import "./../Supports/about.css"

function About2 (){

    let tl = gsap.timeline()

    let hi = useRef(null)
    let body = useRef(null)
    let email = useRef(null)
    let emailName = useRef(null)
    let instagram = useRef(null)
    let instagramName = useRef(null)
    // let image = useRef(null)
    // let containerImage = useRef(null)

    useEffect(()=>{
        tl
        // .from(containerImage, {duration:1.4,y:1000, ease:Power3.easeOut})
        // .from(image, {duration:1.4,scale:1.6, ease:Power3.easeOut, delay:-1.4})
        .from(hi, {duration:1, opacity:0, x:-700, ease:Power3.easeOut},1)
        .from(body, {duration:1.4, opacity:0, ease:Power3.easeOut})
        .from(email, {duration:1.4, y:100, ease:Power3.easeOut},2.5)
        .from(emailName, {duration:1.4, y:100, ease:Power3.easeOut},2.5)
        .from(instagram, {duration:1.4, y:100, ease:Power3.easeOut},2.5)
        .from(instagramName, {duration:1.4, y:100, ease:Power3.easeOut},2.5)

    })

    return(
        <div className="bgAbout2" style={{overflow:"auto"}}>
            <div className="container px-5">
                <div  style={{color:"white"}}>
                    <div className="d-flex flex-column  align-items-center containerDalam" >
                        <div className="d-flex " style={{width:"100%"}}>
                            <div className="px-0  col-12 fontKanit">
                                <div ref={el =>  hi = el}  className="d-flex align-items-center">
                                    <div className="stripAbout">

                                    </div>
                                    <div className="textAbout1">
                                        Hi, There
                                    </div>
                                </div>
                                <div ref={el => body = el}>
                                    <div className="textAbout2">
                                        I am Tommy Boentoro, Full-stack Developer
                                    </div>
                                    <div className="textAbout3">
                                        <div className="px-0">
                                            23 years old from Indonesia who like to turn your ideas into an outstanding website.
                                            Graduated from  University as a Industrial Engineering and decided to continue  studying web and mobile development
                                            at digital school.
                                        </div>
                                        <br />
                                        <div>
                                            I am using MERN Stack and others such as HTML, CSS, Bootstrap, github, mySQL, docker, redux
                                            basic javascript, basic figma and GSAP to help me making a website
                                        </div>
                                        <br />
                                        <div>
                                            When I'm not coding or designing in Figma, u'll find me in the Badminton field or on my room playing video games.
                                        </div>
                                    </div>
                                    <div style={{marginTop:"20px"}}>
                                       <a href="mailto:tommyboentoro@gmail.com">
                                            <input  type="button" value="contact Me" className="button-success" />
                                       </a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-6 px-0 imageContainerAbout">
                                <div ref={el => containerImage = el} className="imageContainer" style={{overflow:"hidden"}}>
                                    <img src={Dog} ref={el => image = el} alt="" className="imageTest"/>
                                </div>
                            </div> */}
                        </div>

                        {/* Section 2 */}
                        <div className="d-flex fontKanit widthFooter123">
                            <div className="d-flex justify-content-between flex-sm-row flex-column " style={{ marginTop:"100px", width:"100%"}}>
                                <div className="d-flex flex-column align-items-center">
                                    <div style={{overflow:"hidden"}}>
                                        <div ref={el => email = el} className=" textAbout4">
                                            email
                                        </div>
                                    </div>
                                    <div style={{overflow:"hidden"}}>
                                        <div ref={el => emailName = el} >
                                        <a className="textAbout5"  href="mailto:tommyboentoro@gmail.com">tommyboentoro@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <div style={{overflow:"hidden"}}>
                                        <div ref={el => instagram = el} className="textAbout4 ">
                                            Instagram
                                        </div>
                                    </div>
                                    <div style={{overflow:"hidden"}}>
                                        <div ref={el => instagramName = el}  style={{cursor:"pointer"}}>
                                            <a className="textAbout5" href="https://www.instagram.com/tommyboentoro/">tommyboentoro</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center rightsAbout fontKanit">
                            © 2021 Tommy Boentoro. All Rights Reserved
                        </div>

                        <div className="aboutAbout fontKanit">
                            ABOUT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2