import React,{useRef, useEffect} from "react"
import gsap,{Power3} from "gsap"
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

    let tl = gsap.timeline({delay:".8"})
    let imageJatiReveal = CSSRulePlugin.getRule(`.image-outer:after`)

    useEffect (() => {
        gsap.to(initialJati, {duration:0, css:{visibility:"visible"}})
        // IMAGE
        tl.to(imageJatiReveal, {duration:1.4, width:"0%", ease:Power3.easeOut})
        .from(imageJatiInner, {duration:1.4, scale:1.6, ease:Power3.easeOut, delay:"-1.4"})
        
    })

    return(
        <>
        <div ref={el => initialJati = el} className="initialJati">
            <div className="bgJati">
                <div className="container-fluid px-5">
                    <div className="d-flex">
                        <div className="headerJati d-flex px-0">
                            <div ref={el => imageJati = el} className="col-9 px-0">
                                <div className="image-outer" style={{overflow:"hidden"}}>
                                    <img ref={ el => imageJatiInner = el} src={JatiTest} alt="" className="imageJumbotron" />
                                </div>
                            </div>
                            <div className="col-3 px-5">
                                <div className="fontHeader1 fontKanit">
                                    Jati Furniture
                                </div>
                                <div style={{marginTop:"80px"}}>
                                    <div className="fontHeader2 fontPlay">
                                        Role
                                    </div>
                                    <div className="fontHeaderBody fontKanit">
                                        UI Designer
                                    </div>
                                    <div className="fontHeaderBody fontKanit">
                                        Developer
                                    </div>
                                </div>

                                <div style={{marginTop:"40px"}}>
                                    <div className="fontHeader2 fontPlay">
                                        Type
                                    </div>
                                    <div  className="fontHeaderBody fontKanit">
                                        Personal Project
                                    </div>
                                </div>

                                <div style={{marginTop:"80px"}}>
                                    <div className="fontHeaderBody fontKanit" style={{color:"white"}}>Link Webstie</div>
                                    <a href="">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="garisProjectHeader">
                        </div>
                    </div>
                    <div className="fontHeader2 d-flex justify-content-center fontPlay" style={{marginTop:"85px"}}>
                        See More !
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="bgJatiBody">
                <div className="container">
                    <div className="d-flex">
                        <div className="body1 px-0">
                            <div className="textHeaderProject">
                                Jati
                            </div>
                            <div className="textBodyProject col-7 px-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam ultrices elementum lacus nec suscipit. Vestibulum nisl ante, auctor quis 
                                rhoncus non, aliquet ut diam. Fusce efficitur est id euismod luctus. 
                                Proin lacinia dolor a leo lacinia commodo et et enim. Nam interdum faucibus leo ut imperdiet. 
                                Proin augue orci, ornare vitae ligula in, facilisis vehicula dui. 
                                Mauris eu facilisis mi, quis luctus metus.
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
                                Meaning of Jati
                            </div>
                            <div className="textBodyProject px-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam ultrices elementum lacus nec suscipit. Vestibulum nisl ante, auctor quis 
                                rhoncus non, aliquet ut diam. Fusce efficitur est id euismod luctus. 
                                Proin lacinia dolor a leo lacinia commodo et et enim. Nam interdum faucibus leo ut imperdiet. 
                                Proin augue orci, ornare vitae ligula in, facilisis vehicula dui. 
                                Mauris eu facilisis mi, quis luctus metus.
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
                                Framework & Tools
                            </div>
                            <div className="textBodyProject col-7 px-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam ultrices elementum lacus nec suscipit. Vestibulum nisl ante, auctor quis 
                                rhoncus non, aliquet ut diam. Fusce efficitur est id euismod luctus. 
                                Proin lacinia dolor a leo lacinia commodo et et enim. Nam interdum faucibus leo ut imperdiet. 
                                Proin augue orci, ornare vitae ligula in, facilisis vehicula dui. 
                                Mauris eu facilisis mi, quis luctus metus.
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