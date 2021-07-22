import "./../Supports/utils.css"
import "./../Supports/home.css"

// Images
import gambarHome from "./../assets/Home/gambarHome.png"

function Home(){
    return(
        <div className="bg">
            <div className="container">
                <div className="navbar px-0 fontKanit">
                    <div className="navTommy">
                        Tommy Boentoro
                    </div>
                    <div className="d-flex">
                        <div className="navAbout">
                            About
                        </div>
                        <div>
                            .
                        </div>
                    </div>
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

                <div className="border" style={{marginTop:"43px"}}>
                    <img src={gambarHome} className="gambarhome" alt="" style={{width:"100%"}}/>
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
    )
}

export default Home