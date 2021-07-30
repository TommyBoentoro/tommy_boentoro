import "./../Supports/about2.css"

// Images
import Dog from "./../assets/About/dog.jpg"

function About2 (){
    return(
        <div className="bgAbout2" style={{overflow:"hidden"}}>
            <div className="container-fluid px-5">
                <div  style={{color:"white"}}>
                    <div className="d-flex flex-column align-items-center containerDalam" >
                        <div className="d-flex" style={{width:"65%"}}>
                            <div className="px-0 col-6 fontKanit">
                                <div className="d-flex align-items-center">
                                    <div className="stripAbout">

                                    </div>
                                    <div className="textAbout1">
                                        Hi, There
                                    </div>
                                </div>
                                <div className="textAbout2">
                                    I am Tommy Boentoro, Full-stack Developer
                                </div>
                                <div className="textAbout3" style={{width:"80%"}}>
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
                                    <input type="button" value="contact Me" className="button-success" />
                                </div>
                            </div>
                            <div className="col-6 px-0">
                                <div className="imageContainer ">
                                    <img src={Dog} alt="" className="imageTest"/>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="d-flex fontKanit" style={{width:"65%"}}>
                            <div className="d-flex justify-content-between" style={{ marginTop:"100px", width:"100%"}}>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="textAbout4">
                                        github
                                    </div>
                                    <div className="textAbout5">
                                        tommybun97
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="textAbout4">
                                        email
                                    </div>
                                    <div className="textAbout5">
                                        tommyboentoro@gmail.com
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="textAbout4">
                                        instagram
                                    </div>
                                    <div className="textAbout5">
                                        tommyboentoro
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

                        <div className="aboutAbout2 fontKanit">
                            ABOUT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About2