import React, {useRef, useEffect} from "react"
import "./../GSAP/gsap2.css"
import CatPhoto from "./../../assets/gambarGsap.jpg"

// GSAP
import CSSRulePlugin from "gsap/CSSRulePlugin"
import {TimelineLite, Power2} from "gsap"
import gsap from "gsap"

function Gsap2(){
    // let kucing = useRef(null);
    // let container = useRef(null);
    // let imageReveal = CSSRulePlugin.getRule('.image:after');
    
    // let tl = new TimelineLite();

    // useEffect(() => {
    //     tl.to(container, 0, {css: {visibility:"visible"}})
    //     .to(imageReveal, 1.4, {width: "0%", ease: Power2.easeOut})
    //     .from(kucing, 1.4, {scale:"1.6", ease:Power2.easeInOut, delay:"-1.4"})
    // });

    // New Gsap

    let hello = useRef(null)
    let container = useRef(null)
    let kucing = useRef(null)
    let imageReveal = CSSRulePlugin.getRule('.image:after');
    

    let tl = gsap.timeline()

    useEffect(() => {
        // console.log(hello)
        // tl.to(container, {duration:0, css:{visibility: "visible"}})
        // .to(imageReveal, {duration:1.4, width:"0%", ease:Power2.easeOut})
        // .from(kucing, {duration:1.4, scale:1.6, ease:Power2.easeInOut, delay:"-1.4"})
        // .from(hello,{duration:1, opacity:0, y:180, ease:Power2, delay:"-0.5"})

        gsap.to(".box1",{
            scrollTrigger: ".box1",
            x:200,
        })
    })


    return(
        <>
            <div ref={el => { container = el}} className="container d-flex flex-column justify-content-center">
                <div className="image">
                    <img ref={el => { kucing = el}} src={CatPhoto} alt=""/>
                </div>
                <div className="marginGsap">
                    <div ref={el => {hello = el}} className="newGsap">
                        Hello New GSAP
                    </div>
                </div>
            </div>

            <div className="containerscroll">
                <div className="container border">
                    <div className="box1 border my-5" >
                        Gerak
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default Gsap2