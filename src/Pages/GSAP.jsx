import React, {useRef, useEffect, useState} from "react"
import Gambar1 from "./../assets/Jati/Jati1.png"
import "./../Supports/gsap.css"

import {TweenMax, Power3} from "gsap"
import { delay } from "q"

function Gsap (){
    let app = useRef(null)
    let Gambar = useRef(null)
    let Text = useRef(null)

    // circle
    let circle = useRef(null)
    let circleRed = useRef(null)
    let circleBlue = useRef(null)

    const [state, setState] = useState(false)

    const handleExpand = () => {
        TweenMax.to(circleRed, .8, {width:200, height:200 , ease:Power3.easeInOut, x:50})
        setState(true)
    }

    const handleShrink = () => {
        TweenMax.to(circleRed, .8, {width:75, height:75 , ease:Power3.easeInOut, x:0})
        setState(false)
    }

    console.log(Gambar)
    useEffect(() => {
        TweenMax.to (app, 0, {css: {visibility:"visible"}})
        console.log(Gambar)
        // TweenMax.to(
        //     Gambar,
        //     .8,
        //     {
        //         opacity: 1,
        //         y:-50,
        //         ease: Power3.easeOut
        //     }
        // )

        // TweenMax.to(
        //     Text,
        //     .8,
        //     {
        //         opacity: 1,
        //         y:-50,
        //         ease: Power3.easeOut,
        //         delay: .3
        //     }
        // )

        TweenMax.staggerFrom([circle,circleRed,circleBlue], .8, {opacity: 0, x: 20, ease:Power3.easeOut}, .2)
    }, [])

    return(
        <>
        {/* TweenMax */}
            <div ref={el => {app = el}} className="container app" style={{marginTop:"100px"}}>
                {/* <div style={{fontSize:"2rem", fontWeight:"700"}}> TweenMax 1</div>
                <img className="gambar1" ref={el => {Gambar = el}} src={Gambar1} alt="" />
                <div className="text1 col-6 px-0" ref={el => {Text = el}}>
                    Lorem ipsum dolor sit amet,consectetur adipiscing elit. 
                    In porttitor in ligula eget placerat. Nunc odio nulla, 
                    sollicitudin at diam non, pulvinar facilisis sapien. 
                    Aenean vel porttitor metus. 
                    Morbi laoreet turpis sit amet magna varius facilisis. 
                    Vivamus euismod dui ac nisi dapibus, 
                    sed malesuada urna tincidunt. Integer suscipit augue neci.
                </div>
                <hr /> */}
                <div className="d-flex align-items-center flex-column" style={{marginTop:"100px"}}>
                    <div ref={el => {circle = el}} className="circle"></div>
                    <div onClick={state !== true ? handleExpand: handleShrink} ref={el => {circleRed = el}} className="circle red"></div>
                    <div ref={el => {circleBlue = el}} className="circle blue"></div>
                </div>
            </div>
        </>
    )
}

export default Gsap